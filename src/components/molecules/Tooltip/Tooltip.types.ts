import { ReactNode, ReactElement } from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

export type TooltipType = (props: TooltipProps) => ReactElement;
