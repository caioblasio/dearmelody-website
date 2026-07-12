import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { FaqItem } from "@/lib/content/faqs";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  category?: string;
  readTime?: string;
  quickAnswer?: string;
  faq?: FaqItem[];
  relatedSlugs?: string[];
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

function parsePostFile(slug: string, raw: string): BlogPost {
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? new Date().toISOString()),
    author: data.author ? String(data.author) : undefined,
    category: data.category ? String(data.category) : undefined,
    readTime: data.readTime ? String(data.readTime) : undefined,
    quickAnswer: data.quickAnswer ? String(data.quickAnswer) : undefined,
    faq: Array.isArray(data.faq)
      ? data.faq.map((item: { question: string; answer: string }) => ({
          question: String(item.question),
          answer: String(item.answer),
        }))
      : undefined,
    relatedSlugs: Array.isArray(data.relatedSlugs)
      ? data.relatedSlugs.map(String)
      : undefined,
    content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(postsDirectory, file), "utf8");
      const post = parsePostFile(slug, raw);

      return {
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        author: post.author,
        category: post.category,
        readTime: post.readTime,
      };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  return parsePostFile(slug, raw);
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}
