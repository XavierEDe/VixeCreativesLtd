import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { COMPANY } from "@/lib/site-data";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vixe Creatives — Get in Touch" },
      { name: "description", content: "Reach Vixe Creatives in Abuja by phone, email or WhatsApp. Business hours, address and quick contact form." },
      { property: "og:title", content: "Contact Vixe Creatives" },
      { property: "og:description", content: "Get in touch with our team in Abuja, Nigeria." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-hero py-20 text-center sm:py-28">
        <div className="container-x">
          <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">Contact</span>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Let's <span className="text-gradient-brand">talk</span></h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">We usually reply within a few hours during business hours.</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <ContactCard icon={MapPin} title="Visit us" body={COMPANY.address} />
            <ContactCard icon={Mail} title="Email" body={COMPANY.email} href={`mailto:${COMPANY.email}`} />
            <ContactCard icon={Phone} title="Phone" body={COMPANY.phone} href={`tel:${COMPANY.phone}`} />
            <ContactCard icon={MessageCircle} title="WhatsApp" body="Chat with us instantly" href={`https://wa.me/${COMPANY.whatsapp}`} />
            <div className="rounded-2xl border border-border bg-card p-6">
              <h4 className="font-semibold">Business hours</h4>
              <p className="mt-2 text-sm text-muted-foreground">{COMPANY.hours}</p>
              <p className="text-sm text-muted-foreground">Saturday: 10:00 – 14:00 (by appointment)</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Vixe Creatives Location"
              src="https://www.google.com/maps?q=Abuja%2C%20Nigeria&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: 460, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactCard({ icon: Icon, title, body, href }: { icon: any; title: string; body: string; href?: string }) {
  const Wrap: any = href ? "a" : "div";
  return (
    <Wrap href={href} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40">
      <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-brand text-brand-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-1 text-sm text-muted-foreground">{body}</p>
      </div>
    </Wrap>
  );
}
