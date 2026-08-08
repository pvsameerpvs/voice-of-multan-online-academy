"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  className?: string;
  variant?: "light" | "dark";
  showGrid?: boolean;
}

export function GradientBackground({
  className,
  variant = "light",
  showGrid = true,
}: GradientBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      {variant === "light" && (
        <>
          <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-secondary/15 blur-3xl transition-transform duration-10000" />
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[-14rem] top-24 h-[38rem] w-[38rem] rounded-full bg-primary/10 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -70, 0], y: [0, 60, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl"
          />
          {showGrid && <div className="aria-hidden bg-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />}
        </>
      )}
      {variant === "dark" && (
        <>
          <div className="absolute inset-0 bg-dark" />
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full bg-secondary/20 blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-32 bottom-0 h-[40rem] w-[40rem] rounded-full bg-primary/30 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
          />
          {showGrid && (
            <div className="absolute inset-0 bg-grid-light opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
          )}
        </>
      )}
    </div>
  );
}

export function GradientMesh({ className }: { className?: string }) {
  const blobs = [
    "left-[10%] top-[15%] h-72 w-72 bg-secondary/30",
    "right-[15%] top-[30%] h-80 w-80 bg-primary/25",
    "left-[30%] bottom-[10%] h-64 w-64 bg-accent/25",
    "right-[25%] bottom-[25%] h-56 w-56 bg-cyan-400/20",
  ];
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {blobs.map((cls, i) => (
        <motion.div
          key={i}
          animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 20 + i * 4, repeat: Infinity, ease: "easeInOut" }}
          className={cn("absolute rounded-full blur-3xl", cls)}
        />
      ))}
    </div>
  );
}

export function ConicGlow({
  className,
  from = "#4A90E2",
  via = "#134A7C",
  to = "#F4B400",
}: {
  className?: string;
  from?: string;
  via?: string;
  to?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
      style={{
        background: `conic-gradient(from 210deg, ${from}, ${via}, ${to}, ${from})`,
        opacity: 0.25,
      }}
    />
  );
}