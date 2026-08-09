"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCheck,
  Send,
  Sparkles,
} from "lucide-react";
import { aiFeatures } from "@/data/site-content";
import { StaggerGroup, StaggerItem } from "@/components/animations/motion";
import { Button } from "@/components/ui/button";

const assistantSteps = [
  "Breaks down any concept step-by-step",
  "Generates practice quizzes from weak areas",
  "Tracks progress with smart analytics",
];

export function AILearningSection() {
  return (
    <section className="relative overflow-hidden bg-dark py-20 text-white md:py-28">
      <Image
        src="/cover8.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={90}
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-dark/85 via-dark/70 to-dark/95"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/40"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerGroup className="mx-auto max-w-2xl text-center">
          <StaggerItem>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              AI-Powered Learning
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[3rem]">
              The Digital Classroom{" "}
              <span className="bg-gradient-to-r from-white via-secondary to-accent bg-clip-text text-transparent">
                Built for Every Learner
              </span>
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Live classes enhanced with adaptive technology — personalized
              study plans, instant doubt solving and progress analytics that
              keep every student on track.
            </p>
          </StaggerItem>
        </StaggerGroup>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto mt-14 max-w-2xl"
        >
          <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.08] shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-primary">
                <Bot className="h-5 w-5 text-white" />
                <span
                  aria-hidden
                  className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-dark bg-emerald-400"
                />
              </span>
              <div>
                <p className="text-sm font-bold">AI Study Assistant</p>
                <p className="text-xs text-white/60">Ready to explain and quiz anytime</p>
              </div>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Online
              </span>
            </div>

            <div className="space-y-4 px-5 py-6">
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-secondary/30 px-4 py-3 text-sm leading-relaxed">
                Can you explain photosynthesis simply?
              </div>

              <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.09] px-4 py-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {["Light", "Water", "CO₂", "Glucose"].map((chip, i) => (
                    <span
                      key={chip}
                      className="rounded-full bg-secondary/25 px-2.5 py-1 text-[11px] font-semibold text-secondary"
                      style={{ opacity: 1 - i * 0.12 }}
                    >
                      {chip}
                    </span>
                  ))}
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                    <CheckCheck className="h-3.5 w-3.5" />
                    Explained + quiz ready
                  </span>
                </div>
              </div>

              <div className="grid gap-2">
                {assistantSteps.map((step, i) => (
                  <div
                    key={step}
                    className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.06] px-3.5 py-2.5 text-sm text-white/75"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-secondary to-primary text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 px-5 py-4">
              <div className="flex flex-wrap gap-2">
                {["Make me a quiz", "Explain fractions", "Weekly review"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="inline-flex cursor-default items-center rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80"
                    >
                      {chip}
                    </span>
                  ),
                )}
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3">
                <span className="flex-1 truncate text-sm text-white/40">
                  Ask anything, anytime…
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-primary text-white">
                  <Send className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aiFeatures.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="h-full rounded-2xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-md transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.12]">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-primary text-white">
                  <feature.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-bold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-14 flex flex-col items-center justify-center gap-4"
        >
          <p className="text-center text-sm text-white/70">
            Ready to experience smarter learning with your child?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="glass-dark" size="lg" asChild>
              <Link href="/#courses">Explore Courses</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact#enroll">
                Book a Free Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}