import { cn } from "@/lib/utils";

type WaveformBarsProps = {
  count?: number;
  className?: string;
  barClassName?: string;
  heightClass?: string;
};

const delays = [0, 0.15, 0.3, 0.05, 0.25, 0.4, 0.1, 0.35];
const durations = [0.9, 0.7, 1.1, 0.8, 0.95, 0.75, 1.0, 0.85];
const heights = ["40%", "75%", "100%", "55%", "85%", "35%", "70%", "50%"];
const colors = [
  "bg-cream/55",
  "bg-cream/80",
  "bg-butter",
  "bg-cream/70",
  "bg-cream/60",
  "bg-cream/50",
  "bg-cream/75",
  "bg-cream/55",
];

export function WaveformBars({
  count = 8,
  className,
  barClassName,
  heightClass = "h-6",
}: WaveformBarsProps) {
  return (
    <div className={cn("flex items-end gap-0.5", heightClass, className)}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "flex-1 origin-bottom rounded-sm",
            colors[i % colors.length],
            barClassName,
          )}
          style={{
            height: heights[i % heights.length],
            animation: `dm-wave ${durations[i % durations.length]}s ease-in-out ${delays[i % delays.length]}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
