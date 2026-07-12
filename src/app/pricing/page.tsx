import { createPageMetadata } from "@/lib/seo";
import PricingPageClient from "./pricing-page-client";

export const metadata = createPageMetadata({
  title: "Pricing",
  description:
    "DearMelody pricing, start free and create your first melody free. Plus and Premium plans unlock monthly melodies, multiple genres, life-chapter albums, alternative versions, and high-quality exports. Cancel anytime.",
  path: "/pricing",
});

export default function PricingPage() {
  return <PricingPageClient />;
}
