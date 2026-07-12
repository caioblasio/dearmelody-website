import { cn } from "@/lib/utils";

type EyebrowPillProps = {
  children: React.ReactNode;
  className?: string;
  accent?: "coral" | "plum" | "sand";
};

const accentColors = {
  coral: "text-sand",
  plum: "text-plum",
  sand: "text-sand",
};

export function EyebrowPill({
  children,
  className,
  accent = "sand",
}: EyebrowPillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 self-start rounded-full border border-border bg-card-bg px-4 py-2",
        className,
      )}
    >
      <span className="size-2 rounded-full bg-coral" />
      <span
        className={cn(
          "text-[13px] font-semibold uppercase tracking-[0.15em]",
          accentColors[accent],
        )}
      >
        {children}
      </span>
    </div>
  );
}
