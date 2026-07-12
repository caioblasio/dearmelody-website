import { WaveformBars } from "@/components/marketing/waveform-bars";
import { Card, CardContent } from "@/components/ui/card";

type LifeChapterCardProps = {
  title: string;
  description: string;
  meta: string;
  gradient: string;
};

export function LifeChapterCard({
  title,
  description,
  meta,
  gradient,
}: LifeChapterCardProps) {
  return (
    <Card className="overflow-hidden rounded-[22px] border-border bg-cream py-0 shadow-none">
      <div
        className="relative flex h-[130px] items-end p-4"
        style={{ background: gradient }}
      >
        <WaveformBars
          count={6}
          heightClass="h-9"
          barClassName="w-1"
        />
      </div>
      <CardContent className="flex flex-col gap-1.5 p-5">
        <h3 className="font-heading text-[21px] font-semibold text-ink">
          {title}
        </h3>
        <p className="text-[15px] text-muted-text">{description}</p>
        <p className="mt-1.5 text-[12.5px] font-semibold text-sand">{meta}</p>
      </CardContent>
    </Card>
  );
}
