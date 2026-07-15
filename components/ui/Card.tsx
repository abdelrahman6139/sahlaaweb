import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  as?: "div" | "article";
}

export default function Card({ hover = false, as = "div", className, children, ...rest }: CardProps) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-border bg-surface/70 backdrop-blur-sm shadow-soft",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevated",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
