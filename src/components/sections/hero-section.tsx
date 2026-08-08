"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { cn } from "@/lib/utils";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const slides = [
  {
    image: "/cover1.jpg",
    eyebrow: "Admissions Open — 2026",
    alt: "Voice of Multan Online Academy — students learning online",
    title: "Smart Digital Learning for Every Student",
    description: "Nursery to Grade 10 tuition with certified educators — online, personal, affordable.",
  },
  {
    image: "/cover2.jpg",
    eyebrow: "Live 1-on-1 Classes",
    alt: "Voice of Multan Online Academy — live online classes",
    title: "Live 1-on-One Classes, Real Progress",
    description: "Personal attention in every lesson, with weekly progress reports for parents.",
  },
  {
    image: "/cover3.jpg",
    eyebrow: "Certified Educators",
    alt: "Voice of Multan Online Academy — certified teachers",
    title: "Learn From Certified Educators",
    description: "Experienced, certified teachers who make every lesson engaging and clear.",
  },
  {
    image: "/cover4.jpg",
    eyebrow: "Mathematics Specialist",
    alt: "Voice of Multan Online Academy — maths programs",
    title: "Master Mathematics with Confidence",
    description: "Specialist maths programs from early years to Grade 10.",
  },
  {
    image: "/cover5.jpg",
    eyebrow: "Computer Science",
    alt: "Voice of Multan Online Academy — computer science programs",
    title: "Computer Science for the Future",
    description: "Coding and computing skills for every age and level.",
  },
  {
    image: "/cover6.jpg",
    eyebrow: "Digital Marketing",
    alt: "Voice of Multan Online Academy — digital marketing programs",
    title: "Digital Marketing & Career Skills",
    description: "Professional digital skills with verified certificates.",
  },
  {
    image: "/cover7.jpg",
    eyebrow: "Trusted by Families",
    alt: "Voice of Multan Online Academy — happy students",
    title: "Loved by Students & Parents",
    description: "A personal learning experience trusted by 500+ students.",
  },
  {
    image: "/cover8.jpg",
    eyebrow: "Learn Anywhere",
    alt: "Voice of Multan Online Academy — modern learning environment",
    title: "A Modern Way to Learn",
    description: "Flexible online learning that fits your family's schedule.",
  },
  {
    image: "/cover9.jpg",
    eyebrow: "Specialty Programs",
    alt: "Voice of Multan Online Academy — premium digital programs",
    title: "Master Mathematics & Digital Skills",
    description: "Specialist Mathematics, Computer Science and Digital Marketing programs with 1-on-1 mentorship.",
  },
];

const AUTOPLAY_MS = 7000;

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export function HeroSection() {
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  const go = React.useCallback((index: number) => {
    setActive(((index % slides.length) + slides.length) % slides.length);
  }, []);

  React.useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => go(active + 1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [active, paused, go]);

  const slide = slides[active];

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative flex h-svh min-h-[520px] items-center overflow-hidden"
    >
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence initial={false}>
          <motion.div
            key={active}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            <motion.div
              className="h-full w-full"
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority
                sizes="100vw"
                quality={85}
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/60 to-ink/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -16, transition: { duration: 0.3, ease: EASE } }}
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {slide.eyebrow}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
            >
              {slide.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
            >
              {slide.description}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3">
              <MagneticButton size="lg" asChild>
                <Link href="/contact#enroll" className="inline-flex items-center gap-2">
                  Enroll Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 right-4 z-20 hidden flex-col items-end gap-4 sm:right-8 md:flex">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                i === active ? "w-7 bg-accent" : "w-1.5 bg-white/40 hover:bg-white/70",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}