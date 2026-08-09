"use client";

import Link from "next/link";
import { ArrowUpRight, Clock, Layers, Signal } from "lucide-react";
import { courses } from "@/data/courses";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/animations/motion";
import { TiltCard } from "@/components/ui/tilt-card";
import { Badge } from "@/components/ui/badge";

export function CoursesSection() {
  return (
    <section className="relative overflow-hidden bg-white/40 py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Programs"
          title="Learn Anything,"
          highlight="Master Everything"
          description="From playful early years to professional digital skills — a complete learning pathway for every age and ambition."
        />

        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <StaggerItem key={course.id}>
              <TiltCard maxTilt={7} className="h-full">
                <Link
                  href="/courses"
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-card-hover"
                >
                  <div
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-1.5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r ${course.gradient}`}
                  />
                  <div
                    aria-hidden
                    className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br opacity-20 blur-3xl transition-all duration-700 group-hover:opacity-40 group-hover:scale-125 ${course.gradient}`}
                  />

                  {course.popular && (
                    <span className="absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-accent to-accent-dark px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-accent">
                      Most Popular
                    </span>
                  )}

                  <div className="relative flex items-center justify-between">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-card ring-4 ring-white transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                      style={{ backgroundColor: course.accent }}
                    >
                      <course.icon className="h-7 w-7" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>

                  <div className="relative mt-5">
                    <Badge variant="secondary" className="mb-3">
                      {course.category}
                    </Badge>
                    <h3 className="font-display text-xl font-bold tracking-tight text-dark">
                      {course.title}
                    </h3>
                    <p className="mt-2 min-h-10 text-sm leading-relaxed text-muted">
                      {course.shortDescription}
                    </p>
                  </div>

                  <div className="relative mt-6 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-xs font-semibold text-ink">
                      <Clock className="h-3.5 w-3.5 text-secondary" />
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-xs font-semibold text-ink">
                      <Layers className="h-3.5 w-3.5 text-secondary" />
                      {course.lessons} lessons
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-muted">
                      <Signal className="h-3.5 w-3.5 text-secondary" />
                      {course.level}
                    </span>
                  </div>

                  <div className="relative mt-6 flex items-center justify-between border-t border-slate-200/80 pt-4">
                    <span className="text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-primary-dark">
                      Explore program
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </StaggerItem>
          ))}

          <StaggerItem>
            <Link
              href="/courses"
              className="group flex h-full min-h-72 flex-col items-center justify-center rounded-3xl border-2 border-dashed border-secondary/40 bg-secondary/5 p-8 text-center transition-all duration-300 hover:border-secondary hover:bg-secondary/10"
            >
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-[0_10px_30px_rgba(19,74,124,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <ArrowUpRight className="h-6 w-6" />
              </span>
              <h3 className="font-display text-lg font-bold text-dark">
                Explore All Programs
              </h3>
              <p className="mt-2 max-w-xs text-sm text-muted">
                KG, Grade 1–10 tuition, Mathematics, Computer Science, Digital
                Marketing and professional certifications.
              </p>
            </Link>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}

const featuredCourses = [courses[0], courses[3], courses[4], courses[5], courses[6]];