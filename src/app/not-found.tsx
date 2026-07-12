import Link from "next/link";
import { Container } from "@/components/container";
import { LinkButton } from "@/components/marketing/link-button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">
        404
      </p>
      <h1 className="mt-4 font-heading text-4xl font-semibold text-ink">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-body">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <LinkButton href="/" variant="gradient" size="marketing" className="mt-8">
        Back home
      </LinkButton>
      <Link href="/contact" className="mt-4 text-sm font-semibold text-plum">
        Contact support
      </Link>
    </Container>
  );
}
