import { Card, CardContent } from "@/components/ui/card";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  initial: string;
  bg: string;
};

export function TestimonialCard({
  quote,
  name,
  role,
  initial,
  bg,
}: TestimonialCardProps) {
  return (
    <Card className="flex h-full flex-col gap-4 rounded-[22px] border-border bg-cream py-7 shadow-none">
      <CardContent className="flex h-full flex-col gap-4 px-7">
        <div className="text-sm font-semibold tracking-wide text-[#FFB000]">
          ★★★★★
        </div>
        <p className="flex-1 text-lg leading-relaxed text-ink">&ldquo;{quote}&rdquo;</p>
        <div className="flex items-center gap-3">
          <div
            className="flex size-10 shrink-0 items-center justify-center rounded-full font-heading text-base font-semibold text-cream"
            style={{ background: bg }}
          >
            {initial}
          </div>
          <div>
            <div className="text-[15px] font-bold text-ink">{name}</div>
            <div className="text-[13px] text-muted-text">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
