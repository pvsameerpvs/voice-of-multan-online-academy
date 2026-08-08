"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Layers } from "lucide-react";
import { courses } from "@/data/courses";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/animations/motion";
import { TiltCard } from "@/components/ui/tilt-card";
import { Badge } from "@/components/ui/badge";

export function CoursesSection() {
  return (
    <section className="relative bg-white/40 py-16 md:py-24">
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
              <TiltCard maxTilt={8} className="h-full">
                <Link
                  href="/courses"
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-500 hover:border-secondary/40 hover:shadow-card-hover"
                >
                  <div
                    aria-hidden
                    className={`absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-500 group-hover:opacity-100 ${course.gradient}`}
                  />
                  <div className="relative">
                    <div className="relative -mx-6 -mt-6 mb-5 overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={840}
                        height={500}
                        className="aspect-[21/12.5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/20 to-transparent" />
                    </div>
                    <div className="-mt-8 mb-4 flex items-end justify-between px-1">
                      <span
                        className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-card ring-4 ring-white"
                        style={{ backgroundColor: course.accent }}
                      >
                        <course.icon className="h-7 w-7" />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>

                    <Badge variant="outline" className="mb-3">
                      {course.category}
                    </Badge>
                    <h3 className="font-display text-xl font-bold text-dark">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {course.shortDescription}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-200/80 pt-4 text-xs font-semibold text-ink">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-secondary" />
                        {course.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5 text-secondary" />
                        {course.lessons} lessons
                      </span>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </StaggerItem>
          ))}

          <StaggerItem>
            <Link
              href="/courses"
              className="group flex h-full min-h-72 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-secondary/40 bg-secondary/5 p-8 text-center transition-all duration-300 hover:border-secondary hover:bg-secondary/10"
            >
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_10px_30px_rgba(19,74,124,0.35)] transition-transform duration-300 group-hover:scale-110">
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