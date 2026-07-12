import { Button } from "./button";

type PricingCardProps = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: readonly string[];
  cta: string;
  highlighted?: boolean;
};

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted = false,
}: PricingCardProps) {
  return (
    <article
      className={`flex flex-col rounded-2xl border p-8 ${
        highlighted
          ? "border-primary bg-surface shadow-lg shadow-primary/10"
          : "border-border bg-surface"
      }`}
    >
      {highlighted ? (
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Most popular
        </p>
      ) : null}
      <h3 className="font-display text-2xl font-medium text-foreground">
        {name}
      </h3>
      <p className="mt-2 text-muted">{description}</p>
      <p className="mt-6 font-display text-4xl font-medium text-foreground">
        {price}
        <span className="ml-2 text-base font-sans text-muted">{period}</span>
      </p>
      <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm text-muted">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        href="/contact"
        variant={highlighted ? "primary" : "secondary"}
        className="mt-8 w-full"
      >
        {cta}
      </Button>
    </article>
  );
}
