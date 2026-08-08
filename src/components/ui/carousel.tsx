"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  options?: EmblaOptionsType;
  showControls?: boolean;
  className?: string;
}

export function Carousel({
  options = { align: "start" },
  showControls = true,
  className,
  children,
  ...props
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={cn("relative", className)} {...props}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y gap-5">{children}</div>
      </div>
      {showControls && (
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            disabled={!canPrev}
            aria-label="Previous"
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            disabled={!canNext}
            aria-label="Next"
          >
            <ArrowRight />
          </Button>
        </div>
      )}
    </div>
  );
}

export function CarouselItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3", className)}
      {...props}
    />
  );
}