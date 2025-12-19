import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <Card className="border-border/40 bg-[#f9f9f8] group">
      <CardContent className="p-8">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary transition-colors duration-200">
          <Icon
            className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-200"
            strokeWidth={1.5}
          />
        </div>
        <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
