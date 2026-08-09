import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Layers, Signal } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CTABand } from "@/components/shared/cta-band";
import { StaggerGroup, StaggerItem } from "@/components/animations/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generateMetadata as genMeta, courseSchemas } from "@/lib/seo";
import { courses } from "@/data/courses";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = genMeta({
  title: "Courses & Programs",
  description:
    "Explore Nursery, KG1, KG2, Grade 1–10 tuition, Mathematics specialist classes, Computer Science training and Digital Marketing programs at Voice of Multan Online Academy.",
  path: "/courses",
});

const schema = courseSchemas(
  courses.map((c) => ({
    name: c.title,
    description: c.description,
    url: absoluteUrl("/courses"),
    duration: c.duration,
  })),
);

export default function CoursesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schema }}
      />
      <PageHero
        eyebrow="Courses & Programs"
        title="Find the Perfect Program"
        highlight="for Every Learner"
        description="Early years, complete school tuition, specialist Maths and career-ready digital skills — all delivered live by certified teachers."
        crumb="Courses"
      />

      <section className="relative py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <StaggerItem key={course.id} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-card-hover">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={840}
                      height={630}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                    <span
                      className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-card ring-2 ring-white/40"
                      style={{ backgroundColor: course.accent }}
                    >
                      <course.icon className="h-5 w-5" />
                    </span>
                    {course.popular && (
                      <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-accent">
                        Popular
                      </span>
                    )}
                    <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
                        <Clock className="h-3.5 w-3.5" />
                        {course.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
                        <Layers className="h-3.5 w-3.5" />
                        {course.lessons} lessons
                      </span>
                    </div>
                  </div>

                  <Card className="flex flex-1 flex-col rounded-none border-0 p-5">
                    <CardContent className="flex flex-1 flex-col p-0">
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <Badge variant="secondary">{course.category}</Badge>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted">
                          <Signal className="h-3.5 w-3.5 text-secondary" />
                          {course.level}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold tracking-tight text-dark">
                        {course.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                        {course.shortDescription}
                      </p>
                      <div className="mt-5 flex gap-2.5 pt-4">
                        <Button asChild className="flex-1">
                          <Link href="/contact#enroll">Enroll</Link>
                        </Button>
                        <Button variant="outline" asChild className="flex-1">
                          <Link href="/contact#demo">Free Demo</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Compare strip */}
      <section className="relative bg-white/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What's Included"
            title="Every Program Comes With"
            highlight="Our Complete Support"
          />
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Live Interactive Classes",
                text: "Real-time sessions with digital whiteboards, polls and instant feedback.",
              },
              {
                title: "Recorded Revisions",
                text: "Every class is recorded so students can revisit lessons anytime.",
              },
              {
                title: "Progress Tracking",
                text: "Weekly reports and milestone assessments parents can follow.",
              },
              {
                title: "Certificates & More",
                text: "Completion certificates, exam prep and career guidance included.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card interactive className="h-full p-6">
                  <CardContent className="p-0">
                    <h3 className="font-display text-base font-bold text-dark">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CTABand />
    </>
  );
}