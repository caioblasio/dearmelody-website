import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { FeatureCard } from "@/components/feature-card";
import { JsonLd } from "@/components/json-ld";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeading } from "@/components/section-heading";
import {
  createOrganizationJsonLd,
  createWebSiteJsonLd,
} from "@/lib/seo";
import { features, pricingPlans, siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[createOrganizationJsonLd(), createWebSiteJsonLd()]}
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(123,79,138,0.12),transparent_55%)]" />
        <Container className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">
              Personalized musical keepsakes
            </p>
            <h1 className="mt-4 font-display text-5xl font-normal leading-tight tracking-tight text-foreground sm:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
              {siteConfig.description}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Create your melody</Button>
              <Button href="/pricing" variant="secondary">
                View pricing
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="Music that feels like you wrote it"
            description="Dear Melody combines thoughtful composition with the stories you share, so every note carries meaning."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-20">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple plans for every occasion"
            description="Start with a single melody or build an archive of memories for your whole family."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16">
            <h2 className="font-display text-4xl font-normal tracking-tight">
              Ready to preserve a moment in music?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/85">
              Tell us about the memory you want to capture. We&apos;ll help you
              turn it into something you can listen to again and again.
            </p>
            <Button
              href="/contact"
              variant="secondary"
              className="mt-8 border-transparent bg-white text-primary hover:bg-white/90"
            >
              Get in touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
