"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { MagneticButton } from "@/components/animations/magnetic-button";

function DropdownMenu({ item }: { item: (typeof navigation)[number] }) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const isActive =
    pathname === item.href || pathname.startsWith(item.href + "/");

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
          isActive ? "text-primary" : "text-ink hover:text-primary",
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
          isActive ? "text-primary" : "text-ink hover:text-primary",
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white/90 p-2 shadow-card-hover backdrop-blur-xl">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <child.icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">
                      {child.label}
                    </span>
                    {child.description && (
                      <span className="block text-xs text-muted">
                        {child.description}
                      </span>
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(15,23,42,0.06)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <DropdownMenu key={item.label} item={item} />
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <MagneticButton variant="ghost" size="sm" asChild>
            <Link href="/contact" className="inline-flex items-center gap-2">
              <PhoneCall className="h-4 w-4" />
              03001-1234567
            </Link>
          </MagneticButton>
          <MagneticButton variant="outline" size="sm" asChild>
            <Link href="/contact#demo" className="inline-flex items-center gap-2">
              Book Free Demo
            </Link>
          </MagneticButton>
          <MagneticButton size="sm" asChild>
            <Link href="/contact#enroll">Enroll Now</Link>
          </MagneticButton>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
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
                {navigation.map((item) => (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className="rounded-xl px-3 py-2.5 text-sm font-semibold text-ink hover:bg-slate-50 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                    {item.children?.map((child) => (
                      <SheetClose asChild key={child.href}>
                        <Link
                          href={child.href}
                          className="rounded-xl px-3 py-2 pl-7 text-sm text-muted hover:bg-slate-50 hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2.5 pt-6">
                <Button asChild size="lg">
                  <Link href="/contact#enroll">Enroll Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact#demo">Book Free Demo</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}