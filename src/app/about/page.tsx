import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Compass,
  Eye,
  GraduationCap,
  Heart,
  Quote,
  ShieldCheck,
  Star,
} from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CTABand } from "@/components/shared/cta-band";
import {
  Floating,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/animations/motion";
import { GradientBackground } from "@/components/animations/gradient-background";
import { AnimatedNumber } from "@/components/animations/animated-number";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { generateMetadata as genMeta, faqSchema } from "@/lib/seo";
import { teamMembers, faqs } from "@/data/team-and-faqs";
import { learningApproach, stats } from "@/data/site-content";
import { studentSuccessStories } from "@/data/testimonials";

export const metadata: Metadata = genMeta({
  title: "About Us",
  description:
    "Discover the story, mission and teaching philosophy behind Voice of Multan Online Academy — a modern digital academy from Multan, Pakistan.",
  path: "/about",
});

const values = [
  {
    icon: Compass,
    title: "Mission",
    text: "To make international-standard education accessible and affordable to every child — through technology, expert teachers and genuine care.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "A world where every learner, regardless of location, has access to world-class teaching and the confidence to achieve their dreams.",
  },
  {
    icon: Heart,
    title: "Our Commitment",
    text: "Measurable progress, honest communication and a warm relationship with every family we serve.",
  },
];

const trustPoints = [
  "Certified teachers, hand-picked and continuously trained",
  "Small batches and 1-on-1 attention — never just a number",
  "Weekly progress reports with open WhatsApp communication",
  "Affordable, transparent fees with flexible payment plans",
];

function AboutSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: faqSchema(faqs.slice(0, 4)) }}
    />
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutSchema />
      <PageHero
        eyebrow="About the Academy"
        title="Raising the Standard of"
        highlight="Online Education"
        description="From Multan to the world — an academy built on quality teaching, modern technology and a genuine passion for student success."
        crumb="About Us"
      />

      {/* Story */}
      <section className="relative py-16 md:py-24">
        <GradientBackground variant="light" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-2xl"
                />
                <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/70 shadow-card-hover">
                  <Image
                    src="/cover7.jpg"
                    alt="Students learning with Voice of Multan Online Academy"
                    width={1024}
                    height={768}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent"
                  />
                </div>

                <Floating className="absolute -right-4 top-8 z-20 hidden sm:block md:-right-8" duration={6} amount={12}>
                  <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-card-hover">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-dark">500+ Students</p>
                      <p className="text-[11px] text-muted">Learning with us today</p>
                    </div>
                  </div>
                </Floating>

                <Floating className="absolute -bottom-5 -left-4 z-20 hidden sm:block md:-left-6" duration={7} amount={10} delay={0.8}>
                  <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-card-hover">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-dark text-white">
                      <ShieldCheck className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-dark">95% Success Rate</p>
                      <p className="text-[11px] text-muted">Measured semester results</p>
                    </div>
                  </div>
                </Floating>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                align="left"
                eyebrow="Our Story"
                title="A Modern Academy With a"
                highlight="Timeless Mission"
                description="Voice of Multan Online Academy began with a simple observation: brilliant young minds in Multan deserved access to the same world-class learning opportunities as students in the biggest cities. We brought together certified teachers, engaging technology and a caring culture to close that gap."
              />
              <Reveal delay={0.1}>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Today we proudly teach students from Nursery to Grade 10, plus
                  professionals advancing in Computer Science and Digital
                  Marketing. Our small learning groups, personal attention and
                  measured results have earned the trust of hundreds of
                  families.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <MagneticButton asChild>
                    <Link href="/courses">Explore Our Programs</Link>
                  </MagneticButton>
                  <MagneticButton variant="outline" asChild>
                    <Link href="/contact">Talk to Our Team</Link>
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative overflow-hidden bg-dark py-16 md:py-24">
        <GradientBackground variant="dark" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.id}>
                <div className="text-center">
                  <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-secondary backdrop-blur">
                    <stat.icon className="h-6 w-6" />
                  </span>
                  <p className="font-display text-4xl font-bold text-white lg:text-5xl">
                    <AnimatedNumber end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm font-bold text-accent">
                    {stat.label}
                  </p>
                  <p className="text-xs text-white/50">{stat.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Mission / Vision / Commitment */}
      <section className="relative bg-white/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why We Exist"
            title="Guided by Purpose,"
            highlight="Driven by Results"
          />
          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <Card interactive className="h-full p-7">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-card">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <CardContent className="p-0">
                    <h3 className="font-display text-xl font-bold text-dark">{v.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">{v.text}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Trust */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <GradientBackground variant="light" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Trusted by Families"
                title="A Learning Partner"
                highlight="Parents Rely On"
                description="We earn trust the old-fashioned way — through results, honesty and daily care. Here's what families rely on us for."
              />
              <Reveal delay={0.1}>
                <ul className="mt-6 space-y-3.5">
                  {trustPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
                        <BadgeCheck className="h-4 w-4" />
                      </span>
                      <p className="text-sm leading-relaxed text-ink">{point}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-3">
                    <Stars />
                    <p className="text-sm font-semibold text-dark">
                      5/5 rated by parents
                    </p>
                  </div>
                  <div className="h-8 w-px bg-slate-200" />
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted">
                    <ShieldCheck className="h-4 w-4 text-secondary" />
                    Verified Academy
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-secondary/20 via-transparent to-accent/20 blur-2xl"
                />
                <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/70 shadow-card-hover">
                  <Image
                    src="/cover3.jpg"
                    alt="Certified educators at Voice of Multan Online Academy"
                    width={1024}
                    height={768}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center gap-3 rounded-2xl bg-white/85 p-4 backdrop-blur">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
                      <Quote className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-dark leading-snug">
                        “Wonderful, caring teachers who truly engage the children.”
                      </p>
                      <p className="mt-0.5 text-xs text-muted">
                        Fatima Noor — Parent of a KG2 student
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-white/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Success Stories"
            title="Real Learners,"
            highlight="Real Results"
          />
          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            {studentSuccessStories.map((t) => (
              <StaggerItem key={t.id}>
                <Card interactive className="h-full p-7">
                  <CardContent className="p-0">
                    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent-dark">
                      <Quote className="h-5 w-5" />
                    </span>
                    <Stars />
                    <p className="mt-4 text-sm leading-relaxed text-ink">
                      “{t.quote}”
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white ${t.avatarColor}`}
                      >
                        {t.initials}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-dark">{t.name}</p>
                        <p className="text-xs text-muted">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Teaching philosophy */}
      <section id="philosophy" className="relative py-16 md:py-24">
        <GradientBackground variant="light" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Teaching Philosophy"
            title="How We Teach"
            highlight="and Why It Works"
            description="Education isn't about memorizing — it's about understanding, confidence and curiosity that lasts a lifetime."
          />
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {learningApproach.map((item, i) => (
              <StaggerItem key={item.title}>
                <Card interactive className="h-full overflow-hidden p-6">
                  <div className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 rounded-full bg-secondary/10 blur-2xl transition-colors duration-500 group-hover:bg-secondary/20" />
                  <CardContent className="relative p-0">
                    <span className="mb-4 flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-primary">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-2xl font-bold text-slate-200">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <h3 className="font-display text-base font-bold text-dark">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Learning paths */}
      <section className="relative bg-white/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Learning Paths"
            title="One Academy,"
            highlight="Many Journeys"
            description="Explore the programs that fit every age and goal."
          />
          <Reveal>
            <Tabs defaultValue="nursery" className="mx-auto max-w-3xl">
              <TabsList className="mx-auto flex flex-wrap justify-center">
                <TabsTrigger value="nursery">Early Years</TabsTrigger>
                <TabsTrigger value="grades">Grade 1–10</TabsTrigger>
                <TabsTrigger value="skills">Digital Skills</TabsTrigger>
              </TabsList>
              <TabsContent value="nursery">
                <Card className="p-6">
                  <CardContent className="space-y-3 p-0">
                    <p className="text-sm leading-relaxed text-muted">
                      Nursery, KG1 and KG2 programs introduce children to a world of stories, numbers
                      and discovery — taught with play, animation and patient, loving teachers.
                    </p>
                    <Badge variant="accent">Play-based · Ages 3–6</Badge>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="grades">
                <Card className="p-6">
                  <CardContent className="space-y-3 p-0">
                    <p className="text-sm leading-relaxed text-muted">
                      Complete syllabus coverage across all subjects with structured revision, past
                      papers and exam preparation for national boards.
                    </p>
                    <Badge variant="accent">All subjects · Board aligned</Badge>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="skills">
                <Card className="p-6">
                  <CardContent className="space-y-3 p-0">
                    <p className="text-sm leading-relaxed text-muted">
                      Specialist Mathematics, Computer Science and Digital Marketing tracks build
                      real, future-proof skills with projects and professional certificates.
                    </p>
                    <Badge variant="accent">Project-based · Certified</Badge>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="relative py-16 md:py-24">
        <GradientBackground variant="light" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Meet the Team"
            title="The Educators Behind"
            highlight="Every Success"
            description="Dedicated teachers and specialists who treat every student as part of our family."
          />
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <StaggerItem key={member.id}>
                <Card interactive className="h-full overflow-hidden p-6 text-center">
                  <CardContent className="p-0">
                    <div className="mx-auto mb-4 w-fit rounded-full p-1 ring-2 ring-secondary/30">
                      <div
                        className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br font-display text-xl font-bold text-white shadow-card ${member.avatarColor}`}
                      >
                        {member.initials}
                      </div>
                    </div>
                    <h3 className="font-display text-lg font-bold text-dark">{member.name}</h3>
                    <p className="mt-0.5 text-sm font-semibold text-primary">{member.role}</p>
                    <Badge variant="outline" className="mt-2.5">{member.specialty}</Badge>
                    <p className="mt-3.5 text-sm leading-relaxed text-muted">{member.bio}</p>
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