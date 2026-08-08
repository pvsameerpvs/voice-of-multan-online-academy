import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ayesha Raza",
    role: "Parent · Grade 5 student",
    quote:
      "My daughter's Maths grades went from average to the top of her class in one term. The online whiteboard classes feel personal and the weekly reports keep us fully informed.",
    rating: 5,
    avatarColor: "from-blue-400 to-indigo-500",
    initials: "AR",
    type: "parent",
  },
  {
    id: "t2",
    name: "Muhammad Bilal",
    role: "Computer Science Student",
    quote:
      "I learned coding from zero and built my first game project. The teachers explain every concept step by step — it never feels rushed even in a live online class.",
    rating: 5,
    avatarColor: "from-cyan-400 to-blue-500",
    initials: "MB",
    type: "student",
  },
  {
    id: "t3",
    name: "Fatima Noor",
    role: "Parent · KG2 student",
    quote:
      "The early-years classes are a blessing. My son loves the animated lessons and now reads short stories on his own. Wonderful, caring teachers who truly engage the children.",
    rating: 5,
    avatarColor: "from-pink-400 to-rose-500",
    initials: "FN",
    type: "parent",
  },
  {
    id: "t4",
    name: "Hamza Sheikh",
    role: "Grade 9 Student",
    quote:
      "The Mathematics Specialist classes completely changed how I see Maths. Speed techniques and past-paper practice made my board exams feel manageable. Highly recommended.",
    rating: 5,
    avatarColor: "from-violet-400 to-purple-500",
    initials: "HS",
    type: "student",
  },
  {
    id: "t5",
    name: "Sana Tariq",
    role: "Digital Marketing Graduate",
    quote:
      "I completed the Digital Marketing training and landed my first freelancing client within a month. Real projects, honest feedback, and a certificate I'm proud to show.",
    rating: 5,
    avatarColor: "from-amber-400 to-orange-500",
    initials: "ST",
    type: "student",
  },
  {
    id: "t6",
    name: "Kashif Mahmood",
    role: "Parent · Grade 8 student",
    quote:
      "Two children enrolled — both progressed beautifully. The academy's communication is excellent: schedule updates, progress alerts, and genuine care for every child.",
    rating: 5,
    avatarColor: "from-emerald-400 to-teal-500",
    initials: "KM",
    type: "parent",
  },
];

export const studentSuccessStories: Testimonial[] = [
  testimonials[1],
  testimonials[3],
  testimonials[4],
];