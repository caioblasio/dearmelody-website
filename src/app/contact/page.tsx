import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with the Dear Melody team to start your personalized melody.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        align="left"
        eyebrow="Contact"
        title="Let's compose something meaningful"
        description="Share a few details about the memory you'd like to preserve. We'll reply within one business day."
      />
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <h2 className="font-display text-2xl font-medium text-foreground">
            Email us
          </h2>
          <p className="mt-3 text-muted">
            For partnerships, support, or custom projects, reach out directly.
          </p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="mt-6 inline-block text-lg font-medium text-primary hover:underline"
          >
            {siteConfig.contactEmail}
          </a>
        </div>
        <form className="rounded-2xl border border-border bg-surface p-8">
          <div className="space-y-5">
            <label className="block">
              <span className="text-sm font-medium text-foreground">Name</span>
              <input
                type="text"
                name="name"
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/30 focus:ring-2"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-foreground">Email</span>
              <input
                type="email"
                name="email"
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/30 focus:ring-2"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-foreground">
                What would you like to capture?
              </span>
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/30 focus:ring-2"
                placeholder="Tell us about the memory, occasion, or tone you're imagining."
              />
            </label>
          </div>
          <button
            type="button"
            className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Send message
          </button>
          <p className="mt-3 text-xs text-muted">
            This form is a placeholder. Wire it to your email provider or CRM
            when you&apos;re ready.
          </p>
        </form>
      </div>
    </Container>
  );
}
