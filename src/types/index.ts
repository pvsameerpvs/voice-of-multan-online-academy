import type { LucideIcon } from "lucide-react";

export type CourseCategory =
  | "Nursery"
  | "KG1"
  | "KG2"
  | "Grade 1-10"
  | "Mathematics"
  | "Computer Science"
  | "Digital Marketing";

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: CourseCategory;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  duration: string;
  level: string;
  lessons: number;
  features: string[];
  popular?: boolean;
  gradient: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatarColor: string;
  initials: string;
  type: "student" | "parent";
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialty: string;
  avatarColor: string;
  initials: string;
}

export interface Certificate {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  skills: string[];
  icon: LucideIcon;
  gradient: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: { label: string; description: string; href: string; icon: LucideIcon }[];
}
