import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Layers, Target } from "lucide-react";
import { SiteShell, SectionLabel } from "@/components/site/shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vireste — A Modern Influencer Marketing Agency" },
      {
        name: "description",
        content:
          "Vireste is a new influencer marketing agency built around creator fit, strategy and authentic partnerships for health, wellness and human performance brands.",
      },
      { property: "og:title", content: "About Vireste" },
      {
        property: "og:description",
        content:
          "A modern agency built for the future of influencer marketing — creator fit, strategy and authentic partnerships.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const PRINCIPLES = [
  {
    icon: Compass,
    title: "Fit before reach",
    body: "A smaller creator whose audience already believes them will outperform a large account with borrowed attention. We select on relevance and credibility first.",
  },
  {
    icon: Layers,
    title: "Strategy before outreach",
    body: "We don't send messages until we know what the campaign is meant to do. Every creator on a shortlist has a reason for being there.",
  },
  {
    icon: Target,
    title: "Honesty about what we know",
    body: "We're a new agency. We won't invent case studies or promise numbers we can't stand behind — we'll show you the thinking and let it speak for itself.",
  },
];

function About() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-ink-border/70">
        <div className="grid-lines absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="brand-glow absolute inset-x-0 top-0 h-80" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionLabel>About</SectionLabel>
          <h1 className="mt-8 max-w-3xl font-display text-4xl leading-[1.08] font-bold sm:text-6xl">
            A modern agency built for the future of influencer marketing.
          </h1>
        </div>
      </section>

      <section className="border-b border-ink-border/70">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Who we are</SectionLabel>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-muted">
            <p className="text-lg text-ink-foreground">
              Vireste is an influencer marketing agency that helps brands connect with the right
              content creators and build authentic partnerships that grow their presence and
              their credibility with an audience.
            </p>
            <p>
              The creator economy rewards brands that treat partnerships as relationships rather
              than placements. That takes research, judgement and structure — knowing which
              creators genuinely fit, what to ask of them, and how to run a collaboration so it
              looks natural instead of bought.
            </p>
            <p>
              We're a new agency, and we're deliberate about how we say that. We're not selling
              a track record we haven't earned yet. We're selling a way of working: focused
              category expertise, careful creator selection, and a process that gives brands
              clarity at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-ink-border/70 bg-ink-elevated/30">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionLabel>Our mission</SectionLabel>
          <p className="mt-8 max-w-4xl font-display text-2xl leading-snug font-medium tracking-tight sm:text-4xl">
            To build connections between brands and creators who share the same values —
            <span className="text-brand"> making marketing more authentic and more effective.</span>
          </p>
        </div>
      </section>

      <section className="border-b border-ink-border/70">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionLabel>How we think</SectionLabel>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-ink-border bg-ink-border md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="bg-ink p-9">
                <p.icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
                <h2 className="mt-6 font-display text-xl font-semibold">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel>For creators</SectionLabel>
            <h2 className="mt-7 font-display text-2xl leading-tight font-bold sm:text-3xl">
              Working in health, wellness or performance?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              We're building a network of creators we can bring the right brands to. If your
              content sits in this space and you care about who you partner with, introduce
              yourself.
            </p>
            <Link
              to="/contact"
              search={{ intent: "creator" }}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              Join the creator network
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="rounded-xl border border-ink-border bg-ink-elevated/40 p-10">
            <h2 className="font-display text-2xl leading-tight font-bold">For brands</h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted">
              Tell us what you're launching and who you need to reach. We'll come back with a
              creator direction and a proposal.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              Get a proposal
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
