"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { CARS_DATA } from "@/features/cars/data";
import SearchBar from "./search-bar";
import MobileFilterSheet from "./filters/mobile-filter-sheet";
import ViewToggle from "./view-toggle";
import DesktopFilters from "./filters/desktop-fitler";
import CarsGridOrList from "./filters/car-grid-list";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { BrandFilter } from "./filters/brand-filter";
import { PriceRangeFilter } from "./filters/price-range-filter";

const MAX_PRICE = 50_000_000;

export default function CarsCatalog() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlQuery = searchParams.get("q")?.trim().toLowerCase() || "";
  const urlBrand = searchParams.get("brand") || "All Brands";
  const urlMinPrice = Number(searchParams.get("minPrice")) || 0;
  const urlMaxPrice = Number(searchParams.get("maxPrice")) || MAX_PRICE;
  const urlView = (searchParams.get("view") as "grid" | "list") || "list";

  const [searchQuery, setSearchQuery] = useState(urlQuery);
  const [selectedBrand, setSelectedBrand] = useState(urlBrand);
  const [priceRange, setPriceRange] = useState([urlMinPrice, urlMaxPrice]);
  const [viewMode, setViewMode] = useState<"grid" | "list">(urlView);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const updateUrl = useCallback(() => {
    const params = new URLSearchParams();

    if (searchQuery) params.set("q", searchQuery);
    if (selectedBrand !== "All Brands") params.set("brand", selectedBrand);
    if (priceRange[0] > 0) params.set("minPrice", priceRange[0].toString());
    if (priceRange[1] < MAX_PRICE)
      params.set("maxPrice", priceRange[1].toString());
    if (viewMode !== "grid") params.set("view", viewMode);

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchQuery, selectedBrand, priceRange, viewMode, router, pathname]);

  useEffect(() => {
    updateUrl();
  }, [updateUrl]);

  const filteredCars = useMemo(() => {
    return CARS_DATA.filter((car) => {
      const matchesSearch =
        !searchQuery ||
        car.name.toLowerCase().includes(searchQuery) ||
        car.brand.toLowerCase().includes(searchQuery) ||
        car.description.toLowerCase().includes(searchQuery);

      const matchesBrand =
        selectedBrand === "All Brands" || car.brand === selectedBrand;

      const matchesPrice =
        car.price >= priceRange[0] && car.price <= priceRange[1];

      return matchesSearch && matchesBrand && matchesPrice;
    });
  }, [searchQuery, selectedBrand, priceRange]);

  return (
    <div className="flex flex-col relative">
      <main className="flex-1  px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-primary">Cars Catalog</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 flex gap-2">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="md:hidden"
              onClick={() => {
                setMobileFiltersOpen(!mobileFiltersOpen);
              }}
            >
              <Filter className="h-4 w-4" />
              <p>Filters</p>
            </Button>
            <ViewToggle viewMode={viewMode} onViewChange={setViewMode} />
          </div>
        </div>

        {mobileFiltersOpen && (
          <div className=" space-y-3 w-full">
            <BrandFilter
              selectedBrand={selectedBrand}
              onBrandChange={setSelectedBrand}
            />{" "}
            <PriceRangeFilter
              minPrice={priceRange[0]}
              maxPrice={priceRange[1]}
              onPriceChange={setPriceRange}
            />
          </div>
        )}

        <div className="flex gap-8">
          <DesktopFilters
            selectedBrand={selectedBrand}
            onBrandChange={setSelectedBrand}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
          />

          <div className="flex-1">
            <p className="text-muted-foreground mb-6">
              Showing {filteredCars.length} of {CARS_DATA.length} cars
            </p>

            <CarsGridOrList cars={filteredCars} viewMode={viewMode} />

            {filteredCars.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                  No cars found matching your criteria.
                </p>

                <Button
                  variant="outline"
                  className="my-3"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedBrand("All Brands");
                    setPriceRange([0, MAX_PRICE]);
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
