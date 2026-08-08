import type { Metadata } from "next";
import { Award, CheckCircle2, Search, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CTABand } from "@/components/shared/cta-band";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animations/motion";
import { GradientBackground } from "@/components/animations/gradient-background";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge as BadgeChip } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { generateMetadata as genMeta, reviewSchema } from "@/lib/seo";
import { certificates, certificateVerificationSteps } from "@/data/certificates";

export const metadata: Metadata = genMeta({
  title: "Certifications & Verification",
  description:
    "Explore professional certificates, course-completion credentials and student achievements at Voice of Multan Online Academy — with a secure verification system.",
  path: "/certifications",
});

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
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <Reveal key={cert.id} delay={0.05}>
                <Card
                  interactive
                  className="relative h-full overflow-hidden p-7"
                >
                  <div
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${cert.gradient}`}
                  />
                  <CardContent className="relative p-0">
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
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
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
          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            {certificateVerificationSteps.map((step) => (
              <StaggerItem key={step.step}>
                <Card
                  interactive
                  className="relative h-full overflow-hidden p-7"
                >
                  <CardContent className="relative p-0">
                    <span className="font-display text-4xl font-bold gradient-text">
                      {step.step}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold text-dark">
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
                of any Voice of Multan certificate simply by entering its unique
                number below.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Uniquely numbered, tamper-resistant credentials",
                  "Shareable directly on LinkedIn or your CV",
                  "Instant authenticity check — no login required",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Reveal>
              <div className="glass relative overflow-hidden rounded-[2rem] p-8 shadow-card-hover sm:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
                    <Search className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-dark">Certificate Checker</p>
                    <p className="text-xs text-muted">Demo — email our team for official verification</p>
                  </div>
                </div>
                <form className="flex gap-2.5">
                  <Input
                    aria-label="Certificate number"
                    placeholder="e.g. VOMA-2026-0128"
                    className="bg-white"
                  />
                  <Button type="submit" variant="secondary">
                    Verify
                  </Button>
                </form>
                <p className="mt-4 flex items-center gap-2 text-xs text-muted">
                  Our team confirms verification requests via email or WhatsApp within one working day.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <MagneticButton asChild>
                    <Link href="/contact">Request a Verification</Link>
                  </MagneticButton>
                  <MagneticButton variant="outline" asChild>
                    <Link href="/contact#enroll">Get Certified</Link>
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}