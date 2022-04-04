// Dependencies
import type { Variants } from "framer-motion";

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const scaleIn: Variants = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { duration: 1 } },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};
