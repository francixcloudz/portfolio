import { ReactElement, ReactNode, RefObject } from "react";

interface LoadingProps {
  children: ReactNode;
}

export type LoadingType = (props: LoadingProps) => ReactElement;

export interface LoadingContextValues {
  isVisible: boolean | null;
  portraitRef: RefObject<HTMLDivElement> | null;
}

export const loadingContextInitialValues: LoadingContextValues = {
  isVisible: null,
  portraitRef: null,
};
