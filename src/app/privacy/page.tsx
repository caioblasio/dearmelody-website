import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Dear Melody.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Container className="py-20">
      <SectionHeading
        align="left"
        title="Privacy Policy"
        description="Last updated: July 12, 2026"
      />
      <div className="prose prose-neutral mt-12 max-w-3xl space-y-6 text-muted">
        <p>
          This is placeholder legal copy for the Dear Melody marketing site.
          Replace it with your final privacy policy before launch.
        </p>
        <section>
          <h2 className="font-display text-2xl font-medium text-foreground">
            Information we collect
          </h2>
          <p className="mt-3 leading-relaxed">
            We may collect contact details you submit through forms, basic
            analytics about site usage, and technical information such as browser
            type and device category.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium text-foreground">
            How we use information
          </h2>
          <p className="mt-3 leading-relaxed">
            Information is used to respond to inquiries, improve the website,
            and communicate about Dear Melody products and services.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium text-foreground">
            Contact
          </h2>
          <p className="mt-3 leading-relaxed">
            Questions about this policy can be sent to hello@dearmelody.com.
          </p>
        </section>
      </div>
    </Container>
  );
}
