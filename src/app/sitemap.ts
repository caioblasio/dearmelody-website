import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

const routes = [
  "/",
  "/features",
  "/for-you",
  "/pricing",
  "/compare",
  "/about",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = routes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: (route === "/" || route === "/blog"
      ? "weekly"
      : "monthly") as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: route === "/" ? 1 : 0.7,
  }));

  const blogPages = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
