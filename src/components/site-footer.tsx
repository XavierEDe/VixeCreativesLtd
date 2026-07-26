import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-1 font-semibold">
            <img
              src={COMPANY.logo}
              alt="Vixe Creatives Logo"
              className="h-14 w-14 rounded-lg object-contain"
            />
            <img
              src={COMPANY.short}
              alt="Vixe Creatives Limited"
              className="h-12 w-auto object-contain -ml-3 dark:hidden"
            />
            <img
              src={COMPANY.shortDark}
              alt="Vixe Creatives Limited"
              className="hidden h-12 w-auto object-contain -ml-3 dark:block"
            />
          </Link>
          
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">
            {COMPANY.tagline}. Building Africa's next generation of digital experiences.
          </p>
          <div className="mt-5 flex gap-3">
            {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/70 transition-colors hover:border-brand hover:text-brand">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Company" links={[
          ["/about", "About"], ["/portfolio", "Portfolio"], ["/consultation", "Consultation"], ["/contact", "Contact"],
        ]} />
        <FooterCol title="Services" links={[
          ["/services", "All Services"], ["/pricing", "Pricing"], ["/payment", "Make Payment"], ["/faq", "FAQ"],
        ]} />

        <div>
          <h4 className="mb-4 text-sm font-semibold">Get in touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-brand" />{COMPANY.address}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand" /><a href={`mailto:${COMPANY.email}`} className="hover:text-foreground">{COMPANY.email}</a></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand" /><a href={`tel:${COMPANY.phone}`} className="hover:text-foreground">{COMPANY.phone}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map(([to, label]) => (
          <li key={to}>
            <Link to={to} className="hover:text-foreground">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
