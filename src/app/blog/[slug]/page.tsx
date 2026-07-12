import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { mdxComponents } from "@/components/mdx-components";
import {
  formatPostDate,
  getAllPostSlugs,
  getPostBySlug,
} from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return createPageMetadata({ title: "Post not found", noIndex: true });
  }

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
  });

  return (
    <Container className="py-20">
      <Link
        href="/blog"
        className="text-sm font-medium text-primary hover:underline"
      >
        ← Back to blog
      </Link>
      <header className="mt-8 max-w-3xl">
        <time dateTime={post.date} className="text-sm text-muted">
          {formatPostDate(post.date)}
        </time>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          {post.title}
        </h1>
        {post.author ? (
          <p className="mt-4 text-sm text-muted">By {post.author}</p>
        ) : null}
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {post.description}
        </p>
      </header>
      <article className="prose-blog mt-12 max-w-3xl">{content}</article>
    </Container>
  );
}
