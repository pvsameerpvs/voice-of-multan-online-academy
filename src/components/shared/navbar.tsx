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
  const isHome = pathname === "/";

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <div
        className={cn(
          "flex h-16 w-full items-center justify-between gap-3 rounded-lg border px-4 transition-all duration-500 sm:h-24 sm:gap-6 sm:px-8",
          scrolled
            ? "border-slate-200/70 bg-white/85 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Logo imgClassName="h-12 sm:h-16 md:h-24" />

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
                    ? scrolled || !isHome
                      ? "text-primary"
                      : "text-white"
                    : scrolled || !isHome
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
                  className={cn(!scrolled && isHome && "border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20")}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
<Logo className="z-10 scale-[1.3] md:scale-[1.25]" />
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