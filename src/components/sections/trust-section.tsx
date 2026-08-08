"use client";

import { stats } from "@/data/site-content";
import { AnimatedNumber } from "@/components/animations/animated-number";
import { StaggerGroup, StaggerItem } from "@/components/animations/motion";

export function TrustSection() {
  return (
    <section className="relative mx-auto -mt-6 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-dark via-primary to-primary-light px-6 py-12 shadow-[0_24px_80px_rgba(13,53,90,0.4)] sm:px-10 md:px-14 md:py-14">
        <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.5]" />

        <StaggerGroup className="relative grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-10">
          {stats.map((stat) => (
            <StaggerItem key={stat.id}>
              <div className="group text-center lg:border-l lg:border-white/10 lg:first:border-l-0">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent ring-1 ring-white/15 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-accent group-hover:text-primary-dark">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
                  <AnimatedNumber end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1.5 text-sm font-semibold text-white/90">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-white/50">{stat.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}