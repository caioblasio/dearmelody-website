"use client";

import { cn } from "@/lib/utils";

type PricingToggleProps = {
  annual: boolean;
  onChange: (annual: boolean) => void;
  className?: string;
};

export function PricingToggle({
  annual,
  onChange,
  className,
}: PricingToggleProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-card-bg p-1.5",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => onChange(false)}
        className={cn(
          "rounded-full px-5 py-2.5 text-[15px] font-semibold transition-colors",
          !annual ? "bg-coral text-cream" : "text-body",
        )}
      >
        Monthly
      </button>
      <button
        type="button"
        onClick={() => onChange(true)}
        className={cn(
          "rounded-full px-5 py-2.5 text-[15px] font-semibold transition-colors",
          annual ? "bg-coral text-cream" : "text-body",
        )}
      >
        Annual{" "}
        <span className={cn("text-xs", annual ? "text-cream/85" : "text-[#B3651F]")}>
          · save 20%
        </span>
      </button>
    </div>
  );
}
