// app/cars/components/CarsGridOrList.tsx
import { CatalogCarCard } from "@/features/cars/components/catalog-car-card";
import { CarData } from "@/features/landing/type";

interface CarsGridOrListProps {
  cars: CarData[];
  viewMode: "grid" | "list";
}

export default function CarsGridOrList({
  cars,
  viewMode,
}: CarsGridOrListProps) {
  return (
    <div
      className={
        viewMode === "grid"
          ? "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
          : "space-y-6"
      }
    >
      {cars.map((car) => (
        <CatalogCarCard key={car.id} car={car} viewMode={viewMode} />
      ))}
    </div>
  );
}
