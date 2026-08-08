import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-[0_4px_18px_rgba(19,74,124,0.35)] hover:bg-primary-light hover:shadow-[0_8px_28px_rgba(19,74,124,0.45)]",
        accent:
          "bg-accent text-primary-dark shadow-[0_10px_40px_rgba(244,180,0,0.35)] hover:bg-accent-dark",
        secondary:
          "bg-secondary text-white shadow-[0_8px_24px_rgba(74,144,226,0.35)] hover:brightness-110",
        outline:
          "border border-slate-200 bg-white text-ink shadow-sm hover:border-secondary hover:text-primary hover:shadow-[0_6px_20px_rgba(74,144,226,0.18)]",
        ghost:
          "text-ink hover:bg-slate-100 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        white:
          "bg-white text-primary shadow-[0_8px_28px_rgba(15,23,42,0.15)] hover:bg-slate-50",
        "glass-dark":
          "glass-dark text-white hover:bg-white/10",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
      glow: {
        true: "relative overflow-hidden",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      glow: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, glow, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, glow }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };