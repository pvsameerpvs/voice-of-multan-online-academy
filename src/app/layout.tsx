import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { organizationSchema } from "@/lib/seo";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { SmoothScroll } from "@/components/shared/smooth-scroll";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { StickyMobileCTA } from "@/components/shared/sticky-mobile-cta";
import { TooltipProvider } from "@/components/ui/tooltip";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "online academy",
    "online academy Multan",
    "nursery to grade 10 tuition",
    "mathematics classes Pakistan",
    "computer science training",
    "digital marketing course Pakistan",
    "online tuition",
    "certification programs",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#134A7C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationSchema() }}
        />
      </head>
      <body className="font-sans antialiased">
        <TooltipProvider delayDuration={150}>
          <SmoothScroll>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <StickyMobileCTA />
            <WhatsAppButton />
          </SmoothScroll>
        </TooltipProvider>
      </body>
    </html>
  );
}