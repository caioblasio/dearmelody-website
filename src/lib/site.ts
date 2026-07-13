const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.dearmelody.app";

export const siteConfig = {
  name: "DearMelody",
  tagline: "Write your story. Hear how it feels.",
  description:
    "DearMelody turns your journal entries into personalized songs, a private soundtrack of your memories, emotions, and most meaningful life chapters.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  appUrl,
  locale: "en_US",
  contactEmail: "hello@dearmelody.com",
  nav: [
    { label: "How it works", href: "/#how" },
    { label: "For you", href: "/#usecases" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ] as const,
  footer: {
    onPage: [
      { label: "How it works", href: "/#how" },
      { label: "Use cases", href: "/#usecases" },
      { label: "Life chapters", href: "/#chapters" },
      { label: "Pricing", href: "/#pricing" },
    ],
    explore: [
      { label: "The blog", href: "/blog" },
      { label: "Alternatives", href: "/compare" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Privacy", href: "/privacy" },
      { label: "Help center", href: "/contact" },
    ],
  },
  social: {
    twitter: "@dearmelody",
  },
  disclaimer:
    "DearMelody is a creative reflection tool, not a replacement for professional mental health support.",
} as const;
