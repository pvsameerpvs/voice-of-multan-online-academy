import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-white",
        accent: "border-transparent bg-accent/15 text-accent-dark",
        secondary: "border-transparent bg-secondary/10 text-primary",
        outline: "border-slate-200 bg-white text-ink",
        success: "border-transparent bg-emerald-500/10 text-emerald-600",
        premium:
          "gradient-border text-primary shadow-card",
      },
      pulse: {
        true: "relative",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      pulse: false,
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, pulse, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        pulse &&
          "after:absolute after:inset-0 after:rounded-full after:bg-inherit after:animate-ping after:opacity-40",
        className,
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };