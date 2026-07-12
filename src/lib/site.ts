export const siteConfig = {
  name: "Dear Melody",
  tagline: "Turn your memories into melodies",
  description:
    "Dear Melody helps you capture life's meaningful moments and transform them into personalized musical keepsakes you'll cherish forever.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  contactEmail: "hello@dearmelody.com",
  nav: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    twitter: "@dearmelody",
  },
} as const;

export const pricingPlans = [
  {
    name: "Starter",
    price: "$9",
    period: "per melody",
    description: "Perfect for a single special moment.",
    features: [
      "One personalized melody",
      "High-quality audio download",
      "Shareable link",
      "30-day revision window",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Family",
    price: "$29",
    period: "per month",
    description: "For families building a library of memories.",
    features: [
      "Up to 5 melodies per month",
      "Priority composition queue",
      "Unlimited sharing",
      "Family archive access",
      "Email support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Studio",
    price: "$99",
    period: "per month",
    description: "For creators, brands, and power users.",
    features: [
      "Unlimited melodies",
      "Custom instrumentation",
      "Commercial usage rights",
      "Dedicated support",
      "API access (coming soon)",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
] as const;

export const features = [
  {
    title: "Personalized compositions",
    description:
      "Every melody is crafted from your story, tone, and the emotions you want to preserve.",
  },
  {
    title: "Effortless sharing",
    description:
      "Send a beautiful link to loved ones or download studio-quality audio in seconds.",
  },
  {
    title: "Built for keepsakes",
    description:
      "Archive milestones, letters, and voice notes as music you can revisit anytime.",
  },
] as const;
