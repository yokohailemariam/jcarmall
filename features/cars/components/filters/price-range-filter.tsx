"use client";

import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

interface PriceRangeFilterProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (values: number[]) => void;
}

export function PriceRangeFilter({
  minPrice,
  maxPrice,
  onPriceChange,
}: PriceRangeFilterProps) {
  const formatPrice = (price: number) => {
    return `Br ${price.toLocaleString()}`;
  };

  return (
    <Card className="p-6 border-none shadow-sm w-full md:w-64 bg-[#f9f9f8] ">
      <h3 className="text-lg font-semibold mb-4">Price Range</h3>
      <div className="space-y-4">
        <Slider
          min={0}
          max={50000000}
          step={100000}
          value={[minPrice, maxPrice]}
          onValueChange={onPriceChange}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{formatPrice(minPrice)}</span>
          <span>{formatPrice(maxPrice)}</span>
        </div>
      </div>
    </Card>
  );
}
