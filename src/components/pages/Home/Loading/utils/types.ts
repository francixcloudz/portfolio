import { ReactNode, RefObject } from "react";

export interface LoadingProps {
  children: ReactNode;
}

export interface LoadingContextValues {
  isVisible: boolean;
  portraitRef: RefObject<HTMLDivElement> | null;
}

export const loadingContextInitialValues: LoadingContextValues = {
  isVisible: false,
  portraitRef: null,
};
