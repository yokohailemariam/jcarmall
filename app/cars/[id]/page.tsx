"use client";

import { Badge } from "@/components/ui/badge";
import { CARS_DATA } from "@/features/cars/data";
import { formatDistance } from "@/lib/utils";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ExampleClientComponent() {
  const params = useParams<{ id: string }>();

  const car = CARS_DATA.find((car) => car.id === Number(params.id));

  const [selectedImage, setSelectedImage] = useState(car?.images[0]);

  const isActiveImage = (imgSrc: string) => imgSrc === selectedImage;

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="flex justify-center py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center max-w-6xl gap-6">
        <div className="space-y-3 bg-[#f3efee] size-full p-3 ">
          <p className="text-2xl font-bold">{car.name}</p>

          <div className="flex gap-3 items-center">
            <Badge>
              <p className="uppercase text-black font-bold ">{car.brand}</p>
            </Badge>

            <p>
              Model:{" "}
              <span className="text-blue-500 uppercase">{car.category}</span>
            </p>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-3">
            <div className="flex flex-row md:flex-col gap-3 md:h-[36dvh] overflow-auto rounded-md">
              {car.images &&
                car.images.length > 0 &&
                car.images.map((imgSrc) => (
                  <Image
                    key={imgSrc}
                    src={imgSrc}
                    alt={car.name}
                    width={50}
                    height={50}
                    className={`h-12 w-16 object-cover rounded-md hover:scale-105  transition-transform duration-300 cursor-pointer ${
                      isActiveImage(imgSrc) ? "border-2 border-blue-500" : ""
                    }`}
                    onClick={() => setSelectedImage(imgSrc)}
                  />
                ))}
            </div>

            <div className="p-3">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={car.name}
                className="object-cover rounded-md size-full"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
        <div className="space-y-6 p-3">
          <div className="flex gap-3">
            <div>
              <h1>Fuel</h1>
              <h2 className="text-jcar-secondary font-medium">{car.fuel}</h2>
            </div>
            <div>
              <h1>Mileage</h1>
              <h2 className="text-jcar-secondary font-medium">
                {formatDistance(car.mileage)}
              </h2>
            </div>
          </div>

          <div>
            <h1>Year of Manufacturing</h1>
            <h2 className="text-jcar-secondary font-medium">{car.yearOfMfg}</h2>
          </div>
          <p className="text-md text-muted-foreground">{car.description}</p>
          <p className="text-2xl font-bold mb-2 text-jcar-green-900">
            Price: Br {car.price.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
