import { LinkButton } from "@/components/marketing/link-button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  name: string;
  tagline: string;
  price: string;
  period: string;
  billNote?: string;
  popular?: boolean;
  featureHead?: string;
  features: readonly string[];
  cta: string;
  variant?: "secondary" | "gradient" | "plum";
  compact?: boolean;
};

export function PricingCard({
  name,
  tagline,
  price,
  period,
  billNote,
  popular = false,
  featureHead = "What's included",
  features,
  cta,
  variant = "secondary",
  compact = false,
}: PricingCardProps) {
  return (
    <article
      className={cn(
        "relative flex flex-col gap-5 rounded-[28px] border-2 bg-cream p-8",
        popular ? "border-coral bg-card-bg" : "border-border",
        compact && "rounded-3xl p-7",
      )}
    >
      {popular ? (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-coral px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream">
          Most loved
        </div>
      ) : null}

      <div>
        <h3 className="font-heading text-2xl font-semibold text-ink">{name}</h3>
        <p className="mt-0.5 text-[15px] text-muted-text">{tagline}</p>
      </div>

      <div className="flex items-baseline gap-1.5">
        <span className="font-heading text-5xl font-bold tracking-tight text-ink">
          {price}
        </span>
        <span className="text-base text-muted-text">{period}</span>
      </div>

      {billNote ? (
        <p className="-mt-3 min-h-[18px] text-[13px] text-muted-text">
          {billNote}
        </p>
      ) : null}

      <LinkButton
        href={siteConfig.appUrl}
        variant={variant}
        size="marketing"
        className="w-full"
      >
        {cta}
      </LinkButton>

      <Separator />

      <div className="text-xs font-semibold uppercase tracking-[0.15em] text-sand">
        {featureHead}
      </div>

      <ul className="flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              className={cn(
                "mt-0.5 flex size-[22px] shrink-0 items-center justify-center rounded-full font-heading text-[13px] font-semibold",
                popular || variant === "gradient"
                  ? "bg-chip-bg text-coral"
                  : "bg-plum-bg text-plum",
              )}
            >
              ✓
            </span>
            <span className="text-base leading-relaxed text-body">{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
