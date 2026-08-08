"use client";

import { Reveal } from "@/components/animations/motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <Reveal>
        <Badge variant={dark ? "secondary" : "accent"} className="mb-4">
          {eyebrow}
        </Badge>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]",
            dark ? "text-white" : "text-dark",
          )}
        >
          {title} {highlight && <span className="gradient-text">{highlight}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-4 text-base leading-relaxed sm:text-lg",
              dark ? "text-white/60" : "text-muted",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}