import { BlogPostCard } from "@/components/blog-post-card";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { getAllPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Stories, guides, and ideas from the Dear Melody team about music, memory, and meaningful keepsakes.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container className="py-20">
      <SectionHeading
        eyebrow="Blog"
        title="Notes on music and memory"
        description="Ideas for turning life's moments into melodies you'll want to revisit."
      />
      {posts.length > 0 ? (
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-center text-muted">
          No posts yet. Add an MDX file to{" "}
          <code className="rounded bg-surface-muted px-2 py-1 text-sm">
            src/content/blog/
          </code>
          .
        </p>
      )}
    </Container>
  );
}
