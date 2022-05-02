import { ReactElement } from "react";

interface LogoProps {
  isWhite?: boolean;
}

export type LogoType = (props: LogoProps) => ReactElement;
