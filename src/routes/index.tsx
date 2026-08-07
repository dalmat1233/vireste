import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, Route as RouteIcon, Handshake, Sparkles, BarChart3, ShieldCheck } from "lucide-react";
import { SiteShell, SectionLabel } from "@/components/site/shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vireste — Influencer Marketing Agency for Technology Brands" },
      {
        name: "description",
        content:
          "Vireste connects technology brands with creators who understand their products and influence their communities.",
      },
      { property: "og:title", content: "Vireste — Influencer Marketing Agency" },
      {
        property: "og:description",
        content:
          "Influence is built on trust. We help brands find the voices that matter — creator sourcing, strategy and campaign management for technology brands.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const SERVICES = [
  {
    icon: Search,
    title: "Creator sourcing & vetting",
    body: "We identify creators whose audience, values and content quality genuinely fit your brand — not whoever has the biggest follower count.",
  },
  {
    icon: RouteIcon,
    title: "Influencer marketing strategy",
    body: "Positioning, messaging angles, creator tiers and channel mix, mapped to what you actually want the campaign to achieve.",
  },
  {
    icon: Handshake,
    title: "Outreach & partnership management",
    body: "We handle first contact, negotiation, briefs, deliverables and timelines so the collaboration stays professional end to end.",
  },
  {
    icon: Sparkles,
    title: "Content & campaign direction",
    body: "Creative direction that keeps the creator's voice intact while making sure your product story lands naturally.",
  },
  {
    icon: BarChart3,
    title: "Reporting & insights",
    body: "Clear post-campaign reporting on reach, engagement and content performance, with what we'd change next time.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & brand safety",
    body: "Disclosure standards, claim checks and creator vetting so partnerships protect your brand rather than expose it.",
  },
];

const PROCESS = [
  { n: "01", title: "Discovery", body: "We learn your product, audience, category rules and what a good partnership looks like for you." },
  { n: "02", title: "Strategy", body: "We define the creator profile, campaign angle, deliverables and success measures before anyone is contacted." },
  { n: "03", title: "Matching", body: "We shortlist and vet creators, then present them with rationale — audience fit, content quality and credibility." },
  { n: "04", title: "Launch", body: "Briefs, negotiation, approvals and scheduling handled by us. You approve, we run it." },
  { n: "05", title: "Reporting", body: "Performance review, content library, and a clear recommendation for the next cycle." },
];

const NICHES = ["Technology & Software", "Artificial Intelligence & Automation", "SaaS & Digital Platforms", "Consumer Electronics & Hardware", "Emerging Technologies & Innovation"];

function Home() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-border/70">
        <div className="grid-lines absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="brand-glow absolute inset-x-0 top-0 h-[420px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="rise max-w-3xl">
            <SectionLabel>Influencer Marketing Agency</SectionLabel>
            <h1 className="mt-8 font-display text-4xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl">
              Connecting brands with the right creators to build authentic growth.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Vireste is an influencer marketing agency that helps brands discover, connect
              and collaborate with relevant creators — building partnerships that reach the
              right audience and earn real attention.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
              >
                Book a strategy call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                search={{ intent: "proposal" }}
                className="inline-flex items-center justify-center rounded-full border border-ink-border px-7 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-elevated"
              >
                Get a proposal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-b border-ink-border/70 bg-ink-elevated/40">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8">
          <blockquote className="font-display text-2xl leading-snug font-medium tracking-tight sm:text-4xl">
            “Influence is built on trust.
            <br className="hidden sm:block" />{" "}
            <span className="text-brand">We help brands find the voices that matter.</span>”
          </blockquote>
        </div>
      </section>

      {/* What we do */}
      <section className="border-b border-ink-border/70">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>What we do</SectionLabel>
              <h2 className="mt-7 font-display text-3xl leading-tight font-bold sm:text-4xl">
                We help brands navigate the creator economy with intent.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-ink-muted">
              <p>
                At Vireste, we connect brands with the right influencers and content creators.
                We focus on building strategic partnerships that feel authentic, create
                meaningful connections and help brands grow their presence.
              </p>
              <p>
                Our approach combines creator discovery, campaign strategy, partnership
                management and performance insight — so every collaboration is deliberate
                rather than opportunistic.
              </p>
              <p className="text-ink-foreground">
                Our mission is to build connections between brands and creators who share the
                same values, making marketing more authentic and more effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-ink-border/70 bg-ink-elevated/30">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionLabel>Services</SectionLabel>
          <h2 className="mt-7 max-w-2xl font-display text-3xl leading-tight font-bold sm:text-4xl">
            Everything between the brief and the published collaboration.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-ink-border bg-ink-border sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="group bg-ink p-8 transition-colors hover:bg-ink-elevated">
                <s.icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
                <h3 className="mt-6 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-semibold text-brand">
              See how each service works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Niche */}
      <section className="border-b border-ink-border/70">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionLabel>Our focus</SectionLabel>
              <h2 className="mt-7 font-display text-3xl leading-tight font-bold sm:text-4xl">
                Connecting technology brands with the voices that matter.{"\n\n"}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-muted">
                We help technology companies reach the right audiences by partnering them with creators who understand their products, influence their communities, and turn complex innovations into meaningful conversations.{"\n\n"}
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                In technology, credibility is everything. The right creator does more than generate awareness — they educate, build trust, and help audiences understand why a product matters. Our expertise allows us to identify influencers who combine relevance, authority, and genuine impact.
              </p>
            </div>
            <ul className="flex flex-col justify-center gap-px overflow-hidden rounded-lg border border-ink-border bg-ink-border">
              {NICHES.map((n, i) => (
                <li key={n} className="flex items-baseline gap-5 bg-ink px-7 py-6">
                  <span className="rule-label text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-lg font-medium">{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-ink-border/70 bg-ink-elevated/30">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-7 max-w-2xl font-display text-3xl leading-tight font-bold sm:text-4xl">
            A structured process, not a list of contacts.
          </h2>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {PROCESS.map((p) => (
              <li key={p.n} className="border-t border-ink-border pt-6">
                <span className="rule-label text-brand">{p.n}</span>
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="brand-glow absolute inset-x-0 bottom-0 h-[360px] rotate-180" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">
          <h2 className="font-display text-3xl leading-tight font-bold sm:text-5xl">
            Let's build partnerships worth talking about.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
            Tell us about your brand and what you want the campaign to achieve. We'll come back
            with a creator direction and a clear proposal.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              Book a strategy call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-ink-border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-ink-elevated"
            >
              How we work together
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
