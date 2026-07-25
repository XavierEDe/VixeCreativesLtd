import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/site-data";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "glass shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-1 font-semibold">
            <img
              src={COMPANY.logo}
              alt="Vixe Creatives Logo"
              className="h-15 w-15 rounded-lg object-contain"
            />
            <img
              src={COMPANY.short}
              alt="Vixe Creatives Limited"
              className="h-28 w-28 object-contain -ml-3 dark:hidden"
            />
            <img
              src={COMPANY.shortDark}
              alt="Vixe Creatives Limited"
              className="hidden h-28 w-28 object-contain -ml-3 dark:block"
            />
          </Link> 

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-brand" }}
              inactiveProps={{ className: "text-foreground/70 hover:text-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/consultation"
            className="hidden rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-brand-foreground shadow-brand transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            Get Started
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-surface-elevated lg:hidden">
          <nav className="container-x flex flex-col py-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/payment"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-gradient-brand px-3 py-2.5 text-center text-sm font-semibold text-brand-foreground"
            >
              Pay Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
