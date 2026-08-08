"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ButtonProps } from "@/components/ui/button";
import { Button } from "@/components/ui/button";

interface MagneticButtonProps extends ButtonProps {
  strength?: number;
}

export function MagneticButton({
  strength = 0.35,
  children,
  onClick,
  onMouseMove,
  onMouseLeave,
  style,
  ...props
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    onMouseMove?.(e);
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLButtonElement>) {
    onMouseLeave?.(e);
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x: sx, y: sy }} className="inline-block">
      <Button
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={style}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}