import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Section } from "@/components/section";
import { initializePaystack, verifyPaystack } from "@/lib/payments.functions";
import { WEB_PACKAGES, formatNaira } from "@/lib/site-data";
import { CheckCircle2, Loader2, ShieldCheck, XCircle } from "lucide-react";

const searchSchema = z.object({
  pkg: z.string().optional(),
  amount: z.coerce.number().optional(),
  reference: z.string().optional(),
  trxref: z.string().optional(),
});

export const Route = createFileRoute("/payment")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Make a Payment — Vixe Creatives (Paystack Secure)" },
      { name: "description", content: "Securely pay for your Vixe Creatives package or custom quotation via Paystack." },
      { property: "og:title", content: "Make a Payment — Vixe Creatives" },
      { property: "og:description", content: "Secure card and bank transfer via Paystack." },
      { property: "og:url", content: "/payment" },
    ],
    links: [{ rel: "canonical", href: "/payment" }],
  }),
  component: PaymentPage,
});

function PaymentPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const init = useServerFn(initializePaystack);
  const verify = useServerFn(verifyPaystack);

  const [state, setState] = useState<
    | { phase: "form"; error?: string }
    | { phase: "loading" }
    | { phase: "verifying" }
    | { phase: "success"; ref: string; amountKobo: number }
    | { phase: "failed"; ref: string; reason?: string }
  >({ phase: "form" });

  // If we have a reference on the URL, verify it (Paystack callback).
  useEffect(() => {
    const ref = search.reference || search.trxref;
    if (!ref || state.phase !== "form") return;
    setState({ phase: "verifying" });
    verify({ data: { reference: ref } })
      .then((r) => {
        if (r.success) setState({ phase: "success", ref, amountKobo: r.amountKobo });
        else setState({ phase: "failed", ref, reason: r.status });
      })
      .catch((e) => setState({ phase: "failed", ref, reason: e?.message }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const packageName = String(fd.get("packageName") || search.pkg || "Custom Package");
    const amount = Number(fd.get("amount") || search.amount || 0);
    if (!amount || amount < 100) {
      setState({ phase: "form", error: "Enter a valid amount (min ₦100)." });
      return;
    }
    setState({ phase: "loading" });
    try {
      const res = await init({
        data: {
          email: String(fd.get("email") || ""),
          fullName: String(fd.get("fullName") || ""),
          phone: String(fd.get("phone") || ""),
          packageName,
          amount,
        },
      });
      window.location.href = res.authorizationUrl;
    } catch (err: any) {
      setState({ phase: "form", error: err?.message || "Could not start payment." });
    }
  };

  if (state.phase === "verifying") {
    return (
      <PageShell title="Verifying your payment…">
        <Loader2 className="mx-auto h-10 w-10 animate-spin text-brand" />
        <p className="mt-4 text-muted-foreground">Please wait while we confirm your transaction.</p>
      </PageShell>
    );
  }

  if (state.phase === "success") {
    return (
      <PageShell title="Payment successful">
        <CheckCircle2 className="mx-auto h-16 w-16 text-brand" />
        <h2 className="mt-4 text-2xl font-bold">Thank you!</h2>
        <p className="mt-2 text-muted-foreground">
          Your payment of <span className="font-semibold text-foreground">{formatNaira(state.amountKobo / 100)}</span> is confirmed.
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Ref: {state.ref}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/" className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground">Back home</Link>
          <button onClick={() => { setState({ phase: "form" }); navigate({ search: {} }); }} className="rounded-full border border-border px-6 py-3 text-sm font-semibold">Another payment</button>
        </div>
      </PageShell>
    );
  }

  if (state.phase === "failed") {
    return (
      <PageShell title="Payment not completed">
        <XCircle className="mx-auto h-16 w-16 text-destructive" />
        <p className="mt-4 text-muted-foreground">We couldn't verify your transaction {state.reason ? `(${state.reason})` : ""}. No charge is final until we confirm it.</p>
        <p className="mt-1 text-xs text-muted-foreground">Ref: {state.ref}</p>
        <div className="mt-8 flex justify-center gap-3">
          <button onClick={() => { setState({ phase: "form" }); navigate({ search: {} }); }} className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground">Try again</button>
          <Link to="/contact" className="rounded-full border border-border px-6 py-3 text-sm font-semibold">Contact support</Link>
        </div>
      </PageShell>
    );
  }

  const initialPkg = search.pkg ?? "";
  const initialAmount = search.amount ?? "";

  return (
    <>
      <section className="bg-hero py-16 text-center sm:py-20">
        <div className="container-x">
          <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">Payment</span>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Secure <span className="text-gradient-brand">Paystack</span> checkout</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Pay for a fixed package or fund a custom quotation. Cards, bank transfer, USSD.</p>
        </div>
      </section>

      <Section>
        <div className="mx-auto grid max-w-2xl gap-6 rounded-3xl border border-border bg-card p-8 shadow-elegant">
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Package</label>
              <select name="packageName" defaultValue={initialPkg} className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand focus:ring-2 focus:ring-brand/20">
                <option value="">— Custom quotation —</option>
                {WEB_PACKAGES.map((p) => <option key={p.name} value={p.name}>{p.name} — {formatNaira(p.price)}</option>)}
              </select>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Amount (₦)</label>
              <input type="number" min={100} required name="amount" defaultValue={initialAmount || ""}
                className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand focus:ring-2 focus:ring-brand/20"
                placeholder="e.g. 500000" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField name="fullName" label="Full name" required />
              <TextField name="phone" label="Phone" />
              <div className="sm:col-span-2">
                <TextField name="email" label="Email" type="email" required />
              </div>
            </div>

            {"error" in state && state.error && <p className="text-sm text-destructive">{state.error}</p>}

            <button type="submit" disabled={state.phase === "loading"} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-brand disabled:opacity-60">
              {state.phase === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              {state.phase === "loading" ? "Redirecting to Paystack…" : "Pay securely with Paystack"}
            </button>
            <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5" /> Payments processed by Paystack. We never store your card details.
            </p>
          </form>
        </div>
      </Section>
    </>
  );
}

function TextField({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium" htmlFor={name}>{label}{required && <span className="text-brand"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} className="rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand focus:ring-2 focus:ring-brand/20" />
    </div>
  );
}

function PageShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Section eyebrow="Payment" title={title}>
      <div className="mx-auto max-w-lg rounded-3xl border border-border bg-card p-10 text-center shadow-elegant">
        {children}
      </div>
    </Section>
  );
}
