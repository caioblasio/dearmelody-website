import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { BlogPostCard } from "@/components/marketing/blog-post-card";
import { Container } from "@/components/container";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { FinalCta } from "@/components/marketing/final-cta";
import { LinkButton } from "@/components/marketing/link-button";
import { JsonLd } from "@/components/json-ld";
import { mdxComponents } from "@/components/mdx-components";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  estimateReadTime,
  formatPostDate,
  getAllPostSlugs,
  getAllPosts,
  getPostBySlug,
} from "@/lib/blog";
import {
  createBlogPostingJsonLd,
  createBreadcrumbJsonLd,
  createFaqJsonLd,
  createPageMetadata,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";

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

  const readTime = post.readTime ?? estimateReadTime(post.content);
  const relatedPosts = (post.relatedSlugs ?? [])
    .map((relatedSlug) => getAllPosts().find((item) => item.slug === relatedSlug))
    .filter(Boolean);

  const jsonLd = [
    createBlogPostingJsonLd({
      title: post.title,
      description: post.description,
      slug: post.slug,
      date: post.date,
      author: post.author,
      category: post.category,
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
    ...(post.faq?.length ? [createFaqJsonLd(post.faq)] : []),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="bg-[radial-gradient(120%_70%_at_50%_0%,#FFE9CF_0%,#FFF6EC_55%)]">
        <Container className="mx-auto max-w-[760px] py-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{post.category ?? "Article"}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="mt-5 font-heading text-4xl leading-tight font-semibold tracking-tight text-ink md:text-[46px]">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-body md:text-xl">
            {post.description}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted-text">
            {post.author ? (
              <>
                <span className="font-semibold text-ink">{post.author}</span>
                <span>·</span>
              </>
            ) : null}
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span>·</span>
            <span>{readTime}</span>
          </div>
        </Container>
      </section>

      <Container className="mx-auto max-w-[760px] py-10">
        {post.quickAnswer ? (
          <div className="rounded-[22px] border border-border bg-card-bg p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
              Quick answer
            </p>
            <p className="mt-3 text-lg leading-relaxed text-body">
              {post.quickAnswer}
            </p>
          </div>
        ) : null}

        <article className="prose-blog mt-10">{content}</article>

        {post.faq?.length ? (
          <div className="mt-16">
            <h2 className="font-heading text-3xl font-semibold text-ink">
              Frequently asked questions
            </h2>
            <FaqAccordion items={post.faq} className="mt-6" />
          </div>
        ) : null}

        {post.author ? (
          <div className="mt-16 rounded-[22px] border border-border bg-card-bg p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">
              About the author
            </p>
            <p className="mt-3 font-heading text-2xl font-semibold text-ink">
              {post.author}
            </p>
            <p className="mt-2 text-base leading-relaxed text-body">
              Writing for DearMelody about journaling, memory, and the songs we
              keep.
            </p>
          </div>
        ) : null}

        {relatedPosts.length > 0 ? (
          <div className="mt-16">
            <h2 className="font-heading text-3xl font-semibold text-ink">
              Related posts
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {relatedPosts.map(
                (related) =>
                  related && (
                    <BlogPostCard key={related.slug} post={related} />
                  ),
              )}
            </div>
          </div>
        ) : null}

        <div className="mt-16 rounded-[28px] bg-[linear-gradient(150deg,#FF9A6B_0%,#FF7A59_100%)] p-8 text-center">
          <h2 className="font-heading text-3xl font-semibold text-cream">
            Turn your next entry into a melody
          </h2>
          <p className="mx-auto mt-3 max-w-md text-cream/90">
            Start writing for free and create the first song in your personal
            soundtrack.
          </p>
          <LinkButton
            href={siteConfig.appUrl}
            variant="cream"
            size="marketing"
            className="mt-5"
          >
            ♪ Start free
          </LinkButton>
        </div>
      </Container>

      <FinalCta />
    </>
  );
}
