import type { Metadata } from "next";
import { siteConfig } from "./site";

interface GenerateArgs {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
}

export function generateMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  keywords = [],
  ogImage,
}: GenerateArgs): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [
      "online academy Multan",
      "nursery to grade 10 tuition",
      "mathematics classes",
      "computer science training",
      "digital marketing course",
      "online tuition Pakistan",
      ...keywords,
    ],
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/* ----------------------------- JSON-LD schemas ---------------------------- */

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.contactEmail,
  telephone: siteConfig.phone,
  description: siteConfig.description,
  logo: `${siteConfig.url}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.countryCode,
  },
  sameAs: Object.values(siteConfig.social),
  areaServed: ["PK", "Worldwide"],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Nursery to Grade 10 Tuition",
      category: "Education",
    },
    {
      "@type": "Offer",
      name: "Computer Science Training",
      category: "Education",
    },
    {
      "@type": "Offer",
      name: "Digital Marketing Training",
      category: "Education",
    },
  ],
};

export function organizationSchema() {
  return JSON.stringify(businessSchema);
}

export function courseSchemas(
  courses: { name: string; description: string; url: string; duration: string }[],
) {
  const data = [
    businessSchema,
    ...courses.map((course) => ({
      "@context": "https://schema.org",
      "@type": "Course",
      name: course.name,
      description: course.description,
      provider: {
        "@type": "EducationalOrganization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      url: course.url,
      offers: {
        "@type": "Offer",
        category: "Paid enroll",
        priceCurrency: "PKR",
      },
      totalTime: course.duration,
    })),
  ];
  return JSON.stringify(data);
}

export function faqSchema(
  faqs: { question: string; answer: string }[],
): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  });
}

export function reviewSchema(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "237",
      bestRating: "5",
      worstRating: "1",
    },
    review: {
      "@type": "Review",
      author: { "@type": "Person", name: "Parent — Multan" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
  });
}