import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell, SectionLabel } from "@/components/site/shell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Creator Sourcing, Strategy & Campaign Management | Vireste" },
      {
        name: "description",
        content:
          "Vireste services: influencer sourcing and vetting, campaign strategy, outreach and negotiation, content direction, partnership management and reporting.",
      },
      { property: "og:title", content: "Services | Vireste" },
      {
        property: "og:description",
        content:
          "Influencer sourcing, campaign strategy, outreach, content direction, partnership management and reporting for technology and innovation brands.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const SERVICES = [
  {
    title: "Influencer sourcing & vetting",
    body: "We build a shortlist from the ground up for each brief — researching creators, reviewing their last months of content, checking audience relevance and engagement quality, and flagging anything that could put your brand at risk.",
    points: ["Creator research and shortlisting", "Audience and engagement review", "Content quality and tone assessment", "Brand-safety screening"],
  },
  {
    title: "Campaign strategy",
    body: "Before anyone is contacted we define what the campaign is for. Positioning, message angles, creator tiers, platform mix, deliverable formats and how we'll judge whether it worked.",
    points: ["Objective and audience definition", "Creator tier and channel mix", "Messaging angles and hooks", "Success measures agreed up front"],
  },
  {
    title: "Outreach & negotiation",
    body: "We handle first contact and everything that follows — rates, usage rights, exclusivity, timelines and contracts — so the relationship starts professional and stays that way.",
    points: ["Creator outreach and qualification", "Rate and deliverable negotiation", "Usage rights and exclusivity terms", "Contracting and scheduling"],
  },
  {
    title: "Content strategy & direction",
    body: "Briefs that give creators enough direction to represent your product properly, and enough freedom to sound like themselves. Review rounds handled by us.",
    points: ["Creative briefs per creator", "Hook and format guidance", "Claim and compliance checks", "Approval rounds managed"],
  },
  {
    title: "Partnership management",
    body: "Campaigns fall apart in the admin. We keep deliverables, deadlines, revisions, payments and communication in one place so nothing quietly slips.",
    points: ["Timeline and deliverable tracking", "Day-to-day creator comms", "Revisions and re-shoots", "Payment coordination"],
  },
  {
    title: "Reporting & insights",
    body: "A clear post-campaign read: what each creator delivered, how the content performed, what the content library gives you going forward, and what we'd do differently next round.",
    points: ["Per-creator performance summary", "Reach, engagement and content metrics", "Content asset library", "Recommendations for the next cycle"],
  },
];

function Services() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-ink-border/70">
        <div className="grid-lines absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionLabel>Services</SectionLabel>
          <h1 className="mt-8 max-w-3xl font-display text-4xl leading-[1.08] font-bold sm:text-6xl">
            The full partnership, from brief to reporting.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted">
            You can take the whole process or the parts you need. Most brands start with
            sourcing and strategy, then hand over management once the direction is set.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="grid gap-8 border-b border-ink-border/70 py-16 lg:grid-cols-[0.15fr_1fr_1fr]"
            >
              <span className="rule-label text-brand">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="font-display text-2xl leading-tight font-bold sm:text-3xl">{s.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-ink-muted">{s.body}</p>
              </div>
              <ul className="space-y-3 lg:pt-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span className="mt-2 h-1 w-4 shrink-0 bg-brand" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="rounded-xl border border-ink-border bg-ink-elevated/40 p-10 sm:p-14">
          <h2 className="max-w-xl font-display text-2xl leading-tight font-bold sm:text-3xl">
            Not sure which parts you need?
          </h2>
          <p className="mt-4 max-w-xl text-base text-ink-muted">
            Start with a strategy call. We'll map your goals against the process and tell you
            honestly where we add the most value.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
          >
            Book a strategy call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
