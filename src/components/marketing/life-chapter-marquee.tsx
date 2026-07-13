import Link from "next/link";
import { homeChapters } from "@/lib/content/home";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type Chapter = (typeof homeChapters)[number];

function ChapterPill({ chapter }: { chapter: Chapter }) {
  return (
    <div className="flex shrink-0 items-center gap-3.5 rounded-full border border-border bg-cream px-3.5 py-3 pr-5">
      <div
        className="flex size-10 shrink-0 items-center justify-center rounded-full"
        style={{ background: chapter.gradient }}
      >
        <div className="flex h-4 items-end gap-0.5">
          {[0.45, 1, 0.65].map((height, i) => (
            <span
              key={i}
              className="w-[2.5px] origin-bottom rounded-sm bg-cream/85"
              style={{
                height: `${height * 100}%`,
                animation: `dm-wave ${[0.9, 0.75, 1.05][i]}s ease-in-out ${[0, 0.2, 0.35][i]}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-0.5 whitespace-nowrap">
        <div className="font-heading text-[17px] leading-tight font-semibold text-ink">
          {chapter.title}
        </div>
        <div className="text-[13px] font-medium text-sand">{chapter.meta}</div>
      </div>
    </div>
  );
}

type LifeChapterMarqueeProps = {
  className?: string;
};

export function LifeChapterMarquee({ className }: LifeChapterMarqueeProps) {
  const loop = [...homeChapters, ...homeChapters];

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div
        className="dm-marquee w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
      >
        <div className="dm-marquee-track flex w-max flex-nowrap gap-3.5">
          {loop.map((chapter, index) => (
            <ChapterPill key={`${chapter.title}-${index}`} chapter={chapter} />
          ))}
        </div>
      </div>
      <p className="text-base font-medium text-muted-text">
        Start a chapter of your own —{" "}
        <Link
          href={siteConfig.appUrl}
          className="font-heading font-semibold text-plum"
        >
          create your first melody free →
        </Link>
      </p>
    </div>
  );
}
