import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Sparkles,
  Clock3,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "@/components/shared/social-icons";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/animations/motion";
import { GradientBackground } from "@/components/animations/gradient-background";
import { Card, CardContent } from "@/components/ui/card";
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
    lines: [siteConfig.phone],
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [siteConfig.contactEmail],
    href: `mailto:${siteConfig.contactEmail}`,
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    lines: ["Live chat · replies in minutes"],
    href: whatsappLink(),
    external: true,
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
      <PageHero
        eyebrow="Contact Us"
        title="We're Here to"
        highlight="Help You Succeed"
        description="Questions, enrolment or a free demo — reach out and our friendly team will respond within hours."
        crumb="Contact"
      />

      {/* Contact cards */}
      <section className="relative py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => {
              const inner = (
                <Card interactive className="h-full p-6">
                  <CardContent className="p-0">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-card">
                      <card.icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-dark">{card.title}</h3>
                    {card.lines.map((line) => (
                      <p key={line} className="mt-1 text-sm text-muted">
                        {line}
                      </p>
                    ))}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}