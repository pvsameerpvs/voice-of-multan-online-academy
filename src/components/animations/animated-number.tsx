"use client";

import * as React from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedNumberProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedNumber({
  end,
  suffix = "",
  duration = 2.2,
  className,
}: AnimatedNumberProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {inView ? (
        <CountUp
          end={end}
          duration={duration}
          enableScrollSpy
          scrollSpyOnce
          suffix={suffix}
        />
      ) : (
        `0${suffix}`
      )}
    </span>
  );
}