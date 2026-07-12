import Image from "next/image";
import { WaveformBars } from "@/components/marketing/waveform-bars";

function MockupShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[22px] border border-border bg-cream p-6 shadow-[0_20px_44px_rgba(91,59,140,0.08)] ${className}`}
    >
      {children}
    </div>
  );
}

export function FeatureMockup({ type }: { type: string }) {
  switch (type) {
    case "editor":
      return (
        <MockupShell>
          <div className="mb-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-sand">
            Thursday, July 10 · draft
          </div>
          <div className="mb-3 font-heading text-[26px] font-semibold text-ink">
            How was your day?
          </div>
          <p className="text-base leading-relaxed text-body">
            We walked along the canal after the rain stopped. Everything smelled
            green and new
            <span className="ml-0.5 inline-block h-5 w-0.5 translate-y-1 bg-coral" />
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-butter bg-[#FFF3D6] px-3 py-1.5 text-xs font-semibold text-ink">
              ● Joyful
            </span>
            <span className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-text">
              Calm
            </span>
            <span className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-text">
              Wistful
            </span>
          </div>
        </MockupShell>
      );
    case "generate":
      return (
        <MockupShell className="bg-[linear-gradient(170deg,#F7F0FB,#F1EAF7)]">
          <div className="flex flex-col items-center gap-3.5 py-1.5">
            <Image
              src="/melo-listening.svg"
              alt="Melo listening"
              width={150}
              height={144}
            />
            <div className="font-heading text-lg font-semibold text-plum">
              Composing your melody…
            </div>
            <div className="h-2 w-[70%] overflow-hidden rounded-full bg-plum-bg">
              <div className="h-full w-2/3 rounded-full bg-[linear-gradient(90deg,#8B5BB0,#FF7A59)]" />
            </div>
            <div className="text-sm text-muted-text">
              Indie folk · Hopeful · with lyrics
            </div>
          </div>
        </MockupShell>
      );
    case "player":
      return (
        <MockupShell className="border-none bg-[linear-gradient(160deg,#5B3B8C_0%,#8B5BB0_45%,#FF9A6B_100%)] shadow-[0_26px_55px_rgba(91,59,140,0.3)]">
          <div className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-cream/70">
            Now playing · from Jul 10
          </div>
          <div className="font-heading text-[26px] font-semibold text-cream">
            The Street Was Ours
          </div>
          <div className="mb-4 text-sm text-cream/72">
            Indie folk · vocals · 3:04
          </div>
          <WaveformBars count={12} heightClass="h-14" className="mb-4" />
          <div className="flex items-center justify-center gap-5">
            <span className="font-heading text-xl text-cream/80">⏮</span>
            <div className="flex size-14 items-center justify-center rounded-full bg-[#41243B] font-heading text-[22px] text-butter">
              ▶
            </div>
            <span className="font-heading text-xl text-cream/80">⏭</span>
          </div>
        </MockupShell>
      );
    case "diary":
      return (
        <MockupShell>
          <div className="mb-3.5 flex flex-wrap gap-2">
            <span className="rounded-full bg-coral px-3 py-1.5 text-xs font-semibold text-cream">
              All · 46
            </span>
            <span className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-text">
              With melody · 31
            </span>
            <span className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-text">
              Drafts · 3
            </span>
          </div>
          <div className="flex flex-col gap-2.5">
            {[
              ["#FFD66B", "Canal walk after the rain", "Today · Joyful", "♪ The Street Was Ours", "text-plum"],
              ["#8B5BB0", "The kitchen smelled like home", "Today · draft", "Generate ♪", "text-coral"],
              ["#FFB27A", "Sunday, doing nothing", "Jul 6 · Calm", "♪ Slow Sunday Rain", "text-plum"],
            ].map(([dot, title, meta, song, songColor]) => (
              <div
                key={title}
                className="flex items-center gap-3 rounded-[14px] border border-border bg-card-bg px-4 py-3.5"
              >
                <span
                  className="size-2.5 shrink-0 rounded-full"
                  style={{ background: dot as string }}
                />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[15px] font-bold text-ink">
                    {title}
                  </div>
                  <div className="text-[12.5px] text-muted-text">{meta}</div>
                </div>
                <div className={`text-xs font-semibold ${songColor}`}>{song}</div>
              </div>
            ))}
          </div>
        </MockupShell>
      );
    case "library":
      return (
        <MockupShell>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["linear-gradient(140deg,#5B3B8C,#FF9A6B)", "The Street Was Ours", "Joyful · 3:04"],
              ["linear-gradient(140deg,#FFB27A,#FFD66B)", "Slow Sunday Rain", "Calm · 2:48"],
              ["linear-gradient(140deg,#FF7A59,#8B5BB0)", "Beginnings", "Hopeful · 3:20"],
              ["linear-gradient(140deg,#FFD66B,#FF7A59)", "Kitchen Ghosts", "Wistful · 2:55"],
            ].map(([grad, title, meta]) => (
              <div key={title} className="flex flex-col gap-2">
                <div
                  className="flex h-24 items-center justify-center rounded-[14px] font-heading text-2xl text-cream/90"
                  style={{ background: grad as string }}
                >
                  ♪
                </div>
                <div className="text-sm font-bold text-ink">{title}</div>
                <div className="text-xs text-muted-text">{meta}</div>
              </div>
            ))}
          </div>
        </MockupShell>
      );
    case "collections":
      return (
        <MockupShell>
          <div className="grid grid-cols-2 gap-3.5">
            {[
              ["linear-gradient(140deg,#FFD66B,#FF9A6B)", "Summer with Ali", "14 entries · 9 songs"],
              ["linear-gradient(140deg,#FF9A6B,#8B5BB0)", "Moving Abroad", "8 entries · 4 songs"],
            ].map(([grad, title, meta]) => (
              <div
                key={title}
                className="overflow-hidden rounded-2xl border border-border bg-card-bg"
              >
                <div className="h-[70px]" style={{ background: grad as string }} />
                <div className="p-3.5">
                  <div className="font-heading text-base font-semibold text-ink">
                    {title}
                  </div>
                  <div className="text-xs text-muted-text">{meta}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3.5 flex items-center gap-3 rounded-2xl bg-[linear-gradient(150deg,#FFE9CF,#FFD9B8)] px-4 py-3.5">
            <div className="flex size-10 items-center justify-center rounded-[10px] bg-[#41243B] font-heading text-lg text-butter">
              ▶
            </div>
            <div>
              <div className="font-heading text-[15px] font-semibold text-[#41243B]">
                Play the album
              </div>
              <div className="text-[12.5px] text-[#8D5236]">9 songs · 27 min</div>
            </div>
          </div>
        </MockupShell>
      );
    default:
      return null;
  }
}
