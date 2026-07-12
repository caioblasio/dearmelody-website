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
    { label: "Features", href: "/features" },
    { label: "For you", href: "/for-you" },
    { label: "Pricing", href: "/pricing" },
    { label: "Log in", href: appUrl, external: true as const },
  ] as const,
  footer: {
    product: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "For you", href: "/for-you" },
      { label: "Compare", href: "/compare" },
    ],
    explore: [
      { label: "Journal prompts", href: "/blog" },
      { label: "Life-chapter templates", href: "/for-you#keepsakes" },
      { label: "The blog", href: "/blog" },
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
