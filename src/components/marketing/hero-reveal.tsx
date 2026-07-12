import Image from "next/image";
import { WaveformBars } from "@/components/marketing/waveform-bars";
import { Badge } from "@/components/ui/badge";

export function HeroReveal() {
  return (
    <div className="relative flex flex-col items-center gap-0.5">
      <div className="animate-dm-pop-l w-full max-w-[380px] -rotate-1.5 rounded-3xl border border-border bg-card-bg p-6 shadow-[0_24px_50px_rgba(91,59,140,0.10)] [animation-delay:0.32s]">
        <div className="mb-3 flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-plum-light" />
          <span className="text-sm font-bold text-ink">
            Canal walk after the rain
          </span>
          <span className="ml-auto text-xs text-sand">Today · Wistful</span>
        </div>
        <p className="text-[15px] leading-relaxed text-body">
          We walked along the canal after the rain stopped. Everything smelled
          green and new, and for a moment nothing else needed to happen…
        </p>
      </div>

      <div className="animate-dm-pop z-[2] my-1.5 flex flex-col items-center [animation-delay:0.46s]">
        <div className="font-heading text-[22px] font-semibold text-coral">
          ↓
        </div>
        <Badge className="rounded-full bg-chip-bg px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-sand hover:bg-chip-bg">
          turning into a song
        </Badge>
      </div>

      <div className="animate-dm-pop-r flex w-full max-w-[380px] rotate-1.5 items-center gap-4 rounded-3xl bg-[linear-gradient(150deg,#5B3B8C_0%,#8B5BB0_45%,#FF9A6B_100%)] p-5 shadow-[0_26px_55px_rgba(91,59,140,0.32)] [animation-delay:0.54s]">
        <div className="flex size-[74px] shrink-0 items-center justify-center rounded-[18px] bg-cream/15 font-heading text-[30px] font-semibold text-cream">
          ♪
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-heading text-[19px] font-semibold text-cream">
            The Street Was Ours
          </div>
          <div className="mb-2 text-[13px] text-cream/75">
            Indie folk · 3:04
          </div>
          <WaveformBars />
        </div>
      </div>

      <Image
        src="/melo-listening.svg"
        alt="Melo the sheep listening"
        width={132}
        height={127}
        className="animate-dm-rise absolute -right-8 -bottom-10 drop-shadow-[0_12px_20px_rgba(91,59,140,0.18)] [animation-delay:0.68s]"
      />
    </div>
  );
}
