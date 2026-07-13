import { Container } from "@/components/container";
import { EyebrowPill } from "@/components/marketing/eyebrow-pill";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { FinalCta } from "@/components/marketing/final-cta";
import { HeroReveal } from "@/components/marketing/hero-reveal";
import { LifeChapterMarquee } from "@/components/marketing/life-chapter-marquee";
import { LinkButton } from "@/components/marketing/link-button";
import { MaterialIcon } from "@/components/marketing/material-icon";
import { PricingCard } from "@/components/marketing/pricing-card";
import { SectionHeading } from "@/components/section-heading";
import { StatStrip } from "@/components/marketing/stat-strip";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { UseCaseTabs } from "@/components/marketing/use-case-tabs";
import { ValueComparisonRows } from "@/components/marketing/value-comparison-rows";
import { JsonLd } from "@/components/json-ld";
import { ScrollHashSync } from "@/components/scroll-hash-sync";
import {
  homePricingTeaser,
  homeStats,
  homeSteps,
  homeTestimonials,
} from "@/lib/content/home";
import { homeFaqs } from "@/lib/content/faqs";
import {
  createFaqJsonLd,
  createOrganizationJsonLd,
  createPageMetadata,
  createWebSiteJsonLd,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  description:
    "DearMelody turns your journal entries into personalized songs, a private soundtrack of your memories, emotions, and most meaningful life chapters. Write for free, create your first melody free.",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          createOrganizationJsonLd(),
          createWebSiteJsonLd(),
          createFaqJsonLd(homeFaqs),
        ]}
      />
      <ScrollHashSync
        sectionIds={[
          "top",
          "how",
          "why",
          "usecases",
          "chapters",
          "testimonials",
          "pricing",
          "faq",
        ]}
        topId="top"
      />

      <section
        id="top"
        className="scroll-mt-24 bg-[radial-gradient(120%_90%_at_85%_0%,#FFE9CF_0%,#FFF6EC_55%)]"
      >
        <Container className="grid items-center gap-14 py-16 md:grid-cols-[1.08fr_0.92fr] md:py-20">
          <div className="flex flex-col gap-6">
            <EyebrowPill className="animate-dm-pop [animation-delay:0.05s]">
              Your life has a soundtrack
            </EyebrowPill>
            <h1 className="animate-dm-pop font-heading text-5xl leading-[1.02] font-semibold tracking-[-0.04em] text-ink md:text-[68px] [animation-delay:0.13s]">
              Write your story.
              <br />
              <span className="text-coral">Hear how it feels.</span>
            </h1>
            <p className="animate-dm-pop max-w-lg text-lg leading-relaxed text-body md:text-xl [animation-delay:0.21s]">
              DearMelody turns your journal entries into personalized songs, a
              private soundtrack of your memories, emotions, and most meaningful
              chapters.
            </p>
            <div className="animate-dm-pop flex flex-wrap items-center gap-3.5 [animation-delay:0.29s]">
              <LinkButton href={siteConfig.appUrl} variant="gradient" size="marketing">
                ♪ Create your first melody
              </LinkButton>
              <LinkButton href="/#how" variant="outline-coral" size="marketing">
                See how it works
              </LinkButton>
            </div>
            <div className="animate-dm-pop flex max-w-lg flex-wrap items-center justify-between gap-2.5 [animation-delay:0.37s]">
              <div className="flex flex-col gap-0.5">
                <div className="text-[15px] font-semibold tracking-wide text-[#FFB000]">
                  ★★★★★
                </div>
                <div className="text-sm text-muted-text">
                  4.9 · loved by 40,000+ journalers
                </div>
              </div>
              <div className="flex items-center gap-2 text-[15px] font-medium text-muted-text">
                <MaterialIcon
                  name="check_circle"
                  className="text-[15px] text-coral"
                />
                First melody free · no card needed
              </div>
            </div>
          </div>
          <HeroReveal />
        </Container>
      </section>

      <StatStrip stats={homeStats} />

      <section id="how" className="scroll-mt-24 bg-cream py-20 md:py-24">
        <Container className="flex flex-col items-center gap-12">
          <SectionHeading
            eyebrow="How it works"
            title="From a memory to a melody"
            description="Three quiet steps. No music skills, no blank-page pressure, just your words and the feeling behind them."
          />
          <div className="grid w-full gap-6 md:grid-cols-3">
            {homeSteps.map((step) => (
              <div
                key={step.title}
                className="flex flex-col gap-3.5 rounded-3xl border border-border bg-card-bg p-8"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex size-11 items-center justify-center rounded-[14px] font-heading text-xl font-bold"
                    style={{ background: step.badgeBg, color: step.badgeFg }}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-ink">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[17px] leading-relaxed text-body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <LinkButton href={siteConfig.appUrl} variant="gradient" size="marketing">
            ♪ Create your first melody
          </LinkButton>
        </Container>
      </section>

      <section
        id="why"
        className="scroll-mt-24 border-y border-border bg-card-bg py-20 md:py-24"
      >
        <Container className="grid items-center gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SectionHeading
              align="left"
              eyebrow="Why it matters"
              eyebrowColor="plum"
              title="Remember more than what happened"
              description="Photos show what a moment looked like. Journals record what happened. DearMelody helps you keep something they can't, how it actually felt."
            />
            <p className="text-lg leading-relaxed text-[#6E6279]">
              A song can take you back in seconds. Imagine hearing how this
              chapter felt one year from now.
            </p>
          </div>
          <ValueComparisonRows />
        </Container>
      </section>

      <section id="usecases" className="scroll-mt-20 bg-cream py-20 md:py-24">
        <Container className="flex flex-col items-center gap-11">
          <SectionHeading
            eyebrow="Made for your moment"
            title="However you got here, there's a melody in it"
            description="Everyday reflection or the biggest chapter of your life, DearMelody meets you where you are."
          />
          <UseCaseTabs className="w-full" />
        </Container>
      </section>

      <section
        id="chapters"
        className="scroll-mt-24 border-t border-border bg-card-bg py-20 md:py-24"
      >
        <Container className="flex flex-col gap-11">
          <SectionHeading
            align="left"
            eyebrow="Life chapters"
            eyebrowColor="plum"
            title="A soundtrack for every chapter"
            description="Group entries and songs into the periods that shape your life. Each chapter becomes both a journal and a personal album."
          />
          <LifeChapterMarquee />
        </Container>
      </section>

      <section
        id="testimonials"
        className="scroll-mt-24 bg-cream py-20 md:py-24"
      >
        <Container className="flex flex-col items-center gap-11">
          <div className="max-w-[620px] text-center">
            <p className="mb-3.5 text-[15px] font-semibold tracking-[0.2em] text-[#FFB000]">
              ★★★★★
            </p>
            <SectionHeading
              title="The moment people press play"
              description="Rated 4.9 across the App Store and Google Play. Here's what it feels like."
            />
          </div>
          <div className="grid w-full gap-5 md:grid-cols-3">
            {homeTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </Container>
      </section>

      <section
        id="pricing"
        className="scroll-mt-24 border-t border-border bg-card-bg py-20 md:py-24"
      >
        <Container className="flex flex-col items-center gap-11">
          <SectionHeading
            eyebrow="Simple pricing"
            eyebrowColor="plum"
            title="Write for free. Your first melody is on us."
            description="Start free, no card needed. Upgrade only when your soundtrack is worth keeping."
          />
          <div className="grid w-full gap-5 md:grid-cols-3">
            {homePricingTeaser.map((tier) => (
              <PricingCard
                key={tier.name}
                name={tier.name}
                tagline={tier.tagline}
                price={tier.price}
                period={tier.period}
                popular={tier.popular}
                features={tier.features}
                cta={tier.cta}
                variant={tier.variant}
                compact
              />
            ))}
          </div>
        </Container>
      </section>

      <section id="faq" className="scroll-mt-24 bg-cream py-20 md:py-24">
        <Container className="mx-auto max-w-[820px]">
          <SectionHeading
            eyebrow="Honest answers"
            title="You might be wondering…"
          />
          <FaqAccordion items={homeFaqs} className="mt-9" />
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
