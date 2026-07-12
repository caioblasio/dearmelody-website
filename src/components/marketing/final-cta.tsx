import Image from "next/image";
import { LinkButton } from "@/components/marketing/link-button";
import { siteConfig } from "@/lib/site";

type FinalCtaProps = {
  title?: string;
  description?: string;
  cta?: string;
};

export function FinalCta({
  title = "What will your life sound like?",
  description = "Start writing and create the first song in your personal soundtrack. Your first melody is free.",
  cta = "♪ Create my first melody",
}: FinalCtaProps) {
  return (
    <section className="bg-cream py-10 pb-24">
      <div className="mx-auto max-w-[1180px] px-8">
        <div className="flex flex-col items-center gap-5 overflow-hidden rounded-[32px] bg-[linear-gradient(150deg,#FF9A6B_0%,#FF7A59_100%)] px-8 py-16 text-center md:px-12">
          <Image
            src="/melo-songs-ready.svg"
            alt="Melo celebrating"
            width={150}
            height={144}
            className="drop-shadow-[0_14px_22px_rgba(58,46,69,0.2)]"
          />
          <h2 className="max-w-2xl font-heading text-4xl leading-tight font-semibold tracking-tight text-cream md:text-[52px]">
            {title}
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-cream/90 md:text-xl">
            {description}
          </p>
          <LinkButton
            href={siteConfig.appUrl}
            variant="cream"
            size="marketing"
            className="mt-1"
          >
            {cta}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
