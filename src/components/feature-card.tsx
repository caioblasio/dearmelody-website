type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
      <h3 className="font-display text-xl font-medium text-foreground">
        {title}
      </h3>
      <p className="mt-3 leading-relaxed text-muted">{description}</p>
    </article>
  );
}
