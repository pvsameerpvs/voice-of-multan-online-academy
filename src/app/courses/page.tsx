import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Layers, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CTABand } from "@/components/shared/cta-band";
import { StaggerGroup, StaggerItem } from "@/components/animations/motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generateMetadata as genMeta, courseSchemas } from "@/lib/seo";
import { courses, courseCategories } from "@/data/courses";
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
          <Tabs defaultValue="all">
            <TabsList className="mx-auto flex flex-wrap justify-center">
              {courseCategories.map((cat) => (
                <TabsTrigger key={cat} value={cat}>
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>

            {courseCategories.map((cat) => {
              const visible =
                cat === "All"
                  ? courses
                  : courses.filter((c) => c.category === cat);
              return (
                <TabsContent key={cat} value={cat}>
                  <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {visible.map((course) => (
                      <StaggerItem key={course.id}>
                        <Card
                          interactive
                          className="relative flex h-full flex-col overflow-hidden p-6"
                        >
                          <div
                            aria-hidden
                            className={`absolute inset-0 bg-gradient-to-br opacity-60 transition-opacity duration-500 group-hover:opacity-100 ${course.gradient}`}
                          />
                          <CardContent className="relative flex flex-1 flex-col p-0">
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
                              {course.popular && (
                                <Badge variant="accent" pulse>
                                  Popular
                                </Badge>
                              )}
                            </div>

                            <Badge variant="outline" className="mb-3 w-fit">
                              {course.category}
                            </Badge>
                            <h3 className="font-display text-xl font-bold text-dark">
                              {course.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted">
                              {course.shortDescription}
                            </p>

                            <ul className="mt-4 space-y-2">
                              {course.features.slice(0, 4).map((f) => (
                                <li
                                  key={f}
                                  className="flex items-start gap-2 text-xs font-medium text-ink"
                                >
                                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                                  {f}
                                </li>
                              ))}
                            </ul>

                            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-200/80 pt-4 text-xs font-semibold text-ink">
                              <span className="inline-flex items-center gap-1.5">
                                <Clock className="h-3.5 w-3.5 text-secondary" />
                                {course.duration}
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <Layers className="h-3.5 w-3.5 text-secondary" />
                                {course.lessons} lessons
                              </span>
                              <span className="ml-auto rounded-full bg-primary/5 px-2.5 py-1 text-[11px] font-bold text-primary">
                                {course.level}
                              </span>
                            </div>

                            <div className="mt-5 flex gap-2.5">
                              <Button asChild className="flex-1">
                                <Link href="/contact#enroll">Enroll</Link>
                              </Button>
                              <Button variant="outline" asChild className="flex-1">
                                <Link href="/contact#demo">Free Demo</Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </TabsContent>
              );
            })}
          </Tabs>
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