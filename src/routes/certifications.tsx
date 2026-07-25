import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/section";
import { CERTIFICATIONS } from "@/lib/site-data";
import { ShieldCheck, X, FileText, Download } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Registration & Certifications — Vixe Creatives" },
      { name: "description", content: "Vixe Creatives Limited registration, CAC, tax and professional certifications." },
      { property: "og:title", content: "Registration & Certifications — Vixe Creatives" },
      { property: "og:description", content: "Our registration and professional certifications." },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: CertPage,
});

function CertPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <section className="bg-hero py-20 text-center sm:py-28">
        <div className="container-x">
          <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">Certifications</span>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Our registration & certifications</h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">A fully registered Nigerian company with all statutory compliance and professional certifications.</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <div key={c.title} className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-red-500/20 via-neutral-900 to-black">
                <div className="absolute inset-0 grid place-items-center">
                  <FileText className="h-16 w-16 text-brand/70" />
                </div>
                {c.verified && (
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-brand px-2 py-1 text-[10px] font-semibold text-brand-foreground">
                    <ShieldCheck className="h-3 w-3" /> Verified
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.authority} · {c.date}</p>
                <div className="mt-4 flex gap-2">
                  <button onClick={() => setOpen(i)} className="flex-1 rounded-full bg-gradient-brand px-3 py-2 text-xs font-semibold text-brand-foreground">View</button>
                  <button className="flex-1 rounded-full border border-border px-3 py-2 text-xs font-semibold hover:border-brand hover:text-brand inline-flex items-center justify-center gap-1">
                    <Download className="h-3 w-3" /> PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {open !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm" onClick={() => setOpen(null)}>
          <div className="relative w-full max-w-2xl rounded-2xl border border-border bg-card p-8" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(null)} className="absolute right-4 top-4 rounded-full border border-border p-2">
              <X className="h-4 w-4" />
            </button>
            <div className="grid aspect-[4/3] place-items-center rounded-xl bg-gradient-to-br from-red-500/20 via-neutral-900 to-black">
              <FileText className="h-24 w-24 text-brand/70" />
            </div>
            <h3 className="mt-4 text-xl font-bold">{CERTIFICATIONS[open].title}</h3>
            <p className="text-sm text-muted-foreground">{CERTIFICATIONS[open].authority} · Issued {CERTIFICATIONS[open].date}</p>
          </div>
        </div>
      )}
    </>
  );
}
