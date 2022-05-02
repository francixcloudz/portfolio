import type { RefSet } from "hooks/useRefSet";
import { ReactElement } from "react";
import type { DomRect } from "types";

interface LoadingProps {
  isLoading: boolean;
  landingPortraitRef: React.RefObject<HTMLDivElement>;
}

export type LoadingType = (props: LoadingProps) => ReactElement;

export type GetTimeline = (props: {
  refs: RefSet;
  callBack: React.Dispatch<React.SetStateAction<boolean>>;
  landingPortraitRefDomRect: DomRect;
}) => gsap.core.Timeline;

export type HandleAnimations = (props: {
  refs: RefSet;
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setPortraitDomRect: React.Dispatch<React.SetStateAction<DomRect>>;
  landingPortraitRef: React.RefObject<HTMLDivElement>;
}) => void;
