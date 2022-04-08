// Dependencies
import type { StaticImageData } from "next/image";

export type Variants = "white" | "black" | "principal";

export type Props = {
  title: string;
  subtitle: string;
  variant: Variants;
  emoji?: StaticImageData;
  principal?: boolean;
};
