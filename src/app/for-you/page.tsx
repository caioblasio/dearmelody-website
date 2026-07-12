import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { EyebrowPill } from "@/components/marketing/eyebrow-pill";
import { FinalCta } from "@/components/marketing/final-cta";
import { LinkButton } from "@/components/marketing/link-button";
import { forYouAudiences } from "@/lib/content/for-you";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata = createPageMetadata({
  title: "For you",
  description:
    "However you got here, there's a melody in it. See how DearMelody fits everyday journalers, creative self-expression, reflection and self-care, parents and families, and keepsakes and gifts.",
  path: "/for-you",
});

export default function ForYouPage() {
  return (
    <>
      <section className="bg-[radial-gradient(110%_80%_at_50%_0%,#FFE9CF_0%,#FFF6EC_62%)]">
        <Container className="flex flex-col items-center gap-5 py-16 text-center md:py-20">
          <EyebrowPill>Made for your moment</EyebrowPill>
          <h1 className="max-w-3xl font-heading text-5xl leading-tight font-semibold tracking-tight text-ink md:text-[60px]">
            However you got here, there&apos;s a melody in it
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-body md:text-xl">
            Everyday reflection or the biggest chapter of your life, DearMelody
            meets you where you are.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-2.5">
            {forYouAudiences.map((audience) => (
              <Link
                key={audience.id}
                href={`#${audience.id}`}
                className="rounded-full border border-border bg-card-bg px-4 py-2 text-sm font-semibold text-body hover:border-peach hover:text-coral"
              >
                {audience.eyebrow.replace(/^For /, "")}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {forYouAudiences.map((audience, index) => (
        <section
          key={audience.id}
          id={audience.id}
          className={cn(
            "scroll-mt-24 py-16 md:py-20",
            index % 2 === 0 ? "bg-cream" : "bg-card-bg",
          )}
        >
          <Container
            className={cn(
              "grid items-center gap-12 md:grid-cols-2",
              audience.reverse && "md:[&>*:first-child]:order-2",
            )}
          >
            <div className="flex flex-col gap-4">
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: audience.accent }}
              >
                {audience.eyebrow}
              </p>
              <h2 className="font-heading text-4xl leading-tight font-semibold text-ink">
                {audience.title}
              </h2>
              <p className="text-lg leading-relaxed text-body">{audience.body}</p>
              <ul className="space-y-2.5">
                {audience.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2.5">
                    <span className="flex size-[22px] items-center justify-center rounded-full bg-chip-bg font-heading text-[13px] text-coral">
                      ♪
                    </span>
                    <span className="font-medium text-ink">{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-2 rounded-2xl border border-border bg-cream p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-sand">
                  {audience.worryLabel}
                </div>
                <p className="mt-2 text-base leading-relaxed text-body">
                  {audience.worry}
                </p>
              </div>
              <blockquote className="rounded-2xl border border-border bg-card-bg p-5">
                <p className="text-lg leading-relaxed text-ink">
                  &ldquo;{audience.quote}&rdquo;
                </p>
                <footer className="mt-3 text-sm font-semibold text-muted-text">
                  {audience.who}
                </footer>
              </blockquote>
              <LinkButton
                href={siteConfig.appUrl}
                variant="gradient"
                size="marketing"
                className="w-fit"
              >
                ♪ Start free
              </LinkButton>
            </div>
            <div
              className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[24px]"
              style={{ background: audience.gradient }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.35),transparent_45%)] opacity-50" />
              <Image
                src={audience.melo}
                alt="Melo mascot"
                width={220}
                height={211}
                className="relative drop-shadow-[0_16px_26px_rgba(58,46,69,0.22)]"
              />
            </div>
          </Container>
        </section>
      ))}

      <FinalCta />
    </>
  );
}
