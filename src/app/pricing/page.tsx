import { Container } from "@/components/container";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";
import { pricingPlans } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Pricing",
  description:
    "Explore Dear Melody pricing plans for single keepsakes, families, and studio users.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="Pricing"
        title="Choose the plan that fits your story"
        description="Every plan includes studio-quality audio, secure sharing, and support from our composition team."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    </Container>
  );
}
