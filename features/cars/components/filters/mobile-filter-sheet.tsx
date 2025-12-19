// app/cars/components/MobileFilterSheet.tsx
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import { BrandFilter } from "@/features/cars/components/filters/brand-filter";
import { PriceRangeFilter } from "@/features/cars/components/filters/price-range-filter";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

interface MobileFilterSheetProps {
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
  priceRange: number[];
  onPriceChange: (range: number[]) => void;
}

export default function MobileFilterSheet({
  selectedBrand,
  onBrandChange,
  priceRange,
  onPriceChange,
}: MobileFilterSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline">
          <Filter className="h-4 w-4" />
          <p>Filters</p>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 overflow-y-auto">
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
        <div className="space-y-8 pt-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <BrandFilter
              selectedBrand={selectedBrand}
              onBrandChange={onBrandChange}
            />
          </div>
          <PriceRangeFilter
            minPrice={priceRange[0]}
            maxPrice={priceRange[1]}
            onPriceChange={onPriceChange}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
