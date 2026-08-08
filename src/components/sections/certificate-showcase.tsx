"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, ArrowRight } from "lucide-react";
import { certificates } from "@/data/certificates";
import { SectionHeading } from "@/components/shared/section-heading";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { StaggerGroup, StaggerItem } from "@/components/animations/motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CertificateShowcase() {
  const featured = certificates.slice(0, 3);

  return (
    <section className="relative bg-gradient-to-b from-white/40 to-transparent py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Certifications"
            title="Earn Credentials That"
            highlight="Mean Something"
            description="Course-completion and professional certificates with unique verification numbers — share them on LinkedIn or show them to employers and clients."
            className="mb-8 lg:mb-0"
          />

          <StaggerGroup className="grid gap-6 sm:grid-cols-1">
            {featured.map((cert) => (
              <StaggerItem key={cert.id}>
                <Card
                  interactive
                  className="relative flex items-center gap-5 overflow-hidden p-5"
                >
                  <div
                    className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${cert.gradient}`}
                  />
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-card ${cert.gradient}`}
                  >
                    <cert.icon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="px-2.5 py-0.5 text-[11px]">
                        {cert.category}
                      </Badge>
                    </div>
                    <h3 className="mt-1.5 font-display text-base font-bold text-dark">
                      {cert.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted">
                      {cert.description}
                    </p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200/80 bg-white/70 p-8 backdrop-blur sm:flex-row sm:p-10"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
              <ShieldCheck className="h-6 w-6 text-emerald-600" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-dark">
                Verified Certificate System
              </h3>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">
                Every certificate is uniquely numbered so anyone — including
                employers and universities — can verify its authenticity
                instantly.
              </p>
            </div>
          </div>
          <MagneticButton variant="outline" asChild className="shrink-0">
            <Link href="/certifications" className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4" />
              View Certifications
              <ArrowRight className="h-4 w-4" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}