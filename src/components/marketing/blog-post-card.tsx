import Link from "next/link";
import { WaveformBars } from "@/components/marketing/waveform-bars";
import { Card, CardContent } from "@/components/ui/card";
import { formatPostDate, type BlogPostMeta } from "@/lib/blog";

type BlogPostCardProps = {
  post: BlogPostMeta;
};

const gradients = [
  "linear-gradient(150deg,#FF9A6B,#8B5BB0)",
  "linear-gradient(150deg,#5B3B8C,#FF9A6B)",
  "linear-gradient(150deg,#FFD66B,#FF7A59)",
  "linear-gradient(150deg,#F2A0A0,#FF9A6B)",
  "linear-gradient(150deg,#9BC8B8,#5B3B8C)",
  "linear-gradient(150deg,#8B5BB0,#5B3B8C)",
];

export function BlogPostCard({ post }: BlogPostCardProps) {
  const gradient = gradients[post.slug.length % gradients.length];

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden rounded-[22px] border-border bg-card-bg py-0 shadow-none transition-colors group-hover:border-peach">
        <div
          className="flex h-36 items-end p-4"
          style={{ background: gradient }}
        >
          <WaveformBars count={6} heightClass="h-8" barClassName="w-1" />
        </div>
        <CardContent className="flex flex-col gap-3 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-coral">
            {post.category ?? "DearMelody"}
          </p>
          <h3 className="font-heading text-2xl font-semibold text-ink">
            {post.title}
          </h3>
          <p className="text-base leading-relaxed text-body">
            {post.description}
          </p>
          <p className="mt-auto text-sm text-muted-text">
            {formatPostDate(post.date)}
            {post.readTime ? ` · ${post.readTime}` : ""}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
