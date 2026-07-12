import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description: "Terms of service for Dear Melody.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        align="left"
        title="Terms of Service"
        description="Last updated: July 12, 2026"
      />
      <div className="prose prose-neutral mt-12 max-w-3xl space-y-6 text-muted">
        <p>
          This is placeholder legal copy for the Dear Melody marketing site.
          Replace it with your final terms before launch.
        </p>
        <section>
          <h2 className="font-display text-2xl font-medium text-foreground">
            Use of the service
          </h2>
          <p className="mt-3 leading-relaxed">
            By using Dear Melody, you agree to provide accurate information and
            to use the service only for lawful purposes.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium text-foreground">
            Intellectual property
          </h2>
          <p className="mt-3 leading-relaxed">
            Melodies, branding, and site content are protected by applicable
            intellectual property laws unless otherwise stated in your plan.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium text-foreground">
            Contact
          </h2>
          <p className="mt-3 leading-relaxed">
            Questions about these terms can be sent to hello@dearmelody.com.
          </p>
        </section>
      </div>
    </Container>
  );
}
