import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StatItem } from "./stat-item";

export function WhyChoose() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative aspect-4/3 lg:aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/car-dealership.jpg"
              alt="Modern car showroom with luxury vehicles"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-medium text-primary uppercase tracking-wide">
                WHY CHOOSE J CAR MALL
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                Excellence in Every Detail
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                With over 8 years of experience in the automotive industry,
                we&apos;ve built a reputation for integrity, quality, and
                customer satisfaction.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <StatItem value="500+" label="Satisfied Customers" />
              <StatItem value="1000+" label="Vehicles Sold" />
              <StatItem value="8" label="Years of Experience" />
            </div>

            <div className="pt-4">
              <Button size="lg" className="w-full sm:w-auto">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
