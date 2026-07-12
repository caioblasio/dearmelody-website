"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { EyebrowPill } from "@/components/marketing/eyebrow-pill";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { FinalCta } from "@/components/marketing/final-cta";
import { MaterialIcon } from "@/components/marketing/material-icon";
import { PricingCard } from "@/components/marketing/pricing-card";
import { PricingToggle } from "@/components/marketing/pricing-toggle";
import { SectionHeading } from "@/components/section-heading";
import { JsonLd } from "@/components/json-ld";
import { pricingTiers, pricingValueCards } from "@/lib/content/pricing";
import { pricingFaqs } from "@/lib/content/faqs";
import { createFaqJsonLd } from "@/lib/seo";

export default function PricingPageClient() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <JsonLd data={createFaqJsonLd(pricingFaqs)} />

      <section className="bg-[radial-gradient(110%_80%_at_50%_0%,#FFE9CF_0%,#FFF6EC_62%)]">
        <Container className="flex flex-col items-center gap-5 py-16 text-center md:py-20">
          <EyebrowPill>First melody free</EyebrowPill>
          <h1 className="max-w-3xl font-heading text-5xl leading-tight font-semibold tracking-tight text-ink md:text-[60px]">
            Write for free.
            <br />
            <span className="text-coral">Keep what moves you.</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-body md:text-xl">
            Start free and create your first melody on us. Upgrade only when
            your soundtrack is worth keeping, and cancel anytime.
          </p>
          <PricingToggle annual={annual} onChange={setAnnual} className="mt-2" />
        </Container>
      </section>

      <section className="bg-cream pb-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <PricingCard
                key={tier.name}
                name={tier.name}
                tagline={tier.tagline}
                price={annual ? tier.annualPrice : tier.monthlyPrice}
                period={tier.period}
                billNote={annual ? tier.annualBillNote : tier.monthlyBillNote}
                popular={tier.popular}
                featureHead={tier.featureHead}
                features={tier.features}
                cta={tier.cta}
                variant={tier.variant}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-card-bg py-20 md:py-24">
        <Container className="flex flex-col items-center gap-11">
          <SectionHeading
            eyebrow="What you're really building"
            eyebrowColor="plum"
            title="More than a subscription"
            description="Paid plans unlock the archive, the albums, and the exports that turn scattered entries into a soundtrack you can keep."
          />
          <div className="grid w-full gap-5 md:grid-cols-3">
            {pricingValueCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-border bg-cream p-8"
              >
                <div
                  className="mb-4 flex size-11 items-center justify-center rounded-full"
                  style={{ background: card.bg }}
                >
                  <MaterialIcon
                    name={card.icon}
                    className="text-2xl"
                    style={{ color: card.fg }}
                  />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-body">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <Container className="mx-auto max-w-[820px]">
          <SectionHeading eyebrow="Billing questions" title="Pricing FAQ" />
          <FaqAccordion items={pricingFaqs} className="mt-9" />
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
