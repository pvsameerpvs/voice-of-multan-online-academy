"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Sparkles, Star } from "lucide-react";
import { GradientBackground } from "@/components/animations/gradient-background";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Floating } from "@/components/animations/motion";
import { Badge } from "@/components/ui/badge";

const EducationScene = dynamic(
  () => import("@/components/three/education-scene").then((m) => m.EducationScene),
  { ssr: false, loading: () => <LoadingFallback /> },
);

function LoadingFallback() {
  return (
    <div className="flex h-72 w-full items-center justify-center sm:h-full">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-secondary/20 border-t-secondary" />
    </div>
  );
}

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <GradientBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div {...fadeUp(0.05)}>
              <Badge variant="premium" className="mb-6 px-4 py-2 text-xs">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Admissions Open — 2026
              </Badge>
            </motion.div>

            <motion.h1
              {...fadeUp(0.12)}
              className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-dark sm:text-5xl lg:text-[3.5rem]"
            >
              Empowering Students Through{" "}
              <span className="gradient-text">Smart Digital Learning</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              Nursery to Grade 10 tuition across all subjects — plus specialty
              Mathematics, Computer Science and Digital Marketing programs
              delivered by certified educators with a personal touch.
            </motion.p>

            <motion.div
              {...fadeUp(0.28)}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticButton size="lg" asChild>
                <Link href="/contact#enroll" className="inline-flex items-center gap-2">
                  Enroll Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
              <MagneticButton variant="outline" size="lg" asChild>
                <Link href="/contact#demo" className="inline-flex items-center gap-2">
                  <PlayCircle className="h-4 w-4 text-secondary" />
                  Book Free Demo
                </Link>
              </MagneticButton>
            </motion.div>

            <motion.div
              {...fadeUp(0.36)}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <div className="flex -space-x-3">
                {["AR", "MB", "FN", "HS"].map((init, i) => (
                  <span
                    key={init}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-primary to-secondary text-[11px] font-bold text-white"
                    style={{ zIndex: 10 - i }}
                  >
                    {init}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                  <span className="ml-1.5 text-sm font-bold text-dark">4.9/5</span>
                </div>
                <p className="mt-0.5 text-xs text-muted">
                  Trusted by 500+ students & parents
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="relative hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 shadow-card-hover backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-primary/5" />
              <div className="relative h-[30rem] w-full">
                <EducationScene />
              </div>
              <Floating
                amount={12}
                duration={5}
                className="absolute right-6 top-8"
                delay={0.3}
              >
                <div className="glass flex items-center gap-3 rounded-2xl p-3.5 shadow-card-hover">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15">
                    <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-dark">Verified Curriculum</p>
                    <p className="text-xs text-muted">Aligned to national boards</p>
                  </div>
                </div>
              </Floating>
              <Floating
                amount={5}
                duration={6}
                className="absolute bottom-8 left-6"
                delay={0.9}
              >
                <div className="glass rounded-2xl p-3.5 shadow-card-hover">
                  <p className="font-display text-2xl font-bold text-primary">95%</p>
                  <p className="text-xs font-semibold text-muted">Student success</p>
                </div>
              </Floating>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.42)}
          className="mt-14 flex flex-wrap items-center justify-center gap-2.5 sm:justify-start"
        >
          {["Live 1-on-1 classes", "Certified teachers", "Progress reports", "Affordable plans"].map(
            (chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-200/80 bg-white/70 px-4 py-1.5 text-xs font-semibold text-ink shadow-sm backdrop-blur"
              >
                {chip}
              </span>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}