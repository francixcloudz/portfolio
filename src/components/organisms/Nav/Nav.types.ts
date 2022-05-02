import { ForwardedRef, ReactElement, RefAttributes } from "react";

export type NavType = (
  props: RefAttributes<HTMLDivElement>,
  ref: ForwardedRef<HTMLDivElement>,
) => ReactElement | null;
