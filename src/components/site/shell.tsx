import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark, LogoMark } from "./logo";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Engagements" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-border/70 bg-ink/85 text-ink-foreground backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="transition-opacity hover:opacity-80">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
              activeProps={{ className: "text-ink-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
          >
            Book a strategy call
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-border/70 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-ink-muted hover:bg-ink-elevated hover:text-ink-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand px-5 py-2.5 text-center text-sm font-semibold text-brand-foreground"
            >
              Book a strategy call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-border/70 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <LogoMark className="h-9 w-9" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              An influencer marketing agency connecting technology and innovation brands
              with creators their audience already trusts.
            </p>
          </div>

          <div>
            <p className="rule-label text-ink-muted">Agency</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/services" className="text-ink-muted hover:text-ink-foreground">Services</Link></li>
              <li><Link to="/about" className="text-ink-muted hover:text-ink-foreground">About</Link></li>
              <li><Link to="/pricing" className="text-ink-muted hover:text-ink-foreground">Engagements</Link></li>
              <li><Link to="/contact" className="text-ink-muted hover:text-ink-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="rule-label text-ink-muted">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="mailto:atik@virestehq.com" className="text-ink-muted hover:text-ink-foreground">
                  atik@virestehq.com
                </a>
              </li>
              <li>
                <a href="https://x.com/virestehq" target="_blank" rel="noreferrer" className="text-ink-muted hover:text-ink-foreground">
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-border/70 pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vireste. All rights reserved.</p>
          <p className="rule-label">Vireste.com</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ink text-ink-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="rule-label flex items-center gap-3 text-brand">
      <span className="h-px w-8 bg-brand" />
      {children}
    </p>
  );
}
