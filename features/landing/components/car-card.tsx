import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { CarData } from "../type";
import { formatPrice } from "@/lib/utils";

interface CarCardProps {
  car: CarData;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <Image
          src={car.images[0] || "/placeholder.svg"}
          alt={car.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
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
      </div>
    </Card>
  );
}
