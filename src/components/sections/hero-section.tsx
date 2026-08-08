"use client";

import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, PlayCircle, Star } from "lucide-react";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { cn } from "@/lib/utils";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const slides = [
  {
    image: "/cover1.jpg",
    alt: "Voice of Multan Online Academy — students learning online",
    title: "Smart Digital Learning for Every Student",
    description: "Nursery to Grade 10 tuition with certified educators — online, personal, affordable.",
  },
  {
    image: "/cover9.jpg",
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
              {active === 0 ? "Admissions Open — 2026" : "Specialty Programs"}
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

            <motion.div variants={itemVariants} className="mt-9 flex items-center gap-2 text-sm text-white/80">
              
        
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