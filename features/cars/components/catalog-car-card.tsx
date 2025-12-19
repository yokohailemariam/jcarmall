import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CarData } from "@/features/landing/type";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface CatalogCarCardProps {
  car: CarData;
  viewMode: "grid" | "list";
}

export function CatalogCarCard({ car, viewMode }: CatalogCarCardProps) {
  const [viewportRef, embla] = useEmblaCarousel();
  const hasControls = (car.images?.length ?? 0) > 1;
  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  const router = useRouter();

  const formatPrice = (price: number) => {
    return `Br ${price.toLocaleString()}`;
  };

  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow duration-300 p-0">
        <div className="flex flex-col md:flex-row">
          <div className="relative group md:w-[42%] lg:w-[38%] aspect-4/3 md:aspect-3/2 overflow-hidden bg-muted">
            <div className="absolute gap-1 p-1 left-3 top-3 z-20 inline-flex items-center justify-center rounded-md bg-black/65 text-white opacity-0 transition-opacity group-hover:opacity-100">
              <ImageIcon className="size-3" aria-hidden />
              <p className="text-xs">{car.images?.length ?? 0}</p>
            </div>

            <div
              ref={viewportRef}
              className="overflow-hidden h-full group-hover:scale-110 transition-transform duration-300"
            >
              <div className="flex h-full">
                {(car.images?.length ? car.images : ["/placeholder.svg"]).map(
                  (src, idx) => (
                    <button
                      key={`${car.id}-${idx}`}
                      className="min-w-0 flex-[0_0_100%] relative h-full"
                      onClick={() => router.push(`/cars/${car.id}`)}
                    >
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`${car.name} image ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    </button>
                  )
                )}
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

          <div className="flex-1 p-6 space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-foreground">
                {car.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {car.category} by{" "}
                <span className="text-primary font-medium">{car.brand}</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="rounded-full px-3 py-1 bg-jcar-secondary/20"
              >
                {car.yearOfMfg}
              </Badge>
              <Badge
                variant="secondary"
                className="rounded-full px-3 py-1 bg-jcar-secondary/20"
              >
                {car.fuel}
              </Badge>
              <Badge
                variant="secondary"
                className="rounded-full px-3 py-1 bg-jcar-secondary/20"
              >
                {car.mileage.toLocaleString()} km
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {car.description}
            </p>

            <div className="flex items-center justify-between pt-2">
              <p className="text-2xl font-bold ">{formatPrice(car.price)}</p>
              <Button className="bg-primary hover:bg-primary/90">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Purchase
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

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

      {/* Card Content */}
      <div className="p-6 space-y-4">
        {/* Title and Brand */}
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-foreground">{car.name}</h3>
          <p className="text-sm text-muted-foreground">
            {car.category} by{" "}
            <span className="text-primary font-medium">{car.brand}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="rounded-full px-3 py-1">
            {car.yearOfMfg}
          </Badge>
          <Badge variant="secondary" className="rounded-full px-3 py-1">
            {car.fuel}
          </Badge>
          <Badge variant="secondary" className="rounded-full px-3 py-1">
            {car.mileage.toLocaleString()} km
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {car.description}
        </p>

        <p className="text-2xl font-bold text-primary">
          {formatPrice(car.price)}
        </p>

        <Button className="w-full bg-primary hover:bg-primary/90">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Purchase
        </Button>
      </div>
    </Card>
  );
}
