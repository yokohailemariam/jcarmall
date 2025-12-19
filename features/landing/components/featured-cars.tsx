import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CarCard } from "./car-card";
import { CarData } from "../type";

const featuredCarsData: CarData[] = [
  {
    id: 6,
    images: [
      "https://jcarmall.r2.orpad.cc/jcarmall/uploads/products/1765398385439-BYD-TANG-L-EV-HESUCAR-2(1).png",
      "https://jcarmall.r2.orpad.cc/jcarmall/uploads/products/1765398385439-BYD-TANG-L-EV-HESUCAR-2(1).png",
    ],
    name: "Tang L Light Green",
    brand: "Byd",
    category: "Tang",
    price: 7200000,
    quantity: 3,
    isNew: false,
    description:
      "A large, premium plug-in hybrid SUV known for its three-row seating and luxurious...",
    yearOfMfg: 2025,
    mileage: 19288,
    fuel: "Plug-in Hybrid",
  },
  {
    id: 7,
    images: [
      "https://jcarmall.r2.orpad.cc/jcarmall/uploads/products/1765398385439-tang-l-ev-auto-in-china-1(1).webp",
      "https://jcarmall.r2.orpad.cc/jcarmall/uploads/products/1765398385439-tang-l-ev-auto-in-china-1(1).webp",
    ],
    name: "Tang L Gray",
    brand: "Byd",
    category: "Tang",
    price: 7200000,
    quantity: 5,
    isNew: false,
    description:
      "This spacious plug-in hybrid SUV offers impressive power and long-range",
    yearOfMfg: 2025,
    mileage: 19288,
    fuel: "Plug-in Hybrid",
  },
  {
    id: 8,
    images: [
      "https://jcarmall.r2.orpad.cc/jcarmall/uploads/products/1765398385439-volkswagen-id.6-specs-21(1).png",
    ],
    name: "ID 6 Shampine",
    brand: "Byd",
    category: "ID",
    price: 7200000,
    quantity: 4,
    isNew: false,
    description:
      "A three-row electric SUV from Volkswagen designed specifically for families who need...",
    yearOfMfg: 2024,
    mileage: 19288,
    fuel: "EV",
  },
];

export function FeaturedCars() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <Badge
          variant="outline"
          className="mb-4 rounded-full px-4 py-1.5 border-primary/20 text-primary font-medium"
        >
          Collection
        </Badge>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
              Featured Cars
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl text-pretty">
              Handpicked luxury vehicles, all inspected and certified for your
              peace of mind.
            </p>
          </div>

          <Button variant="customOutline">
            View All Cars
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredCarsData.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}
