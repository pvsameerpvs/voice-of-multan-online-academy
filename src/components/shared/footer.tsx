"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "@/components/shared/social-icons";
import { siteConfig, whatsappLink } from "@/lib/site";
import { navigation } from "@/data/navigation";
import { Logo } from "@/components/shared/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: YoutubeIcon, href: siteConfig.social.youtube, label: "YouTube" },
  { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo light />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Empowering students through smart digital learning — Nursery to
              Grade 10 tuition, Mathematics, Computer Science and professional
              certifications.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/70 transition-all duration-300 hover:bg-secondary hover:text-white hover:-translate-y-0.5"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white/80">
              Academy
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/certifications" className="text-sm text-white/60 transition-colors hover:text-accent">
                  Certificate Verification
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white/80">
              Programs
            </h3>
            <ul className="space-y-2.5">
              {[
                "Nursery · KG1 · KG2",
                "Grade 1–10 Tuition",
                "Mathematics Specialist",
                "Computer Science",
                "Digital Marketing",
                "Professional Certification",
              ].map((p) => (
                <li key={p}>
                  <Link
                    href="/courses"
                    className="text-sm text-white/60 transition-colors hover:text-accent"
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/80">
              Contact & Updates
            </h3>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-secondary" /> {siteConfig.phone}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-secondary" /> {siteConfig.contactEmail}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city},{" "}
                  {siteConfig.address.country}
                </span>
              </li>
            </ul>
            <form
              action={whatsappLink("Hi! I'd like to receive updates from Voice of Multan Academy.")}
              className="flex gap-2"
            >
              <Input
                type="email"
                required
                placeholder="Get study tips..."
                aria-label="Email address"
                className="h-10 border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-secondary"
              />
              <Button type="submit" variant="accent" size="icon" aria-label="Subscribe">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-white/40">
            <GraduationCap className="h-3.5 w-3.5 text-accent" />
            A premium international digital learning experience
          </p>
        </div>
      </div>
    </footer>
  );
}