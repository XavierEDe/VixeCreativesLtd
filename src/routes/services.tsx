import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { SERVICES } from "@/lib/site-data";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Vixe Creatives (Web, Mobile, Software, Cloud)" },
      { name: "description", content: "Full-service technology solutions: websites, mobile apps, custom software, UI/UX, branding, networking, hardware, cloud, IT support and digital marketing." },
      { property: "og:title", content: "Vixe Creatives — Services" },
      { property: "og:description", content: "Websites, mobile apps, software, cloud, networking, hardware and branding." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-hero py-20 text-center sm:py-28">
        <div className="container-x">
          <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">Services</span>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl">Every capability you'd hire <span className="text-gradient-brand">four agencies for</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg">One team, twelve disciplines. Delivered on brief, on brand and on time.</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.slug} className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-brand">
              <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-brand">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-foreground/80"><Check className="h-4 w-4 text-brand" />{f}</li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-4">
                <div className="text-xs text-muted-foreground">Starting from</div>
                <div className="text-2xl font-bold text-brand">₦{s.from.toLocaleString("en-NG")}</div>
              </div>
              <div className="mt-5 flex gap-2">
                <Link to="/consultation" className="flex-1 rounded-full bg-gradient-brand px-4 py-2 text-center text-xs font-semibold text-brand-foreground shadow-brand">Book Slot</Link>
                <Link to="/pricing" className="flex-1 rounded-full border border-border px-4 py-2 text-center text-xs font-semibold hover:border-brand hover:text-brand">Subscribe</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-surface p-10 text-center">
          <h3 className="text-2xl font-bold">Need something custom?</h3>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">Tell us about your project. We'll draft a tailored proposal within 24 hours.</p>
          <Link to="/consultation" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-brand">
            Request Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
