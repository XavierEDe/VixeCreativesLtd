import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InitSchema = z.object({
  email: z.string().trim().email(),
  fullName: z.string().trim().min(2).max(120),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  packageName: z.string().trim().min(2).max(120),
  amount: z.number().int().positive().max(100_000_000_00), // in naira; converted to kobo below
});

export const initializePaystack = createServerFn({ method: "POST" })
  .validator((data: unknown) => InitSchema.parse(data))
  .handler(async ({ data }) => {
    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey) {
      throw new Error("Payments are temporarily unavailable. Please try again shortly.");
    }
    const amountKobo = data.amount * 100;

    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        amount: amountKobo,
        currency: "NGN",
        metadata: {
          full_name: data.fullName,
          phone: data.phone || null,
          package_name: data.packageName,
        },
      }),
    });

    const json = (await res.json()) as {
      status: boolean;
      message?: string;
      data?: { authorization_url: string; access_code: string; reference: string };
    };
    if (!json.status || !json.data) {
      console.error("[paystack] init failed:", json);
      throw new Error(json.message || "Could not initialize payment.");
    }

    const { supabaseAdmin } = await import("@/integrations/client.server");
    await supabaseAdmin.from("payments").insert({
      reference: json.data.reference,
      customer_email: data.email,
      customer_name: data.fullName,
      customer_phone: data.phone || null,
      package_name: data.packageName,
      amount_kobo: amountKobo,
      currency: "NGN",
      status: "pending",
    });

    return {
      authorizationUrl: json.data.authorization_url,
      reference: json.data.reference,
    };
  });

const VerifySchema = z.object({ reference: z.string().trim().min(4).max(120) });

export const verifyPaystack = createServerFn({ method: "POST" })
  .validator((data: unknown) => VerifySchema.parse(data))
  .handler(async ({ data }) => {
    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey) throw new Error("Payments unavailable.");

    const res = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(data.reference)}`, {
      headers: { Authorization: `Bearer ${secretKey}` },
    });
    const json = (await res.json()) as {
      status: boolean;
      data?: { status: string; amount: number; paid_at?: string; customer?: { email: string } };
      message?: string;
    };
    if (!json.status || !json.data) {
      throw new Error(json.message || "Verification failed.");
    }

    const paid = json.data.status === "success";
    const { supabaseAdmin } = await import("@/integrations/client.server");
    await supabaseAdmin.from("payments").update({
      status: paid ? "success" : json.data.status,
      paystack_response: json.data as any,
      paid_at: paid ? (json.data.paid_at ?? new Date().toISOString()) : null,
    }).eq("reference", data.reference);

    return {
      success: paid,
      status: json.data.status,
      amountKobo: json.data.amount,
      email: json.data.customer?.email ?? null,
      paidAt: json.data.paid_at ?? null,
    };
  });
