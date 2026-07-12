"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkButton } from "@/components/marketing/link-button";
import { Container } from "@/components/container";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Wordmark } from "@/components/wordmark";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/82 backdrop-blur-[14px]">
      <Container className="flex h-[68px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.svg" alt="DearMelody logo" width={34} height={34} />
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {siteConfig.nav.map((item) => {
            const isExternal = item.href.startsWith("http");
            const isActive = !isExternal && pathname.startsWith(item.href);
            const className = cn(
              "text-base font-medium transition-colors",
              isActive ? "text-coral" : "text-body hover:text-coral",
            );

            if (isExternal) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={className}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link key={item.href} href={item.href} className={className}>
                {item.label}
              </Link>
            );
          })}
          <LinkButton href={siteConfig.appUrl} variant="gradient" size="nav">
            Start free
          </LinkButton>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <button
                  type="button"
                  className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-body"
                >
                  Menu
                </button>
              }
            />
            <SheetContent side="right" className="bg-cream">
              <SheetHeader>
                <SheetTitle>
                  <Wordmark />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                {siteConfig.nav.map((item) =>
                  item.href.startsWith("http") ? (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-body"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-body"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
                <LinkButton
                  href={siteConfig.appUrl}
                  variant="gradient"
                  size="marketing"
                  className="mt-2"
                >
                  Start free
                </LinkButton>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
