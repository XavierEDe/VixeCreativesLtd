import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles, Star } from "lucide-react";
import { Section } from "@/components/section";
import { COMPANY, SERVICES, STATS, TESTIMONIALS, CLIENTS } from "@/lib/site-data";
import heroImg from "@/assets/hero.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vixe Creatives — Websites, Apps, Software & Cloud in Abuja" },
      { name: "description", content: "Premium technology solutions from Abuja: websites, mobile apps, custom software, cloud, networking, hardware and branding for ambitious businesses." },
      { property: "og:title", content: "Vixe Creatives — Premium Technology Solutions" },
      { property: "og:description", content: "We transform ideas into powerful digital solutions. Based in Abuja, serving Africa and the world." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="container-x relative grid gap-10 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
              <Sparkles className="h-3.5 w-3.5" /> Premium Technology Company
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Transforming ideas into <span className="text-gradient-brand">powerful digital solutions</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              We build websites, mobile apps, enterprise software, networking infrastructure, branding, hardware, cloud systems and digital experiences that help businesses thrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-brand transition-transform hover:scale-[1.02]">
                View Portfolio <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/consultation" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-6 py-3 text-sm font-semibold transition-colors hover:border-brand hover:text-brand">
                Book Consultation
              </Link>
              <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground/80 hover:text-foreground">
                Get a Quote →
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6 sm:max-w-md">
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold sm:text-3xl">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute -inset-8 rounded-3xl bg-gradient-brand opacity-20 blur-3xl" />
            <img
              src={heroImg}
              alt="Vixe Creatives — digital technology"
              width={1600}
              height={1200}
              className="relative rounded-3xl border border-border shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* Clients marquee */}
      <div className="border-y border-border bg-surface py-8">
        <div className="container-x mb-4 text-center text-xs uppercase tracking-widest text-muted-foreground">
          Trusted by teams across Africa
        </div>
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-16 whitespace-nowrap px-8 text-lg font-semibold text-foreground/40">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Services preview */}
      <Section eyebrow="Services" title="Everything you need, under one roof" description="From a first landing page to enterprise-grade platforms and infrastructure.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s) => (
            <div key={s.slug} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-brand">
              <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-brand">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              <div className="mt-6 text-xs text-muted-foreground">Starting from</div>
              <div className="text-xl font-bold text-brand">₦{s.from.toLocaleString("en-NG")}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Why us / Values */}
      <Section eyebrow="Why Vixe" title="Built to make your business unmistakable" className="border-t border-border">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Design-obsessed", "Every pixel is designed to convert."],
            ["Engineered right", "Scalable, secure, fast by default."],
            ["Local + global", "Abuja-based, serving the world."],
            ["Long-term partner", "We stay past launch — 24/7 support."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <CheckCircle2 className="h-5 w-5 text-brand" />
              <h3 className="mt-4 font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section eyebrow="Client love" title="What clients say" className="bg-surface">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{t.quote}"</p>
              <div className="mt-6">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 text-center text-brand-foreground shadow-brand sm:p-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Let's build something exceptional together.</h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-foreground/80">Book a free consultation. Get a tailored proposal within 24 hours.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/consultation" className="rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-background/90">
              Book Consultation
            </Link>
            <Link to="/contact" className="rounded-full border border-brand-foreground/30 px-6 py-3 text-sm font-semibold hover:bg-brand-foreground/10">
              Talk to us
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
