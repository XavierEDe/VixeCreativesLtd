import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/section";
import { PORTFOLIO } from "@/lib/site-data";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Vixe Creatives Selected Work" },
      { name: "description", content: "Selected work by Vixe Creatives: websites, mobile apps, custom software, cloud, networking and branding projects." },
      { property: "og:title", content: "Portfolio — Vixe Creatives" },
      { property: "og:description", content: "A look at recent websites, apps, software and infrastructure projects." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const CATEGORIES = ["All", "Websites", "Mobile Apps", "Software", "UI/UX", "Branding", "Networking", "Cloud Projects", "Graphics"];

const GRADS: Record<string, string> = {
  "grad-1": "from-red-500/80 to-black",
  "grad-2": "from-black to-red-700/80",
  "grad-3": "from-red-600/70 to-red-950",
  "grad-4": "from-neutral-800 to-red-500/70",
  "grad-5": "from-red-500/60 to-neutral-900",
  "grad-6": "from-red-700 to-neutral-950",
  "grad-7": "from-neutral-900 to-red-500/60",
  "grad-8": "from-red-500 to-neutral-800",
  "grad-9": "from-red-950 to-red-500/50",
};

function PortfolioPage() {
  const [cat, setCat] = useState("All");
  const items = cat === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === cat);

  return (
    <>
      <section className="bg-hero py-20 text-center sm:py-28">
        <div className="container-x">
          <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">Portfolio</span>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl">Work we're <span className="text-gradient-brand">proud of</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg">A snapshot of recent projects across web, mobile, software and infrastructure.</p>
        </div>
      </section>

      <Section>
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                cat === c ? "bg-gradient-brand text-brand-foreground shadow-brand" : "border border-border hover:border-brand hover:text-brand"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-brand">
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${GRADS[p.cover]}`}>
                <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity group-hover:opacity-100">
                  <button className="inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold text-foreground">
                    View Details <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs font-medium text-brand">{p.category}</div>
                <h3 className="mt-1 font-semibold">{p.title}</h3>
                <div className="mt-1 text-sm text-muted-foreground">{p.client} · {p.date}</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
