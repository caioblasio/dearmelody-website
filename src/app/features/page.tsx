import { Container } from "@/components/container";
import { EyebrowPill } from "@/components/marketing/eyebrow-pill";
import { FeatureMockup } from "@/components/marketing/feature-mockup";
import { FinalCta } from "@/components/marketing/final-cta";
import { LinkButton } from "@/components/marketing/link-button";
import { MaterialIcon } from "@/components/marketing/material-icon";
import { SectionHeading } from "@/components/section-heading";
import {
  featurePrivacyPoints,
  featuresList,
  featureViews,
} from "@/lib/content/features";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "Features",
  description:
    "DearMelody features: a distraction-free journal, AI melody generation, an immersive player, a searchable diary, life-chapter albums, and calendar, table & timeline views, all private by default.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-[radial-gradient(110%_80%_at_50%_0%,#FFE9CF_0%,#FFF6EC_62%)]">
        <Container className="flex flex-col items-center gap-5 py-16 text-center md:py-20">
          <EyebrowPill>Product tour</EyebrowPill>
          <h1 className="max-w-3xl font-heading text-5xl leading-tight font-semibold tracking-tight text-ink md:text-[60px]">
            Everything your memories deserve
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-body md:text-xl">
            A private journal, personalized songs, and a growing archive of the
            chapters that shaped you, all in one warm, thoughtful place.
          </p>
          <LinkButton href={siteConfig.appUrl} variant="gradient" size="marketing">
            ♪ Create your first melody
          </LinkButton>
        </Container>
      </section>

      {featuresList.map((feature) => (
        <section
          key={feature.key}
          className={cn(
            "py-16 md:py-20",
            feature.reverse ? "bg-card-bg" : "bg-cream",
          )}
        >
          <Container
            className={cn(
              "grid items-center gap-12 md:grid-cols-2",
              feature.reverse && "md:[&>*:first-child]:order-2",
            )}
          >
            <div className="flex flex-col gap-4">
              <div
                className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ background: feature.dotBg, color: feature.accent }}
              >
                {feature.tag}
              </div>
              <h2 className="font-heading text-4xl leading-tight font-semibold text-ink">
                {feature.title}
              </h2>
              <p className="text-lg leading-relaxed text-body">{feature.body}</p>
              <ul className="mt-2 space-y-2.5">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5">
                    <span className="font-heading text-coral">♪</span>
                    <span className="text-base font-medium text-ink">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <FeatureMockup type={feature.key} />
          </Container>
        </section>
      ))}

      <section className="border-t border-border bg-card-bg py-20 md:py-24">
        <Container className="flex flex-col items-center gap-11">
          <SectionHeading
            eyebrow="See your story differently"
            eyebrowColor="plum"
            title="Calendar, table, and timeline"
            description="Switch views whenever your brain needs a different way in."
          />
          <div className="grid w-full gap-5 md:grid-cols-3">
            {featureViews.map((view) => (
              <div
                key={view.title}
                className="rounded-3xl border border-border bg-cream p-8"
              >
                <div
                  className="mb-4 flex size-11 items-center justify-center rounded-full"
                  style={{ background: view.bg }}
                >
                  <MaterialIcon
                    name={view.icon}
                    className="text-2xl"
                    style={{ color: view.fg }}
                  />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-ink">
                  {view.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-body">
                  {view.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-10 rounded-[28px] bg-[linear-gradient(150deg,#3A2E45_0%,#5B3B8C_100%)] p-8 md:grid-cols-[1fr_0.9fr] md:p-14">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-butter">
                Privacy first
              </p>
              <h2 className="mt-3 font-heading text-4xl font-semibold text-cream">
                Built for stories you want to keep close
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {featurePrivacyPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-2xl border border-cream/14 bg-cream/8 px-5 py-4 text-cream"
                >
                  <span className="font-heading text-butter">✓</span>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
