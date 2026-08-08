import {
  GraduationCap,
  Sigma,
  Code2,
  Megaphone,
  Baby,
  BookOpen,
  Award,
  PhoneCall,
  MessageSquare,
  Users,
  Sparkles,
} from "lucide-react";
import type { NavigationItem } from "@/types";

export const navigation: NavigationItem[] = [
  {
    label: "Academy",
    href: "/about",
    children: [
      { label: "About Us", description: "Our story, mission & vision", href: "/about", icon: Users },
      { label: "Teaching Philosophy", description: "How we teach & why", href: "/about#philosophy", icon: Sparkles },
      { label: "Our Team", description: "Meet the educators", href: "/about#team", icon: GraduationCap },
    ],
  },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "Early Years", description: "Nursery · KG1 · KG2", href: "/courses#early-years", icon: Baby },
      { label: "Grade 1–10 Tuition", description: "Complete syllabus support", href: "/courses#grade-1-10", icon: BookOpen },
      { label: "Mathematics Specialist", description: "Master problem solving", href: "/courses#mathematics", icon: Sigma },
      { label: "Computer Science", description: "Coding for the future", href: "/courses#computer-science", icon: Code2 },
      { label: "Digital Marketing", description: "Professional skills", href: "/courses#digital-marketing", icon: Megaphone },
    ],
  },
  {
    label: "Certifications",
    href: "/certifications",
  },
  {
    label: "Contact",
    href: "/contact",
    children: [
      { label: "Contact Us", description: "Get in touch", href: "/contact", icon: PhoneCall },
      { label: "Book Free Demo", description: "Try a class for free", href: "/contact#demo", icon: Sparkles },
      { label: "FAQ", description: "Common questions", href: "/contact#faq", icon: MessageSquare },
      { label: "Verification", description: "Check a certificate", href: "/certifications#verify", icon: Award },
    ],
  },
];