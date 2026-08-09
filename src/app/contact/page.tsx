import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "@/components/shared/social-icons";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/animations/motion";
import { GradientBackground } from "@/components/animations/gradient-background";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/sections/contact-form";
import { EnrollmentForm } from "@/components/sections/enrollment-form";
import { DemoBookingForm } from "@/components/sections/demo-booking-form";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { generateMetadata as genMeta, faqSchema } from "@/lib/seo";
import { faqs } from "@/data/team-and-faqs";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = genMeta({
  title: "Contact Us",
  description:
    "Get in touch with Voice of Multan Online Academy — book a free demo, ask about enrollment, or reach us on WhatsApp. We reply within hours.",
  path: "/contact",
});

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [siteConfig.phone, "Mon–Sat · 9am–8pm"],
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [siteConfig.contactEmail, "Replies within 24 hours"],
    href: `mailto:${siteConfig.contactEmail}`,
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    lines: ["Live chat · replies in minutes"],
    href: whatsappLink(),
    external: true,
    featured: true,
  },
  {
    icon: MapPin,
    title: "Location",
    lines: [
      `${siteConfig.address.street}, ${siteConfig.address.city}`,
      `${siteConfig.address.region}, ${siteConfig.address.country}`,
    ],
    href: undefined,
  },
];

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: siteConfig.social.facebook },
  { icon: InstagramIcon, label: "Instagram", href: siteConfig.social.instagram },
  { icon: YoutubeIcon, label: "YouTube", href: siteConfig.social.youtube },
  { icon: LinkedinIcon, label: "LinkedIn", href: siteConfig.social.linkedin },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema(faqs) }}
      />

      {/* Image hero */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
        <Image
          src="/cover2.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-background"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex items-center justify-center gap-1.5 text-xs font-medium text-muted"
          >
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary">Contact</span>
          </nav>
          <Badge variant="accent" className="mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            We reply within hours
          </Badge>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-dark sm:text-5xl lg:text-6xl">
            We&apos;re Here to{" "}
            <span className="gradient-text">Help You Succeed</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Questions, enrolment or a free demo — reach out and our friendly
            team will respond within hours.
          </p>
          <a
            href={whatsappLink(
              "Hi Voice of Multan Online Academy! I'd like to talk about enrolling.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(16,185,129,0.45)] transition-transform hover:scale-[1.03]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat on WhatsApp
            <span className="ml-1 h-1.5 w-1.5 animate-pulse rounded-full bg-white/80" />
          </a>
        </div>
      </section>

      {/* Contact cards */}
      <section className="relative pb-8 md:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => {
              const inner = (
                <Card
                  interactive
                  className={
                    card.featured
                      ? "relative h-full overflow-hidden border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6"
                      : "h-full p-6"
                  }
                >
                  <div
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-1 ${
                      card.featured
                        ? "bg-gradient-to-r from-emerald-400 to-green-600"
                        : "bg-gradient-to-r from-primary to-secondary"
                    }`}
                  />
                  <CardContent className="p-0">
                    <span
                      className={
                        card.featured
                          ? "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-card"
                          : "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-card"
                      }
                    >
                      <card.icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {card.title}
                    </h3>
                    {card.lines.map((line) => (
                      <p key={line} className="mt-1 text-sm text-muted">
                        {line}
                      </p>
                    ))}
                    <p
                      className={
                        card.featured
                          ? "mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700"
                          : "mt-3 hidden"
                      }
                    >
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                      Chat now
                    </p>
                  </CardContent>
                </Card>
              );
              return card.href ? (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="block h-full"
                >
                  {inner}
                </a>
              ) : (
                <div key={card.title} className="h-full">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enroll + Demo forms */}
      <section id="enroll" className="relative bg-white/40 py-16 md:py-24">
        <GradientBackground variant="light" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get Started"
            title="Enroll or Book a"
            highlight="Free Demo Today"
            description="Fill the form below and our admissions team will reach out to schedule everything."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <Card className="relative h-full overflow-hidden p-8">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />
                <CardContent className="p-0">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-dark">Enrollment Form</h3>
                      <p className="text-xs text-muted">Start your child&apos;s journey with us</p>
                    </div>
                  </div>
                  <EnrollmentForm />
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="relative h-full overflow-hidden p-8">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent via-secondary to-primary" />
                <CardContent className="p-0">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15">
                      <Clock3 className="h-5 w-5 text-accent-dark" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-dark">Book a Free Demo</h3>
                      <p className="text-xs text-muted">Try a class before you decide</p>
                    </div>
                  </div>
                  <DemoBookingForm />
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact form + FAQ */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="General Enquiry"
                title="Send Us a Message"
                description="Questions about courses, fees, schedules or anything else — we'd love to hear from you."
                className="mb-8"
              />
              <Card className="p-8 lg:p-10">
                <CardContent className="p-0">
                  <ContactForm />
                  <div className="mt-8 flex flex-wrap gap-2.5 border-t border-slate-100 pt-6">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary hover:text-white"
                      >
                        <s.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <SectionHeading
                align="left"
                eyebrow="FAQ"
                title="Frequently Asked"
                highlight="Questions"
                description="Quick answers to the things families ask us most."
                className="mb-8"
              />
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
                <p className="flex items-center gap-2 text-sm font-bold text-emerald-800">
                  <WhatsAppIcon className="h-4 w-4" />
                  Prefer chat? We&apos;re online now.
                </p>
                <p className="mt-1 text-sm text-emerald-700/80">
                  Skip the form and message us directly — our team usually
                  replies within minutes.
                </p>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(16,185,129,0.4)] transition-transform hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Start WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}