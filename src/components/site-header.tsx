import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Button } from "./button";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl font-medium text-foreground">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href="/contact" className="hidden sm:inline-flex">
          Get started
        </Button>
      </Container>
    </header>
  );
}
