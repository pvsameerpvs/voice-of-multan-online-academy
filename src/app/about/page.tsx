import type { Metadata } from "next";
import { MapPin, Heart, Eye, Compass } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CTABand } from "@/components/shared/cta-band";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animations/motion";
import { GradientBackground } from "@/components/animations/gradient-background";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { generateMetadata as genMeta, faqSchema } from "@/lib/seo";
import { teamMembers, faqs } from "@/data/team-and-faqs";
import { learningApproach } from "@/data/site-content";

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

function AboutSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: faqSchema(faqs.slice(0, 4)) }}
    />
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
                <div className="glass relative z-10 overflow-hidden rounded-[2rem] p-8 shadow-card-hover sm:p-10">
                  <p className="font-display text-5xl font-bold leading-none text-primary">
                    {new Date().getFullYear() - 2022}
                    <span className="text-accent">+</span>
                  </p>
                  <p className="mt-1 text-sm font-semibold text-muted">Years of digital teaching experience</p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-muted">
                    <MapPin className="h-4 w-4 text-secondary" />
                    Jinnah Colony, Multan, Pakistan — teaching students worldwide
                  </div>
                </div>
                <div className="absolute -right-6 -top-6 -z-0 h-32 w-32 rounded-3xl bg-accent/20 blur-2xl" />
                <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-3xl bg-secondary/20 blur-2xl" />
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
                  measured results have earned the trust of hundreds of families.
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
            {learningApproach.map((item) => (
              <StaggerItem key={item.title}>
                <Card
                  interactive
                  className="h-full overflow-hidden p-6"
                >
                  <div className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 rounded-full bg-secondary/10 blur-2xl transition-colors duration-500 group-hover:bg-secondary/20" />
                  <CardContent className="relative p-0">
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-primary">
                      <item.icon className="h-5 w-5" />
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
                    <div
                      className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br font-display text-xl font-bold text-white shadow-card ${member.avatarColor}`}
                    >
                      {member.initials}
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