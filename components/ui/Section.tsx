import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Adds a muted background band. */
  muted?: boolean;
  containerClassName?: string;
}

/** Vertical rhythm + centered container in one primitive. */
export default function Section({
  muted = false,
  className,
  containerClassName,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn("py-20 sm:py-28", muted && "bg-surface-muted/40", className)}
      {...rest}
    >
      <div className={cn("section-container", containerClassName)}>{children}</div>
    </section>
  );
}
