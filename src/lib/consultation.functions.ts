import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
//import { resend } from "@/lib/resend";

const ConsultationSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  companyName: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(6).max(30),
  service: z.string().trim().min(2).max(120),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  preferredDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date"),
  preferredTime: z.string().trim().min(1).max(20),
  meetingType: z.enum(["virtual", "physical", "phone"]),
  projectDescription: z.string().trim().min(10).max(4000),
});

export const bookConsultation = createServerFn({ method: "POST" })
  .validator((data: unknown) => ConsultationSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/client.server");
    const { error } = await supabaseAdmin.from("consultations").insert({
      full_name: data.fullName,
      company_name: data.companyName || null,
      email: data.email,
      phone: data.phone,
      service: data.service,
      budget: data.budget || null,
      preferred_date: data.preferredDate,
      preferred_time: data.preferredTime,
      meeting_type: data.meetingType,
      project_description: data.projectDescription,
    });
    if (error) {
      console.error("[consultation] insert failed:", error);
      throw new Error("Could not save your booking. Please try again.");
    }
    
    /*await resend.emails.send({
      from: "Vixe Software <bookingvixecreatives.com>", // Change later to your verified domain
      to: "vixe.xed@email.com", // Your email address
      subject: "New Consultation Booking",
      html: `
        <h2>New Consultation Booking</h2>

        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Company:</strong> ${data.companyName || "N/A"}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Budget:</strong> ${data.budget || "Not specified"}</p>
        <p><strong>Date:</strong> ${data.preferredDate}</p>
        <p><strong>Time:</strong> ${data.preferredTime}</p>
        <p><strong>Meeting Type:</strong> ${data.meetingType}</p>

        <h3>Project Description</h3>
        <p>${data.projectDescription}</p>
      `,
    }); */
    
    return { ok: true } as const;
  });
