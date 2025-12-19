interface StatItemProps {
  value: string;
  label: string;
}

export function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex gap-3 items-start">
      <div className="w-1 bg-primary shrink-0 self-stretch" />
      <div>
        <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
          {value}
        </div>
        <div className="text-muted-foreground text-base">{label}</div>
      </div>
    </div>
  );
}
