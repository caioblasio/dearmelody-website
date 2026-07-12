import { Container } from "@/components/container";
import { EyebrowPill } from "@/components/marketing/eyebrow-pill";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { FinalCta } from "@/components/marketing/final-cta";
import { LinkButton } from "@/components/marketing/link-button";
import { SectionHeading } from "@/components/section-heading";
import { JsonLd } from "@/components/json-ld";
import { compareAlternatives, compareRows } from "@/lib/content/compare";
import { compareFaqs } from "@/lib/content/faqs";
import { createFaqJsonLd, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Compare",
  description:
    "Looking for an alternative to a journaling app, an AI music generator, or a mood tracker? See how DearMelody compares: it turns real journal entries into personalized songs and keeps your memories, moods, and life chapters together.",
  path: "/compare",
});

export default function ComparePage() {
  return (
    <>
      <JsonLd data={createFaqJsonLd(compareFaqs)} />

      <section className="bg-[radial-gradient(110%_80%_at_50%_0%,#FFE9CF_0%,#FFF6EC_62%)]">
        <Container className="flex flex-col items-center gap-5 py-16 text-center md:py-20">
          <EyebrowPill>Compare</EyebrowPill>
          <h1 className="max-w-4xl font-heading text-5xl leading-tight font-semibold tracking-tight text-ink md:text-[58px]">
            Looking for an alternative to your journaling, mood, or AI music app?
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-body md:text-xl">
            DearMelody keeps your entries, moods, and songs together, so every
            track is a memory, not just a clip.
          </p>
          <LinkButton href={siteConfig.appUrl} variant="gradient" size="marketing">
            ♪ Try DearMelody free
          </LinkButton>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <Container>
          <div className="overflow-hidden rounded-[28px] border border-border bg-card-bg">
            <div className="grid grid-cols-[1.1fr_1fr_1.2fr] gap-4 border-b border-border bg-cream px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-sand">
              <div>Instead of</div>
              <div>Their promise</div>
              <div>The DearMelody difference</div>
            </div>
            {compareRows.map((row) => (
              <div
                key={row.category}
                className="grid grid-cols-1 gap-3 border-b border-border px-6 py-5 last:border-b-0 md:grid-cols-[1.1fr_1fr_1.2fr] md:gap-4"
              >
                <div className="font-heading text-lg font-semibold text-ink">
                  {row.category}
                </div>
                <div className="text-base text-muted-text">{row.them}</div>
                <div className="text-base font-medium text-body">{row.us}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-card-bg py-20 md:py-24">
        <Container className="grid gap-5 md:grid-cols-3">
          {compareAlternatives.map((alt) => (
            <article
              key={alt.kicker}
              className="rounded-3xl border border-border bg-cream p-8"
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: alt.accent }}
              >
                {alt.kicker}
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold text-ink">
                {alt.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-body">
                {alt.body}
              </p>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <Container className="mx-auto max-w-[820px]">
          <SectionHeading eyebrow="Compare FAQ" title="Common questions" />
          <FaqAccordion items={compareFaqs} className="mt-9" />
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
