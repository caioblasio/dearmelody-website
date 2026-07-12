import Link from "next/link";
import { BlogPostCard } from "@/components/marketing/blog-post-card";
import { Container } from "@/components/container";
import { EyebrowPill } from "@/components/marketing/eyebrow-pill";
import { FinalCta } from "@/components/marketing/final-cta";
import { SectionHeading } from "@/components/section-heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LinkButton } from "@/components/marketing/link-button";
import { JsonLd } from "@/components/json-ld";
import { getAllPosts } from "@/lib/blog";
import { createBlogJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "The DearMelody blog: honest, practical notes on journaling habits, journaling through big life changes, memory, and turning your story into music.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <JsonLd data={createBlogJsonLd()} />

      <section className="bg-[radial-gradient(110%_80%_at_50%_0%,#FFE9CF_0%,#FFF6EC_62%)]">
        <Container className="flex flex-col items-center gap-5 py-16 text-center md:py-20">
          <EyebrowPill>The blog</EyebrowPill>
          <h1 className="max-w-3xl font-heading text-5xl leading-tight font-semibold tracking-tight text-ink md:text-[58px]">
            Notes on journaling, memory, and music
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-body md:text-xl">
            Honest, practical writing for people who want their story to last.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <Container className="flex flex-col gap-12">
          {featured ? (
            <div className="grid gap-6 overflow-hidden rounded-[28px] border border-border bg-card-bg md:grid-cols-[1.1fr_0.9fr]">
              <div
                className="min-h-[280px] bg-[linear-gradient(150deg,#FFB27A,#FFD66B)]"
                aria-hidden
              />
              <div className="flex flex-col justify-center gap-4 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                  Featured
                </p>
                <h2 className="font-heading text-3xl font-semibold text-ink">
                  {featured.title}
                </h2>
                <p className="text-lg leading-relaxed text-body">
                  {featured.description}
                </p>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="text-base font-semibold text-plum"
                >
                  Read the article →
                </Link>
              </div>
            </div>
          ) : null}

          {rest.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-text">
              No posts yet. Add an MDX file to{" "}
              <code className="rounded bg-chip-bg px-2 py-1 text-sm">
                src/content/blog/
              </code>
              .
            </p>
          )}
        </Container>
      </section>

      <section className="border-t border-border bg-card-bg py-20 md:py-24">
        <Container className="mx-auto max-w-xl text-center">
          <SectionHeading
            eyebrow="Stay close"
            eyebrowColor="plum"
            title="Get new posts in your inbox"
            description="Occasional notes on journaling, memory, and music. No spam."
          />
          <form className="mt-8 flex flex-col gap-3 text-left">
            <Label htmlFor="newsletter-email" className="sr-only">
              Email
            </Label>
            <Input
              id="newsletter-email"
              type="email"
              placeholder="you@example.com"
              className="h-12 rounded-full border-border bg-cream px-5"
            />
            <LinkButton href="/contact" variant="gradient" size="marketing">
              Join the list
            </LinkButton>
          </form>
        </Container>
      </section>

      <FinalCta
        title="Ready to turn your next entry into a melody?"
        description="Start writing for free and create the first song in your personal soundtrack."
        cta="♪ Start free"
      />
    </>
  );
}
