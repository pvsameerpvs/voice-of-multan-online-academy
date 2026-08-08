"use client";

import { stats } from "@/data/site-content";
import { AnimatedNumber } from "@/components/animations/animated-number";
import { StaggerGroup, StaggerItem } from "@/components/animations/motion";

export function TrustSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <StaggerGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <StaggerItem key={stat.id}>
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-card-hover">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                <AnimatedNumber end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1.5 text-sm font-semibold text-ink">{stat.label}</p>
              <p className="mt-1 text-xs text-muted">{stat.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}