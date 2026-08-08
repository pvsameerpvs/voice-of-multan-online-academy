"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { GradientBackground } from "@/components/animations/gradient-background";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Reveal } from "@/components/animations/motion";

export function CTABand() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary-light to-dark px-6 py-16 text-center shadow-[0_30px_80px_rgba(19,74,124,0.45)] md:px-16 md:py-20">
          <GradientBackground variant="dark" showGrid={false} />
          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Admissions Open
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Give Your Child the
              <span className="block text-accent">Competitive Edge?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
              Book a free demo class today and experience the Voice of Multan
              Online Academy difference — personal attention, expert teachers
              and measurable results.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <MagneticButton variant="accent" size="lg" asChild>
                <Link href="/contact#enroll" className="inline-flex items-center gap-2">
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
              <MagneticButton variant="glass-dark" size="lg" asChild>
                <Link href="/contact#demo">Book Free Demo</Link>
              </MagneticButton>
            </div>
            <p className="mt-6 text-xs text-white/50">
              No registration fees · Free demo session · Flexible schedules
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}