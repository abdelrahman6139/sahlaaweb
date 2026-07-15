import React from "react";
import { cn } from "@/lib/utils";
import Badge from "./Badge";

/**
 * Renders a title where a `{highlighted}` token is styled with the brand gradient.
 * e.g. "Software solutions for {every} business"
 */
export function HighlightedTitle({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/\{([^}]+)\}/g); // odd indices are highlighted
  return (
    <span className={className}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-gradient">
            {part}
          </span>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </span>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start text-start",
        className
      )}
    >
      {eyebrow && <Badge eyebrow>{eyebrow}</Badge>}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        <HighlightedTitle text={title} />
      </h2>
      {subtitle && <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}
