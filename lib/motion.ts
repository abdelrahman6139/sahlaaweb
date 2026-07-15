import type { Variants } from "framer-motion";

/** Shared entrance animation. Respects reduced motion via framer-motion's viewport once. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/** Convenience props for a whileInView fade-up on any motion element. */
export const inViewFadeUp = {
  variants: fadeUp,
  initial: "hidden" as const,
  whileInView: "show" as const,
  viewport: { once: true, margin: "-80px" },
};
