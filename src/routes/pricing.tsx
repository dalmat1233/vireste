import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteShell, SectionLabel } from "@/components/site/shell";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Engagements & Pricing — How We Work | Vireste" },
      {
        name: "description",
        content:
          "Three ways to work with Vireste: a one-off creator sourcing sprint, a managed campaign, or an ongoing retained partnership. Scoped and quoted per brand.",
      },
      { property: "og:title", content: "Engagements & Pricing | Vireste" },
      {
        property: "og:description",
        content:
          "Creator sourcing sprint, managed campaign, or ongoing retained partnership — scoped and quoted per brand.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const TIERS = [
  {
    name: "Sourcing Sprint",
    tag: "One-off",
    body: "A vetted creator shortlist for a specific launch or product, with the rationale behind every name.",
    items: [
      "Discovery session",
      "Creator profile definition",
      "Vetted shortlist with rationale",
      "Suggested outreach angles",
      "Indicative rate guidance",
    ],
  },
  {
    name: "Managed Campaign",
    tag: "Most common",
    featured: true,
    body: "End-to-end delivery of one campaign — from strategy through outreach, briefs and reporting.",
    items: [
      "Everything in Sourcing Sprint",
      "Campaign strategy and messaging",
      "Outreach, negotiation and contracts",
      "Creative briefs and approvals",
      "Timeline and deliverable management",
      "Post-campaign report",
    ],
  },
  {
    name: "Retained Partnership",
    tag: "Ongoing",
    body: "A continuous creator programme with a growing roster, recurring activations and quarterly planning.",
    items: [
      "Everything in Managed Campaign",
      "Always-on creator pipeline",
      "Recurring monthly activations",
      "Quarterly strategy reviews",
      "Content library management",
      "Priority availability",
    ],
  },
];

function Pricing() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-ink-border/70">
        <div className="grid-lines absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionLabel>Engagements</SectionLabel>
          <h1 className="mt-8 max-w-3xl font-display text-4xl leading-[1.08] font-bold sm:text-6xl">
            Three ways to work together.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Every brand's scope is different, so we quote per engagement rather than publishing
            a fixed rate card. Creator fees are always separate and fully transparent — we don't
            take a hidden margin on what creators are paid.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col rounded-xl border p-9 ${
                t.featured
                  ? "border-brand bg-ink-elevated/60"
                  : "border-ink-border bg-ink-elevated/20"
              }`}
            >
              <span className={`rule-label ${t.featured ? "text-brand" : "text-ink-muted"}`}>{t.tag}</span>
              <h2 className="mt-5 font-display text-2xl font-bold">{t.name}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{t.body}</p>
              <ul className="mt-8 flex-1 space-y-3">
                {t.items.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2.5} />
                    <span className="text-ink-muted">{i}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  t.featured
                    ? "bg-brand text-brand-foreground"
                    : "border border-ink-border text-ink-foreground hover:bg-ink-elevated"
                }`}
              >
                Request a quote
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-ink-border p-10">
          <h2 className="font-display text-xl font-semibold">How quoting works</h2>
          <div className="mt-6 grid gap-8 text-sm leading-relaxed text-ink-muted sm:grid-cols-3">
            <p>
              <span className="text-ink-foreground">1. Strategy call.</span> We learn the brand,
              the goal, the category constraints and your timeline.
            </p>
            <p>
              <span className="text-ink-foreground">2. Scoped proposal.</span> You get a written
              scope with deliverables, agency fee and an estimated creator budget range.
            </p>
            <p>
              <span className="text-ink-foreground">3. No surprises.</span> Creator fees are
              passed through at cost. Any change in scope is agreed before work continues.
            </p>
          </div>
          <Link
            to="/contact"
            className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-brand"
          >
            Start with a strategy call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
