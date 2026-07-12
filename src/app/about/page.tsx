import { Container } from "@/components/container";
import { EyebrowPill } from "@/components/marketing/eyebrow-pill";
import { FinalCta } from "@/components/marketing/final-cta";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn how DearMelody helps people turn meaningful memories into personalized songs and private soundtracks.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-[radial-gradient(110%_80%_at_50%_0%,#FFE9CF_0%,#FFF6EC_62%)]">
        <Container className="py-16 md:py-20">
          <EyebrowPill>About</EyebrowPill>
          <SectionHeading
            align="left"
            eyebrowColor="plum"
            title="We believe memories deserve a soundtrack"
            description="DearMelody was created for the moments words alone can't hold — anniversaries, letters, milestones, and the quiet stories that matter most."
          />
          <div className="prose-blog mt-10 max-w-3xl">
            <p>
              Our team brings together composers, product designers, and
              storytellers who care deeply about emotional craft. We built
              DearMelody to make personalized music accessible without losing
              the intimacy of a hand-written note.
            </p>
            <p>
              Whether you&apos;re celebrating a wedding, honoring a loved one, or
              preserving a chapter of your life, we guide you from memory to
              melody with a process that feels thoughtful, not transactional.
            </p>
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
