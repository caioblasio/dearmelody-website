import { Container } from "@/components/container";
import { EyebrowPill } from "@/components/marketing/eyebrow-pill";
import { LinkButton } from "@/components/marketing/link-button";
import { SectionHeading } from "@/components/section-heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Help center",
  description:
    "Get in touch with the DearMelody team for support, partnerships, or questions about your account.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <Container>
        <EyebrowPill>Help center</EyebrowPill>
        <SectionHeading
          align="left"
          eyebrowColor="plum"
          title="We're here when you need us"
          description="Questions about your account, billing, or how DearMelody works? Send us a note and we'll reply within one business day."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card-bg p-8">
            <h2 className="font-heading text-2xl font-semibold text-ink">
              Email us
            </h2>
            <p className="mt-3 text-body">
              For support, partnerships, or anything else on your mind.
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-6 inline-block text-lg font-semibold text-plum hover:text-coral"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
          <form className="rounded-3xl border border-border bg-card-bg p-8">
            <div className="space-y-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="mt-2 h-12 rounded-full border-border bg-cream px-5"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 h-12 rounded-full border-border bg-cream px-5"
                />
              </div>
              <div>
                <Label htmlFor="message">How can we help?</Label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us what you need."
                  className="mt-2 w-full rounded-[18px] border border-border bg-cream px-4 py-3 text-sm outline-none focus-visible:border-coral focus-visible:ring-2 focus-visible:ring-coral/20"
                />
              </div>
            </div>
            <LinkButton
              href={`mailto:${siteConfig.contactEmail}`}
              variant="gradient"
              size="marketing"
              className="mt-6 w-full"
            >
              Send message
            </LinkButton>
            <p className="mt-3 text-xs text-muted-text">
              This form is a placeholder. Wire it to your email provider or CRM
              when you&apos;re ready.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
