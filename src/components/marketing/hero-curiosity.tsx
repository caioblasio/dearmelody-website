import { EyebrowPill } from "@/components/marketing/eyebrow-pill";
import { LinkButton } from "@/components/marketing/link-button";
import { siteConfig } from "@/lib/site";

export function HeroCuriosity() {
  return (
    <div className="mx-auto flex max-w-[820px] flex-col items-center gap-5 px-8 py-16 text-center md:py-[68px]">
      <EyebrowPill>Try it with today</EyebrowPill>
      <h1 className="font-heading text-5xl leading-none font-semibold tracking-[-0.04em] text-ink md:text-[70px]">
        What would today
        <br />
        <span className="text-coral">sound like?</span>
      </h1>
      <p className="max-w-xl text-lg leading-relaxed text-body md:text-xl">
        Write about your day and let DearMelody turn your thoughts, memories,
        and emotions into a song made from your story.
      </p>

      <div className="mt-2 w-full max-w-[600px] rounded-3xl border border-border bg-card-bg p-6 text-left shadow-[0_20px_44px_rgba(91,59,140,0.10)]">
        <div className="mb-2.5 text-xs font-medium uppercase tracking-[0.2em] text-sand">
          How was your day?
        </div>
        <p className="mb-4 text-lg leading-relaxed text-body">
          Today felt like the first real day of summer. I finally called mom
          about the apartment
          <span className="ml-0.5 inline-block h-5 w-0.5 translate-y-0.5 bg-coral align-middle" />
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            <span className="rounded-full bg-chip-bg px-3 py-1.5 text-xs font-semibold text-coral">
              Indie folk
            </span>
            <span className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-text">
              Hopeful
            </span>
          </div>
          <LinkButton
            href={siteConfig.appUrl}
            variant="gradient"
            size="marketing"
            className="px-5 py-3 text-base"
          >
            ♪ Create today&apos;s melody
          </LinkButton>
        </div>
      </div>

      <div className="mt-1 flex flex-wrap items-center justify-center gap-3">
        <span className="text-[15px] font-semibold tracking-wide text-[#FFB000]">
          ★★★★★
        </span>
        <span className="text-[15px] text-muted-text">
          4.9 · 128,000+ melodies created · first one&apos;s free
        </span>
      </div>
    </div>
  );
}
