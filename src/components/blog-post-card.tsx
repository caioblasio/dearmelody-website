import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";

type BlogPostCardProps = {
  post: BlogPostMeta;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-8 transition-shadow hover:shadow-md">
      <time dateTime={post.date} className="text-sm text-muted">
        {formatPostDate(post.date)}
      </time>
      <h2 className="mt-3 font-display text-2xl font-medium text-foreground">
        <Link href={`/blog/${post.slug}`} className="hover:text-primary">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 leading-relaxed text-muted">{post.description}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-6 inline-block text-sm font-medium text-primary hover:underline"
      >
        Read article →
      </Link>
    </article>
  );
}
