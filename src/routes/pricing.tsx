import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { WEB_PACKAGES, formatNaira } from "@/lib/site-data";
import { Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Vixe Creatives Website Packages" },
      { name: "description", content: "Transparent website packages from Vixe Creatives — landing pages, corporate sites, e-commerce, enterprise platforms and more." },
      { property: "og:title", content: "Pricing — Vixe Creatives" },
      { property: "og:description", content: "Fixed-price packages and custom quotations for websites, apps and software." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <section className="bg-hero py-20 text-center sm:py-28">
        <div className="container-x">
          <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">Pricing</span>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl">Fair pricing. <span className="text-gradient-brand">Serious craft.</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg">Transparent packages for every stage. Prices in Nigerian Naira (₦), 50% deposit to start.</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WEB_PACKAGES.map((p) => (
            <div key={p.name} className={`relative flex flex-col rounded-2xl border p-7 transition-all hover:-translate-y-1 ${
              p.highlight ? "border-brand bg-gradient-brand text-brand-foreground shadow-brand" : "border-border bg-card hover:border-brand/40 hover:shadow-brand"
            }`}>
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-background px-3 py-1 text-xs font-semibold text-brand">
                  <Sparkles className="h-3 w-3" /> Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="mt-4 text-4xl font-bold">{formatNaira(p.price)}</div>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Delivery: {p.delivery}</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Revisions: {p.revisions}</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Support: {p.support}</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Hosting setup & SSL</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4" /> SEO foundation</li>
              </ul>
              <div className="mt-8 flex gap-2">
                <Link
                  to="/consultation"
                  className={`flex-1 rounded-full px-4 py-2 text-center text-xs font-semibold ${
                    p.highlight ? "bg-background text-foreground" : "border border-border hover:border-brand hover:text-brand"
                  }`}
                >
                  Book Package
                </Link>
                <Link
                  to="/payment"
                  search={{ pkg: p.name, amount: p.price }}
                  className={`flex-1 rounded-full px-4 py-2 text-center text-xs font-semibold ${
                    p.highlight ? "bg-foreground text-background" : "bg-gradient-brand text-brand-foreground shadow-brand"
                  }`}
                >
                  Pay Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
