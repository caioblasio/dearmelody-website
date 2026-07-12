type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  eyebrowColor?: "coral" | "plum" | "sand";
};

const eyebrowColors = {
  coral: "text-coral",
  plum: "text-plum",
  sand: "text-sand",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  eyebrowColor = "coral",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-[660px] ${alignment}`}>
      {eyebrow ? (
        <p
          className={`mb-3.5 text-[13px] font-semibold uppercase tracking-[0.2em] ${eyebrowColors[eyebrowColor]}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-4xl font-semibold tracking-tight text-ink md:text-[46px] md:leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-3.5 text-lg leading-relaxed text-body md:text-[19px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
