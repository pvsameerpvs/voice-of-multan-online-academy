"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  maxTilt?: number;
  glare?: boolean;
  intensity?: number;
}

export function TiltCard({
  maxTilt = 10,
  glare = true,
  intensity = 1,
  className,
  children,
  ...props
}: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 50, y: 50 });

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rx = useSpring(rotateX, { stiffness: 180, damping: 22 });
  const ry = useSpring(rotateY, { stiffness: 180, damping: 22 });
  const glareOpacity = useMotionValue(0);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const tiltY = (px - 0.5) * 2 * maxTilt * intensity;
    const tiltX = (0.5 - py) * 2 * maxTilt * intensity;
    rotateX.set(tiltX);
    rotateY.set(tiltY);
    setPosition({ x: px * 100, y: py * 100 });
    glareOpacity.set(1);
  }

  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className={cn("relative will-change-transform", className)}
      {...props}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            opacity: glareOpacity,
            background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 55%)`,
          }}
        />
      )}
    </motion.div>
  );
}