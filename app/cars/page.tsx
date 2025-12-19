import CarsCatalog from "@/features/cars/components/cars-catalog";
import { Suspense } from "react";

function Page() {
  return (
    <Suspense>
      <CarsCatalog />
    </Suspense>
  );
}

export default Page;
