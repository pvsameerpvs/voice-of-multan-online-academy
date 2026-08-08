"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GradientBackground } from "@/components/animations/gradient-background";
import { Badge } from "@/components/ui/badge";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  crumb: string;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  crumb,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-36 pb-16 md:pt-44 md:pb-24",
        className,
      )}
    >
      <GradientBackground variant="light" />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col items-center gap-5"
        >
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-medium text-muted">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-primary">{crumb}</span>
          </nav>
          <Badge variant="accent">{eyebrow}</Badge>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-dark sm:text-5xl lg:text-6xl">
            {title} {highlight && <span className="gradient-text">{highlight}</span>}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}