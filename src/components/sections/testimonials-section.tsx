"use client";

import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/section-heading";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { Reveal } from "@/components/animations/motion";

export function TestimonialsSection() {
  return (
    <section className="relative bg-white/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Success Stories"
          title="Loved by Students"
          highlight="And Trusted by Parents"
          description="Real results from real families — here's what our community says about learning with us."
        />

        <Reveal>
          <Carousel
            options={{ align: "start", loop: true, dragFree: true }}
            className="mx-auto"
          >
            {testimonials.map((t) => (
              <CarouselItem key={t.id} className="h-full">
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-card-hover">
                  <div>
                    <Quote className="mb-4 h-8 w-8 text-secondary/40" />
                    <div className="mb-3 flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-ink">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white ${t.avatarColor}`}
                    >
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-dark">{t.name}</p>
                      <p className="text-xs text-muted">{t.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}