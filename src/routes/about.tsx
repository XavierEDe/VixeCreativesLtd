import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { COMPANY, STATS } from "@/lib/site-data";
import { Target, Rocket, Heart, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vixe Creatives — Our Story, Mission & Team" },
      { name: "description", content: "Vixe Creatives Limited is Abuja's premium technology partner. Learn our mission, vision and the values behind our work." },
      { property: "og:title", content: "About Vixe Creatives" },
      { property: "og:description", content: "Our story, mission, vision and leadership." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-hero">
        <div className="container-x py-20 text-center sm:py-28">
          <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">About us</span>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl">Africa's most trusted <span className="text-gradient-brand">technology partner</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg">
            Founded in {COMPANY.location}, Vixe Creatives Limited exists to give ambitious businesses across Africa and beyond the digital tools and infrastructure they need to lead their industries.
          </p>
        </div>
      </section>

      <Section eyebrow="Our story" title="From a small studio to a full-service technology company" align="left">
        <div className="grid gap-10 lg:grid-cols-2">
          <p className="text-muted-foreground leading-relaxed">
            What started as a small design studio in Abuja has grown into a multi-disciplinary technology company delivering websites, mobile apps, enterprise software, networking, cloud and branding. Along the way we've built for banks, hospitals, schools, retailers, NGOs and government-adjacent teams — always with the same obsession for craft.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, Vixe Creatives Limited is a registered Nigerian company (CAC) with clients across West Africa and internationally. Our team blends senior engineers, designers and network specialists into one delivery unit — so nothing falls between the cracks.
          </p>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-6 md:grid-cols-3">
          <ValueCard icon={Target} title="Mission" body="Deliver innovative technology solutions that empower businesses through digital transformation." />
          <ValueCard icon={Rocket} title="Vision" body="Become Africa's most trusted technology solutions company." />
          <ValueCard icon={Heart} title="Values" body="Craft, honesty, speed, and long-term partnership. We stay past launch." />
        </div>
      </Section>

      <Section eyebrow="By the numbers" title="Trusted work, measured in outcomes">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="text-3xl font-bold text-gradient-brand">{s.value}</div>
              <div className="mt-2 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Leadership" title="A team you can call by name" className="bg-surface">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Managing Director", "Leads company strategy and client relations."],
            ["Head of Engineering", "Owns our software delivery and technical standards."],
            ["Head of Design", "Champions brand and product craft."],
            ["Head of Infrastructure", "Runs networking, hardware and cloud."],
          ].map(([role, bio]) => (
            <div key={role} className="rounded-2xl border border-border bg-card p-6">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-brand-foreground">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold">{role}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{bio}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

function ValueCard({ icon: Icon, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-brand">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{body}</p>
    </div>
  );
}
