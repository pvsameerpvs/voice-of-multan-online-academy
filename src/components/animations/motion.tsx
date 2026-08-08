"use client";

import * as React from "react";
import {
  motion,
  type Variants,
  type MotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  blur?: boolean;
  scale?: number;
  as?: "div" | "section" | "ul" | "span" | "li" | "h1" | "h2" | "h3" | "p";
} & Omit<MotionProps, "children">;

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  y = 40,
  blur = false,
  scale,
  as = "div",
  ...props
}: RevealProps) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={cn(className)}
      initial={{ opacity: 0, y, scale, filter: blur ? "blur(12px)" : "blur(0px)" }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: EASE }}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASE },
  },
};

export function StaggerGroup({
  children,
  className,
  ...props
}: { children: React.ReactNode; className?: string } & Omit<MotionProps, "children">) {
  return (
    <motion.div
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: { children: React.ReactNode; className?: string } & Omit<MotionProps, "children">) {
  return (
    <motion.div className={cn(className)} variants={itemVariants} {...props}>
      {children}
    </motion.div>
  );
}

export function Floating({
  children,
  className,
  duration = 6,
  amount = 16,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  amount?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      animate={{ y: [0, -amount, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}