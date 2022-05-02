import { ReactElement, RefAttributes } from "react";
import type { StaticImageData } from "next/image";

export type Variants = "white" | "black" | "principal";

interface TitleProps {
  title: string;
  subtitle: string;
  variant: Variants;
  emoji?: StaticImageData;
  principal?: boolean;
}

export type TitleType = (props: TitleProps & RefAttributes<HTMLDivElement>) => ReactElement | null;
