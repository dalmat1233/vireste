import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { SiteShell, SectionLabel } from "@/components/site/shell";
import { supabase } from "@/integrations/supabase/client";

const searchSchema = z.object({
  intent: z.enum(["call", "proposal", "creator"]).catch("call").optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Contact Vireste — Book a Strategy Call or Request a Proposal" },
      {
        name: "description",
        content:
          "Tell us about your brand, your budget range and your goals. We'll come back with a creator direction and a clear proposal — usually within two working days.",
      },
      { property: "og:title", content: "Contact Vireste" },
      {
        property: "og:description",
        content:
          "Book a strategy call or request a proposal from Vireste, an influencer marketing agency for health and performance brands.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(120, "Company name is too long").optional(),
  website: z.string().trim().max(200, "Website is too long").optional(),
  budget: z.string().trim().max(60).optional(),
  goals: z.string().trim().min(10, "Tell us a little more about your goals").max(2000, "Please keep this under 2000 characters"),
  lead_type: z.enum(["brand", "creator"]),
});

const BUDGETS = [
  "Under €2,000",
  "€2,000 – €5,000",
  "€5,000 – €15,000",
  "€15,000 – €50,000",
  "€50,000+",
  "Not sure yet",
];

function Contact() {
  const { intent } = Route.useSearch();
  const [leadType, setLeadType] = useState<"brand" | "creator">(intent === "creator" ? "creator" : "brand");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = leadSchema.safeParse({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      website: String(fd.get("website") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      goals: String(fd.get("goals") ?? ""),
      lead_type: leadType,
    });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    setSubmitting(true);
    const { error } = await supabase.from("leads").insert(parsed.data);
    setSubmitting(false);

    if (error) {
      toast.error("Something went wrong sending your enquiry. Please email hello@vireste.com.");
      return;
    }
    setDone(true);
    toast.success("Enquiry received — we'll be in touch shortly.");
  }

  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-ink-border/70">
        <div className="grid-lines absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="brand-glow absolute inset-x-0 top-0 h-80" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-8 max-w-3xl font-display text-4xl leading-[1.08] font-bold sm:text-6xl">
            {intent === "proposal" ? "Request a proposal." : "Let's talk about your brand."}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Share a few details and we'll come back with a creator direction and next steps —
            usually within two working days.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          {done ? (
            <div className="rounded-xl border border-brand bg-ink-elevated/50 p-12 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-brand" strokeWidth={1.5} />
              <h2 className="mt-6 font-display text-2xl font-bold">Thanks — we've got it.</h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
                We'll review your enquiry and reply to the email you gave us. If it's urgent,
                write to hello@vireste.com directly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-7">
              <div>
                <span className="rule-label text-ink-muted">I'm enquiring as a</span>
                <div className="mt-3 inline-flex rounded-full border border-ink-border p-1">
                  {(["brand", "creator"] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setLeadType(t)}
                      className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors ${
                        leadType === t ? "bg-brand text-brand-foreground" : "text-ink-muted hover:text-ink-foreground"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" error={errors["name"]} placeholder="Your full name" required />
                <Field label="Email" name="email" type="email" error={errors["email"]} placeholder="you@company.com" required />
                <Field
                  label={leadType === "brand" ? "Company" : "Creator name / handle"}
                  name="company"
                  error={errors["company"]}
                  placeholder={leadType === "brand" ? "Brand name" : "@yourhandle"}
                />
                <Field label="Website or profile" name="website" error={errors["website"]} placeholder="vireste.com" />
              </div>

              {leadType === "brand" && (
                <div>
                  <label htmlFor="budget" className="rule-label text-ink-muted">
                    Estimated budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className="mt-3 w-full rounded-md border border-ink-border bg-ink-elevated/50 px-4 py-3 text-sm text-ink-foreground outline-none focus:border-brand"
                  >
                    <option value="">Select a range</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="goals" className="rule-label text-ink-muted">
                  {leadType === "brand" ? "Goals" : "About your content"}
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={5}
                  maxLength={2000}
                  placeholder={
                    leadType === "brand"
                      ? "What are you launching, who do you need to reach, and what would make this campaign a success?"
                      : "What do you create, who is your audience, and what kind of brands do you want to work with?"
                  }
                  className="mt-3 w-full resize-y rounded-md border border-ink-border bg-ink-elevated/50 px-4 py-3 text-sm text-ink-foreground placeholder:text-ink-muted/60 outline-none focus:border-brand"
                />
                {errors["goals"] && <p className="mt-2 text-xs text-brand">{errors["goals"]}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending
                  </>
                ) : (
                  <>
                    Send enquiry
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
              <p className="text-xs text-ink-muted">
                We only use your details to reply to this enquiry.
              </p>
            </form>
          )}
        </div>

        <aside className="space-y-8 lg:pt-6">
          <div className="rounded-xl border border-ink-border bg-ink-elevated/30 p-8">
            <Mail className="h-5 w-5 text-brand" strokeWidth={1.75} />
            <h2 className="mt-5 font-display text-lg font-semibold">Prefer email?</h2>
            <a
              href="mailto:hello@vireste.com"
              className="mt-2 inline-block text-sm text-ink-muted hover:text-ink-foreground"
            >
              hello@vireste.com
            </a>
          </div>
          <div className="rounded-xl border border-ink-border p-8">
            <h2 className="font-display text-lg font-semibold">What happens next</h2>
            <ol className="mt-5 space-y-4 text-sm text-ink-muted">
              <li className="flex gap-3">
                <span className="rule-label text-brand">01</span> We review your enquiry and category fit.
              </li>
              <li className="flex gap-3">
                <span className="rule-label text-brand">02</span> A 30-minute call to understand the goal.
              </li>
              <li className="flex gap-3">
                <span className="rule-label text-brand">03</span> A written proposal with scope and creator direction.
              </li>
            </ol>
          </div>
        </aside>
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="rule-label text-ink-muted">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className="mt-3 w-full rounded-md border border-ink-border bg-ink-elevated/50 px-4 py-3 text-sm text-ink-foreground placeholder:text-ink-muted/60 outline-none focus:border-brand"
      />
      {error && <p className="mt-2 text-xs text-brand">{error}</p>}
    </div>
  );
}
