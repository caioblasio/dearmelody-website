import { cn } from "@/lib/utils";

type WordmarkProps = {
  variant?: "light" | "dark";
  className?: string;
};

const variantStyles = {
  light: {
    root: "text-[23px] tracking-tight text-ink",
    melody: "text-coral",
  },
  dark: {
    root: "text-[22px] text-cream",
    melody: "text-coral-light",
  },
} as const;

export function Wordmark({ variant = "light", className }: WordmarkProps) {
  const styles = variantStyles[variant];

  return (
    <span
      className={cn("font-heading font-semibold", styles.root, className)}
    >
      Dear<span className={styles.melody}>Melody</span>
    </span>
  );
}
