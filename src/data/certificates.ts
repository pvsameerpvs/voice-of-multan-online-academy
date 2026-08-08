import { FileCode2, Megaphone, Sigma, Palette, BarChart3, MonitorSmartphone } from "lucide-react";
import type { Certificate } from "@/types";

export const certificates: Certificate[] = [
  {
    id: "c-nursery",
    title: "Early Years Achievement Certificate",
    category: "Nursery · KG",
    description:
      "Awarded to our youngest learners on completing structured nursery readiness and foundational skills milestones.",
    duration: "Term-based",
    level: "Foundation",
    skills: ["Early literacy", "Number sense", "Motor skills", "Confidence"],
    icon: MonitorSmartphone,
    gradient: "from-pink-400 to-rose-500",
  },
  {
    id: "c-tuition",
    title: "Grade Completion Certificate",
    category: "Grade 1–10",
    description:
      "Recognizes the successful completion of a full academic year with our tuition program — validated by internal assessments.",
    duration: "Annual",
    level: "Primary → Secondary",
    skills: ["Syllabus mastery", "Exam readiness", "Consistency"],
    icon: BarChart3,
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    id: "c-math",
    title: "Mathematics Specialist Certificate",
    category: "Mathematics",
    description:
      "Earned after mastering problem-solving, mental math and exam-ready techniques in our specialist track.",
    duration: "One term onward",
    level: "Competency based",
    skills: ["Problem solving", "Speed math", "Analytics"],
    icon: Sigma,
    gradient: "from-violet-400 to-purple-500",
  },
  {
    id: "c-cs",
    title: "Computer Science Certificate",
    category: "Computer Science",
    description:
      "Validates coding fundamentals, logic and digital citizenship — with a project portfolio for each graduate.",
    duration: "Course-based",
    level: "Beginner +",
    skills: ["Coding", "Logic", "Digital safety"],
    icon: FileCode2,
    gradient: "from-cyan-400 to-sky-500",
  },
  {
    id: "c-marketing",
    title: "Professional Digital Marketing Certificate",
    category: "Digital Marketing",
    description:
      "A job-ready professional certificate covering social media strategy, content creation and real client projects.",
    duration: "10–12 weeks",
    level: "Professional",
    skills: ["Strategy", "Content", "Client work"],
    icon: Megaphone,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    id: "c-professional",
    title: "Professional Certification Program",
    category: "Career Track",
    description:
      "Advanced industry-aligned certifications for professional growth, freelancing and global opportunities.",
    duration: "12+ weeks",
    level: "Professional",
    skills: ["Freelancing", "Portfolio", "Global standards"],
    icon: Palette,
    gradient: "from-emerald-400 to-teal-500",
  },
];

export const certificateVerificationSteps = [
  {
    step: "01",
    title: "Complete Your Program",
    description: "Finish the course and pass the final assessment to qualify.",
  },
  {
    step: "02",
    title: "Receive Your Certificate",
    description: "A uniquely numbered certificate is issued with your name.",
  },
  {
    step: "03",
    title: "Share & Verify",
    description:
      "Anyone can verify authenticity using your certificate number.",
  },
];

export const academies = [
  { name: "Coursera Standards", icon: "🎓" },
  { name: "Khan Academy Learning", icon: "🧠" },
  { name: "Cambridge Alignment", icon: "📘" },
  { name: "Udemy Business Grade", icon: "💼" },
  { name: "Future of Work", icon: "🚀" },
] as const;