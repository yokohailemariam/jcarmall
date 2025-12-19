import { Shield, DollarSign, Wrench, Headphones } from "lucide-react";
import { ServiceCard } from "./service-card";

const services = [
  {
    icon: Shield,
    title: "Quality Inspection",
    description:
      "Every vehicle undergoes a comprehensive inspection to ensure it meets our standards.",
  },
  {
    icon: DollarSign,
    title: "Financing Options",
    description:
      "Flexible payment plans and financing arrangements to suit your budget.",
  },
  {
    icon: Wrench,
    title: "After-Sales Service",
    description:
      "Comprehensive maintenance and repair services with certified technicians.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "24/7 customer support to assist with any inquiries or concerns.",
  },
];

export function PremiumServices() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary py-3">WHAT WE OFFER</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Premium Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Beyond vehicle sales, we provide comprehensive services to ensure
            your complete satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
