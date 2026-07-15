import {
  ShoppingCart,
  Building2,
  Rocket,
  Smartphone,
  Globe,
  Code2,
  type LucideIcon,
} from "lucide-react";

/** Maps solution icon keys (strings in data) to lucide components. */
export const solutionIcons: Record<string, LucideIcon> = {
  ShoppingCart,
  Building2,
  Rocket,
  Smartphone,
  Globe,
  Code2,
};

export function SolutionIcon({ name, className }: { name: string; className?: string }) {
  const Icon = solutionIcons[name] ?? Code2;
  return <Icon className={className} />;
}
