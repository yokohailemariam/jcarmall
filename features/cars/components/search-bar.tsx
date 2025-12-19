import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const debouncedOnChange = useDebouncedCallback((val: string) => {
    onChange(val.toLowerCase().trim());
  }, 400);

  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground " />
      <Input
        placeholder="Search cars, brands, or descriptions..."
        defaultValue={value}
        onChange={(e) => debouncedOnChange(e.target.value)}
        className="pl-10"
      />
    </div>
  );
}
