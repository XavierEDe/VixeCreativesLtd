import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Section } from "@/components/section";
import { SERVICES } from "@/lib/site-data";
import { bookConsultation } from "@/lib/consultation.functions";
import { CheckCircle2, Loader2, Video, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Book a Consultation with Vixe Creatives" },
      { name: "description", content: "Book a free virtual, phone or in-person consultation with Vixe Creatives. We reply within 24 hours." },
      { property: "og:title", content: "Book a Consultation with Vixe Creatives" },
      { property: "og:description", content: "Book a free consultation with our team in Abuja." },
      { property: "og:url", content: "/consultation" },
    ],
    links: [{ rel: "canonical", href: "/consultation" }],
  }),
  component: ConsultationPage,
});

const TIME_SLOTS = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];
const BUDGETS = ["Under ₦500,000", "₦500,000 – ₦2,000,000", "₦2,000,000 – ₦5,000,000", "₦5,000,000+"];

function ConsultationPage() {
  const submit = useServerFn(bookConsultation);
  const [state, setState] = useState<{ loading: boolean; ok: boolean; error?: string }>({ loading: false, ok: false });
  const [meetingType, setMeetingType] = useState<"virtual" | "physical" | "phone">("virtual");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ loading: true, ok: false });
    const fd = new FormData(e.currentTarget);
    try {
      await submit({
        data: {
          fullName: String(fd.get("fullName") || ""),
          companyName: String(fd.get("companyName") || ""),
          email: String(fd.get("email") || ""),
          phone: String(fd.get("phone") || ""),
          service: String(fd.get("service") || ""),
          budget: String(fd.get("budget") || ""),
          preferredDate: String(fd.get("preferredDate") || ""),
          preferredTime: String(fd.get("preferredTime") || ""),
          meetingType,
          projectDescription: String(fd.get("projectDescription") || ""),
        },
      });
      setState({ loading: false, ok: true });
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setState({ loading: false, ok: false, error: err?.message || "Something went wrong." });
    }
  };

  return (
    <>
      <section className="bg-hero py-20 text-center sm:py-28">
        <div className="container-x">
          <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">Consultation</span>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Book a <span className="text-gradient-brand">free consultation</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg">Virtual, phone or in-person in Abuja. We'll respond within 24 hours.</p>
        </div>
      </section>

      <Section>
        <div className="mx-auto grid max-w-4xl gap-8 rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-10">
          {state.ok ? (
            <div className="text-center py-16">
              <CheckCircle2 className="mx-auto h-16 w-16 text-brand" />
              <h2 className="mt-4 text-2xl font-bold">Booking received!</h2>
              <p className="mt-2 text-muted-foreground">We'll email you within 24 hours to confirm your slot.</p>
              <button onClick={() => setState({ loading: false, ok: false })} className="mt-6 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground">
                Book another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Meeting type</label>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { v: "virtual", label: "Virtual", Icon: Video },
                    { v: "physical", label: "In-person (Abuja)", Icon: MapPin },
                    { v: "phone", label: "Phone call", Icon: Phone },
                  ].map(({ v, label, Icon }) => (
                    <button type="button" key={v} onClick={() => setMeetingType(v as any)} className={`flex items-center gap-2 rounded-xl border p-3 text-sm font-medium transition-colors ${
                      meetingType === v ? "border-brand bg-brand/10 text-brand" : "border-border hover:border-brand/40"
                    }`}>
                      <Icon className="h-4 w-4" /> {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="fullName" label="Full name" required />
                <Field name="companyName" label="Company (optional)" />
                <Field name="email" label="Email" type="email" required />
                <Field name="phone" label="Phone number" required />
                <SelectField name="service" label="Service" required options={SERVICES.map((s) => s.title)} />
                <SelectField name="budget" label="Budget" options={BUDGETS} />
                <Field name="preferredDate" label="Preferred date" type="date" required />
                <SelectField name="preferredTime" label="Preferred time" required options={TIME_SLOTS} />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="projectDescription">Project description <span className="text-brand">*</span></label>
                <textarea name="projectDescription" id="projectDescription" required minLength={10} maxLength={4000} rows={5}
                  className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                  placeholder="Tell us what you'd like to build…" />
              </div>

              {state.error && <p className="text-sm text-destructive">{state.error}</p>}

              <button type="submit" disabled={state.loading} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-brand disabled:opacity-60">
                {state.loading && <Loader2 className="h-4 w-4 animate-spin" />} {state.loading ? "Sending…" : "Book Consultation"}
              </button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium" htmlFor={name}>{label}{required && <span className="text-brand"> *</span>}</label>
      <input id={name} name={name} type={type} required={required}
        className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
    </div>
  );
}

function SelectField({ name, label, options, required }: { name: string; label: string; options: string[]; required?: boolean }) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium" htmlFor={name}>{label}{required && <span className="text-brand"> *</span>}</label>
      <select id={name} name={name} required={required}
        className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20">
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
