"use client";

import { whyChooseUs } from "@/data/site-content";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/animations/motion";
import { Card, CardContent } from "@/components/ui/card";

export function WhyChooseUsSection() {
  return (
    <section className="relative bg-gradient-to-b from-white/40 to-transparent py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="An Experience Parents"
          highlight="And Students Love"
          description="We combine international teaching standards with genuine care — so every child gets the support they deserve."
        />

        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((feature) => (
            <StaggerItem key={feature.title}>
              <Card
                interactive
                className="h-full overflow-hidden border-slate-200/80 p-6"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-secondary/10 blur-2xl transition-all duration-500 group-hover:bg-secondary/20" />
                <CardContent className="relative p-0">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-[0_8px_20px_rgba(19,74,124,0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <feature.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}