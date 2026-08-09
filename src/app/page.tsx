import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustSection } from "@/components/sections/trust-section";
import { CoursesSection } from "@/components/sections/courses-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { AILearningSection } from "@/components/sections/ai-learning-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CertificateShowcase } from "@/components/sections/certificate-showcase";
import { CTABand } from "@/components/shared/cta-band";
import { generateMetadata as genMeta } from "@/lib/seo";
import { courses } from "@/data/courses";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = genMeta({
  title: siteConfig.name,
  description:
    "Premium online academy in Multan — Nursery to Grade 10 tuition, Mathematics specialist classes, Computer Science, Digital Marketing and professional certifications with verified certificates.",
  path: "/",
  keywords: [
    "online academy Multan",
    "nursery to grade 10 tuition",
    "mathematics classes",
    "computer science for kids",
    "digital marketing course",
    "online tuition Pakistan",
    "certification programs",
  ],
});

const schema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "Nursery to Grade 10 Tuition",
      description: "Premium online tuition across all subjects with certified teachers.",
      provider: { "@type": "EducationalOrganization", name: siteConfig.name, url: siteConfig.url },
      url: absoluteUrl("/courses"),
      hasCourseInstance: courses.map((c) => ({
        "@type": "CourseInstance",
        courseMode: "online",
        name: c.title,
        description: c.description,
        duration: c.duration,
      })),
    },
    {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "237",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schema }}
      />
      <HeroSection />
      <TrustSection />
      <CoursesSection />
      <WhyChooseUsSection />
      <AILearningSection />
      <CertificateShowcase />
      <TestimonialsSection />
      {/* <CTABand /> */}
    </>
  );
}