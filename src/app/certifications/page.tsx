import type { Metadata } from "next";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CTABand } from "@/components/shared/cta-band";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animations/motion";
import { GradientBackground } from "@/components/animations/gradient-background";
import { Card, CardContent } from "@/components/ui/card";
import { Badge as BadgeChip } from "@/components/ui/badge";
import { WhatsAppIcon } from "@/components/shared/social-icons";
import { CertificateVerifier } from "@/components/sections/certificate-verifier";
import { whatsappLink } from "@/lib/site";
import { generateMetadata as genMeta, reviewSchema } from "@/lib/seo";
import { certificates, certificateVerificationSteps } from "@/data/certificates";

export const metadata: Metadata = genMeta({
  title: "Certifications & Verification",
  description:
    "Explore professional certificates, course-completion credentials and student achievements at Voice of Multan Online Academy — with a secure verification system.",
  path: "/certifications",
});

const stepGradients = [
  "from-primary to-secondary",
  "from-accent to-accent-dark",
  "from-emerald-400 to-teal-500",
];

const verificationPerks = [
  "Uniquely numbered, tamper-resistant credentials",
  "Shareable directly on LinkedIn or your CV",
  "Instant authenticity check via WhatsApp — no login required",
];

export default function CertificationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: reviewSchema() }}
      />
      <PageHero
        eyebrow="Certifications"
        title="Credentials That Open"
        highlight="Doors of the Future"
        description="Course-completion and professional certificates — verified, shareable and recognized by employers, universities and clients."
        crumb="Certifications"
      />

      {/* Certificates grid */}
      <section className="relative py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <StaggerItem key={cert.id}>
                <Card
                  interactive
                  className="group relative flex h-full flex-col overflow-hidden p-7"
                >
                  <div
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${cert.gradient} transition-all duration-500 group-hover:h-2`}
                  />
                  <div
                    aria-hidden
                    className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-secondary/10 blur-2xl transition-colors duration-500 group-hover:bg-secondary/20"
                  />
                  <CardContent className="relative flex flex-1 flex-col p-0">
                    <div className="mb-5 flex items-center justify-between">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-card ${cert.gradient}`}
                      >
                        <cert.icon className="h-6 w-6" />
                      </span>
                      <BadgeChip variant="outline">{cert.category}</BadgeChip>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                      <Award className="h-3.5 w-3.5" />
                      {cert.level}
                      <span className="text-slate-300">·</span>
                      {cert.duration}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-bold text-dark">
                      {cert.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {cert.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full bg-primary/5 px-2.5 py-1 text-[11px] font-semibold text-primary"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={whatsappLink(
                        `Hi Voice of Multan Online Academy! I'm interested in the ${cert.title} certificate (${cert.category}). Please share the details.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex h-11 items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600 hover:text-white hover:shadow-[0_10px_24px_rgba(16,185,129,0.4)]"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Enquire on WhatsApp
                    </a>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-16 md:py-24">
        <GradientBackground variant="light" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="Three Steps to a Verified"
            highlight="Certificate"
            description="From classroom to credential — earn a certificate that's verifiable anywhere."
          />
          <StaggerGroup className="relative grid gap-6 md:grid-cols-3">
            <div
              aria-hidden
              className="absolute left-[16%] right-[16%] top-14 hidden border-t-2 border-dashed border-secondary/30 md:block"
            />
            {certificateVerificationSteps.map((step, i) => (
              <StaggerItem key={step.step}>
                <Card interactive className="relative h-full overflow-hidden p-7 text-center">
                  <CardContent className="relative p-0">
                    <span
                      className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br font-display text-lg font-bold text-white shadow-card ${stepGradients[i]}`}
                    >
                      {step.step}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-dark">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Verification */}
      <section id="verify" className="relative bg-white/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <BadgeChip variant="secondary" className="mb-4">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                Secure Verification
              </BadgeChip>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl">
                Verify Any Certificate{" "}
                <span className="gradient-text">in Seconds</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                Employers, universities and clients can confirm the authenticity
                of any Voice of Multan certificate simply by sending its unique
                number on WhatsApp — no forms, no login.
              </p>
              <ul className="mt-6 space-y-3">
                {verificationPerks.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-ink"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Reveal>
              <CertificateVerifier />
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}