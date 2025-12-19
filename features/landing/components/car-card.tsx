"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { CarData } from "../type";
import { formatPrice } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

interface CarCardProps {
  car: CarData;
}

export function CarCard({ car }: CarCardProps) {
  const [viewportRef, embla] = useEmblaCarousel();
  const hasControls = (car.images?.length ?? 0) > 1;
  const scrollPrev = React.useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = React.useCallback(() => embla?.scrollNext(), [embla]);
  return (
    <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow duration-300 p-0">
      <div className="relative group aspect-4/3 overflow-hidden bg-muted ">
        <div className="absolute gap-1 p-1 left-3 top-3 z-20 inline-flex  items-center justify-center rounded-md bg-black/65 text-white opacity-0 transition-opacity group-hover:opacity-100">
          <ImageIcon className="size-3" aria-hidden />
          <p className="text-xs">{car.images?.length}</p>
        </div>
        <div
          ref={viewportRef}
          className="overflow-hidden h-full group-hover:scale-110 transition-transform duration-300"
        >
          <div className="flex h-full">
            {car.images?.length &&
              car.images.map((src, idx) => (
                <div
                  key={`${car.id}-${idx}`}
                  className="min-w-0 flex-[0_0_100%] relative h-full"
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`${car.name} image ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
          </div>
        </div>
        {hasControls && (
          <>
            <button
              type="button"
              aria-label="Previous"
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white md:opacity-0 md:group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white md:opacity-0 md:group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-foreground">{car.name}</h3>
          <p className="text-sm text-muted-foreground">
            {car.category} by{" "}
            <span className="text-primary font-medium">{car.brand}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 bg-jcar-secondary/15"
          >
            {car.yearOfMfg}
          </Badge>
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 bg-jcar-secondary/15 "
          >
            {car.fuel}
          </Badge>
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 bg-jcar-secondary/15"
          >
            {car.mileage.toLocaleString()} km
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {car.description}
        </p>

        <p className="text-2xl font-bold ">{formatPrice(car.price)}</p>
      </div>
    </Card>
  );
}
