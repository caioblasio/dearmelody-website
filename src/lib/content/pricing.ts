export type PricingTier = {
  name: string;
  tagline: string;
  monthlyPrice: string;
  annualPrice: string;
  period: string;
  monthlyBillNote: string;
  annualBillNote: string;
  popular: boolean;
  featureHead: string;
  features: string[];
  cta: string;
  variant: "secondary" | "gradient" | "plum";
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    tagline: "Start your soundtrack",
    monthlyPrice: "$0",
    annualPrice: "$0",
    period: "forever",
    monthlyBillNote: "No credit card required",
    annualBillNote: "No credit card required",
    popular: false,
    featureHead: "What's included",
    features: [
      "Unlimited journal entries",
      "Your first melody, free",
      "Diary & calendar views",
      "Private by default",
    ],
    cta: "Start free",
    variant: "secondary",
  },
  {
    name: "Plus",
    tagline: "For the regular journaler",
    monthlyPrice: "$8",
    annualPrice: "$6.40",
    period: "/ month",
    monthlyBillNote: "Billed monthly",
    annualBillNote: "Billed $77/year",
    popular: true,
    featureHead: "Everything in Free, plus",
    features: [
      "Melodies every month",
      "Multiple genres & moods",
      "Alternative song versions",
      "With-lyrics generation",
      "Timeline & table views",
    ],
    cta: "Choose Plus",
    variant: "gradient",
  },
  {
    name: "Premium",
    tagline: "Your whole life, scored",
    monthlyPrice: "$16",
    annualPrice: "$12.80",
    period: "/ month",
    monthlyBillNote: "Billed monthly",
    annualBillNote: "Billed $154/year",
    popular: false,
    featureHead: "Everything in Plus, plus",
    features: [
      "Unlimited life chapters & albums",
      "Longer, higher-quality songs",
      "High-quality audio exports",
      "Advanced melody visualization",
      "Monthly & annual soundtracks",
    ],
    cta: "Go Premium",
    variant: "plum",
  },
];

export const pricingValueCards = [
  {
    icon: "music_note",
    title: "Songs, not novelties",
    description:
      "More melodies, multiple styles, and alternative versions, so every entry can find the sound that fits it.",
    bg: "#FFE9CF",
    fg: "#FF7A59",
  },
  {
    icon: "auto_awesome",
    title: "A growing archive",
    description:
      "Life-chapter albums, timelines and collections that turn scattered entries into a story you can revisit for years.",
    bg: "#F1EAF7",
    fg: "#5B3B8C",
  },
  {
    icon: "download",
    title: "Yours to keep",
    description:
      "High-quality exports and clear ownership. Your words and melodies belong to you, private by default, always.",
    bg: "#FFF3D6",
    fg: "#B3651F",
  },
];
