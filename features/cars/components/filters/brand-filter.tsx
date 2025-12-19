"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BrandFilterProps {
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
}

const BRANDS = [
  "All Brands",
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Nissan",
  "Volkswagen",
  "Hyundai",
  "Kia",
  "Subaru",
];

export function BrandFilter({
  selectedBrand,
  onBrandChange,
}: BrandFilterProps) {
  return (
    <Card className="p-6 border-none shadow-sm w-full md:w-64 bg-[#f9f9f8] ">
      <h3 className="text-lg font-semibold mb-4">Brands</h3>
      <div className="space-y-2">
        {BRANDS.map((brand) => (
          <Button
            key={brand}
            variant={selectedBrand === brand ? "default" : "ghost"}
            className={`w-full justify-start ${
              selectedBrand === brand
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "hover:bg-accent"
            }`}
            onClick={() => onBrandChange(brand)}
          >
            {brand}
          </Button>
        ))}
      </div>
    </Card>
  );
}
