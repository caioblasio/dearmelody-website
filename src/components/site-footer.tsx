import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-ink">
      <Container className="flex flex-col gap-10 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.svg" alt="DearMelody logo" width={34} height={34} />
              <span className="font-heading text-[22px] font-semibold text-cream">
                Dear<span className="text-coral-light">Melody</span>
              </span>
            </div>
            <p className="mt-3.5 text-[15px] leading-relaxed text-cream/60">
              Write your story. Hear how it feels. A private soundtrack for the
              moments that shaped you.
            </p>
          </div>

          <FooterColumn title="Product" links={siteConfig.footer.product} />
          <FooterColumn title="Explore" links={siteConfig.footer.explore} />
          <FooterColumn title="Company" links={siteConfig.footer.company} />
        </div>

        <div className="flex flex-col gap-3 border-t border-cream/12 pt-7 text-sm text-cream/45 md:flex-row md:items-center md:justify-between">
          <span>
            © {year} DearMelody. Made for the moments worth keeping.
          </span>
          <span>{siteConfig.disclaimer}</span>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="font-heading text-sm font-semibold text-cream">{title}</p>
      <ul className="mt-3 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[15px] text-cream/65 transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
