import { ReactElement } from "react";

interface ProgressProps {
  duration: number;
  children?: React.ReactNode;
  className?: string;
  percentage?: number;
  delay?: number;
}

export type ProgressType = (props: ProgressProps) => ReactElement;
