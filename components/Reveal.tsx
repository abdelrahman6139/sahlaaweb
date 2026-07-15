"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { ReactNode } from "react";

/**
 * Wraps children in a fade-up. Below-the-fold content reveals on scroll
 * (whileInView); pass `immediate` for above-the-fold content (e.g. the Hero)
 * so it animates on mount instead of waiting on an IntersectionObserver —
 * avoids a flash of invisible content when the element is already in view.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  immediate = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;
}) {
  const viewProps = immediate
    ? { animate: "show" as const }
    : { whileInView: "show" as const, viewport: { once: true, margin: "-80px" } };

  return (
    <motion.div className={className} variants={fadeUp} initial="hidden" {...viewProps} transition={{ delay }}>
      {children}
    </motion.div>
  );
}
