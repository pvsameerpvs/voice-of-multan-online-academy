import {
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  MonitorSmartphone,
  Award,
  FileCheck,
  Brain,
  User,
  Users,
  GraduationCap,
  TrendingUp,
  Globe,
} from "lucide-react";
import type { Stat } from "@/types";

export const stats: Stat[] = [
  {
    id: "students",
    value: 500,
    suffix: "+",
    label: "Students",
    description: "Learning with us today",
    icon: Users,
  },
  {
    id: "teachers",
    value: 10,
    suffix: "+",
    label: "Expert Teachers",
    description: "Certified subject specialists",
    icon: GraduationCap,
  },
  {
    id: "success",
    value: 95,
    suffix: "%",
    label: "Success Rate",
    description: "Students achieving goals",
    icon: TrendingUp,
  },
  {
    id: "certificates",
    value: 100,
    suffix: "+",
    label: "Certificates",
    description: "Awarded to learners",
    icon: Award,
  },
];

export const whyChooseUs = [
  {
    icon: GraduationCap,
    title: "Expert Teachers",
    description:
      "Certified subject specialists with proven classroom and online experience — every teacher is hand-picked and continuously trained.",
  },
  {
    icon: User,
    title: "Personal Attention",
    description:
      "Small batches and one-on-one sessions mean your child is never just a number. Every learner gets an individual learning plan.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digital Classroom",
    description:
      "Live classes with digital whiteboards, instant quizzes, revision recordings and progress tracking your family can follow.",
  },
  {
    icon: ShieldCheck,
    title: "Affordable Learning",
    description:
      "International-standard quality education at a price every family can afford — with flexible weekly payment options.",
  },
  {
    icon: Award,
    title: "Certifications",
    description:
      "Recognized course-completion and professional certificates that build confidence and strengthen future opportunities.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted & Caring",
    description:
      "Parents trust us with their children's future. Weekly reports and open communication keep every family fully in the loop.",
  },
];

export const aiFeatures = [
  {
    icon: Brain,
    title: "AI-Assisted Study Plans",
    description:
      "Personalized lesson roadmaps that adapt to your child's pace, strengths and areas for improvement.",
  },
  {
    icon: Sparkles,
    title: "Smart Doubt Solving",
    description:
      "Instant, step-by-step answers for homework questions — with teacher review so nothing is ever wrong.",
  },
  {
    icon: MonitorSmartphone,
    title: "Live Online Classroom",
    description:
      "Real-time classes with shared whiteboards, polls and breakout practice — engaging from the very first minute.",
  },
  {
    icon: Globe,
    title: "Personalized Education",
    description:
      "Every child learns differently. Our technology adapts content, quizzes and revision around each individual student.",
  },
];

export const learningApproach = [
  {
    icon: Brain,
    title: "Concept-First Learning",
    description:
      "We teach the 'why' before the 'how', so students build real understanding instead of memorizing shortcuts.",
  },
  {
    icon: Sparkles,
    title: "Personal Live Classes",
    description:
      "Interactive whiteboards and live quizzes keep attention high and classes genuinely engaging.",
  },
  {
    icon: FileCheck,
    title: "Measurable Progress",
    description:
      "Weekly check-ins, structured assessments and a clear improvement roadmap for every learner.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description:
      "Lessons follow international education standards while staying perfectly aligned to local boards.",
  },
];