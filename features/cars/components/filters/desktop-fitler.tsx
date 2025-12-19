import { BrandFilter } from "@/features/cars/components/filters/brand-filter";
import { PriceRangeFilter } from "@/features/cars/components/filters/price-range-filter";

interface DesktopFiltersProps {
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
  priceRange: number[];
  onPriceChange: (range: number[]) => void;
}

export default function DesktopFilters({
  selectedBrand,
  onBrandChange,
  priceRange,
  onPriceChange,
}: DesktopFiltersProps) {
  return (
    <aside className="hidden md:block w-80 flex-0 space-y-8 ">
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
    </aside>
  );
}
