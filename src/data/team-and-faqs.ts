import type { TeamMember, FAQ } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    id: "t1",
    name: "Prof. Adeel Khan",
    role: "Founder & Director of Studies",
    bio: "20+ years in K-12 education leadership, former head of faculty at a leading Multan institution, and a passionate advocate for digital learning.",
    specialty: "Curriculum & Teacher Training",
    avatarColor: "from-blue-500 to-indigo-600",
    initials: "AK",
  },
  {
    id: "t2",
    name: "Ms. Saima Javed",
    role: "Head of Early Years",
    specialty: "Nursery · KG1 · KG2",
    bio: "Early childhood education specialist who designs our play-based programs and coaches parents in reading readiness at home.",
    avatarColor: "from-pink-500 to-rose-500",
    initials: "SJ",
  },
  {
    id: "t3",
    name: "Mr. Usman Tariq",
    role: "Computer Science Lead",
    specialty: "Coding & Logic",
    bio: "Software engineer turned educator. He makes programming magical for kids and adults through project-based learning.",
    avatarColor: "from-cyan-500 to-blue-600",
    initials: "UT",
  },
  {
    id: "t4",
    name: "Ms. Rabia Ahmed",
    role: "Head of Digital Marketing",
    specialty: "Digital Marketing & Careers",
    bio: "Freelancer and social media strategist helping learners turn digital skills into real, marketable income.",
    avatarColor: "from-amber-500 to-orange-500",
    initials: "RA",
  },
  {
    id: "t5",
    name: "Mr. Faisal Qureshi",
    role: "Science & English Faculty",
    specialty: "Grade 1–10 · All Subjects",
    bio: "Patient, energetic teacher known for explaining science and English with stories, experiments and real-world examples.",
    avatarColor: "from-violet-500 to-purple-600",
    initials: "FQ",
  },
  {
    id: "t6",
    name: "Ms. Hira Zafar",
    role: "Student Success Coach",
    specialty: "Care & Progress",
    bio: "Your family's single point of contact. She coordinates schedules, assessments and keeps parents informed weekly.",
    avatarColor: "from-emerald-500 to-teal-600",
    initials: "HZ",
  },
];

export const faqs: FAQ[] = [
  {
    question: "How do online classes work?",
    answer:
      "You schedule sessions with our friendly team, then join live classes through a secure link. Teachers use a virtual whiteboard, share lessons, and run live quizzes. Sessions are recorded where helpful so students can revisit and parents can watch progress.",
  },
  {
    question: "Which grades and subjects do you cover?",
    answer:
      "We cover Nursery, KG1, KG2 and Grades 1 to 10 across all major subjects including Mathematics (specialist track), Computer Science, Digital Marketing, English, Urdu, Science and more.",
  },
  {
    question: "How are the fees structured?",
    answer:
      "Fees are affordable and structured per subject or per package. You can choose weekly, monthly, or term-based plans and pay easily via bank transfer or digital wallets. Contact us for a personalized quote.",
  },
  {
    question: "Do you offer a free demo class?",
    answer:
      "Yes! We offer a free demo session so your child can experience the teaching style before committing. Just book a demo and we'll organize everything that follows.",
  },
  {
    question: "Will my child receive a certificate?",
    answer:
      "Absolutely. Every course includes a completion certificate, and our professional programs award verified certificates that can be shared on LinkedIn or shown to employers and clients.",
  },
  {
    question: "How do parents track progress?",
    answer:
      "We provide weekly progress summaries, monthly milestone reports, and an open line via WhatsApp. You'll always know exactly how your child is performing.",
  },
  {
    question: "Which devices do I need?",
    answer:
      "Any device — laptop, tablet, or smartphone — with internet works. Classes work great right in the browser, no software installation required.",
  },
];