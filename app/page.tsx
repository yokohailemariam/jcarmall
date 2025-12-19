import { FeaturedCars } from "@/features/landing/components/featured-cars";
import { Hero } from "@/features/landing/components/hero";
import { PremiumServices } from "@/features/landing/components/premium-service";
import { WhyChoose } from "@/features/landing/components/why-choose";

export default function Home() {
  return (
    <section>
      <Hero />
      <FeaturedCars />
      <PremiumServices />
      <WhyChoose />
    </section>
  );
}
