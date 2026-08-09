"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  light = false,
  imgClassName,
}: {
  className?: string;
  light?: boolean;
  imgClassName?: string;
}) {
  return (
    <Link href="/" className={cn("group inline-flex items-center", className)}>
      <span
        className={cn(
          "relative overflow-hidden rounded-lg ring-1 transition-transform duration-300 group-hover:scale-[1.02]",
          light
            ? "bg-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] ring-white/20"
            : "bg-white shadow-card ring-slate-200/60",
        )}
      >
        <Image
          src="/logo-main.png"
          alt="Voice of Multan Online Academy"
          width={438}
          height={303}
          priority
          className={cn(
            "h-20 w-auto object-contain md:h-24",
            light && "h-24 md:h-28",
            imgClassName,
          )}
        />
      </span>
    </Link>
  );
}