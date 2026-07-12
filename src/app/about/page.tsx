import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn how Dear Melody helps people turn meaningful memories into personalized musical keepsakes.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        align="left"
        eyebrow="About"
        title="We believe memories deserve a soundtrack"
        description="Dear Melody was created for the moments words alone can't hold — anniversaries, letters, milestones, and the quiet stories that matter most."
      />
      <div className="prose prose-neutral mt-12 max-w-3xl text-muted">
        <p className="text-lg leading-relaxed">
          Our team brings together composers, product designers, and storytellers
          who care deeply about emotional craft. We built Dear Melody to make
          personalized music accessible without losing the intimacy of a
          hand-written note.
        </p>
        <p className="mt-6 text-lg leading-relaxed">
          Whether you&apos;re celebrating a wedding, honoring a loved one, or
          preserving a chapter of your life, we guide you from memory to melody
          with a process that feels thoughtful, not transactional.
        </p>
      </div>
    </Container>
  );
}
