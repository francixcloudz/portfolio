import { ReactNode, RefObject } from "react";

export interface LoadingProps {
  children: ReactNode;
}

export interface LoadingContextValues {
  isVisible: boolean | null;
  portraitRef: RefObject<HTMLDivElement> | null;
}

export const loadingContextInitialValues: LoadingContextValues = {
  isVisible: null,
  portraitRef: null,
};
