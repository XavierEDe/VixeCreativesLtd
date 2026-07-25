import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/section";
import { FAQS } from "@/lib/site-data";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Vixe Creatives" },
      { name: "description", content: "Answers to common questions about pricing, timelines, hosting, revisions, payments and support." },
      { property: "og:title", content: "FAQ — Vixe Creatives" },
      { property: "og:description", content: "Common questions answered." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="bg-hero py-20 text-center sm:py-28">
        <div className="container-x">
          <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">FAQ</span>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Frequently asked questions</h1>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
          {FAQS.map((f, i) => (
            <button key={f.q} onClick={() => setOpen(open === i ? null : i)} className="w-full p-6 text-left">
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold">{f.q}</span>
                <ChevronDown className={`h-5 w-5 flex-none text-brand transition-transform ${open === i ? "rotate-180" : ""}`} />
              </div>
              {open === i && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>}
            </button>
          ))}
        </div>
      </Section>
    </>
  );
}
