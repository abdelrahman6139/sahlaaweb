import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  /** Eyebrow style: pill with primary tint, used above section headings. */
  eyebrow?: boolean;
}

export default function Badge({ children, className, eyebrow = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border text-xs font-semibold",
        eyebrow
          ? "border-primary/20 bg-primary/10 px-3.5 py-1.5 text-primary"
          : "border-border bg-surface-muted px-3 py-1 text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
