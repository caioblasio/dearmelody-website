import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-medium text-foreground">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Button href="/" className="mt-8">
        Back home
      </Button>
      <Link href="/contact" className="mt-4 text-sm text-primary hover:underline">
        Contact support
      </Link>
    </Container>
  );
}
