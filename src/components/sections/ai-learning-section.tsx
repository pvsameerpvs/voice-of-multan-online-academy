"use client";

import { motion } from "framer-motion";
import { BrainCircuit, ChevronRight, Sparkles } from "lucide-react";
import { aiFeatures } from "@/data/site-content";
import { GradientBackground } from "@/components/animations/gradient-background";
import { StaggerGroup, StaggerItem } from "@/components/animations/motion";
import { Badge } from "@/components/ui/badge";

export function AILearningSection() {
  return (
    <section className="relative overflow-hidden bg-dark py-16 text-white md:py-24">
      <GradientBackground variant="dark" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              AI-Powered Learning
            </Badge>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              The Digital Classroom{" "}
              <span className="gradient-text">Built for Every Learner</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/60">
              Live classes enhanced with adaptive technology — personalized
              study plans, instant doubt solving and progress analytics that
              keep every student on track.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-primary">
                  <BrainCircuit className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold">Your AI Study Assistant</p>
                  <p className="text-xs text-white/50">
                    Always on — ready to explain, quiz and revise with you.
                  </p>
                </div>
                <span className="ml-auto flex items-center gap-1 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Online
                </span>
              </div>

              <div className="mt-4 space-y-2.5">
                {[
                  "Break down any concept step-by-step",
                  "Generate practice quizzes from weak areas",
                  "Track progress with smart analytics",
                ].map((line, i) => (
                  <div
                    key={line}
                    className="flex items-center gap-2.5 text-sm text-white/70"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <ChevronRight className="h-4 w-4 shrink-0 text-accent" />
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <StaggerGroup className="grid gap-5 sm:grid-cols-2">
            {aiFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors duration-300 hover:border-secondary/50 hover:bg-white/10"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/15 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
                    <feature.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-bold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}