"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { MagneticButton } from "@/components/animations/magnetic-button";

const links = [
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 rounded-2xl border px-4 pl-5 transition-all duration-500 sm:px-5",
          scrolled
            ? "border-slate-200/70 bg-white/85 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  isActive
                    ? scrolled
                      ? "text-primary"
                      : "text-white"
                    : scrolled
                      ? "text-ink hover:text-primary"
                      : "text-white/85 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <MagneticButton size="sm" asChild className="hidden sm:inline-flex">
            <Link href="/contact#enroll">Enroll Now</Link>
          </MagneticButton>
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Open menu"
                  className={cn(!scrolled && "border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20")}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <Logo />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1">
                  {links.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded-xl px-3 py-2.5 text-sm font-semibold text-ink hover:bg-slate-50 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-2.5 pt-6">
                  <SheetClose asChild>
                    <Button asChild size="lg">
                      <Link href="/contact#enroll">Enroll Now</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/contact#demo">Book Free Demo</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}