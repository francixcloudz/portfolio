// Assets
import type { RefSet } from "assets/hooks/useRefSet";

export type Props = {
  portraitRef: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
};

export type GetTimeline = (props: {
  refs: RefSet;
  callback: React.Dispatch<React.SetStateAction<boolean>>;
}) => gsap.core.Timeline;

export type HandleAnimations = (props: {
  refs: RefSet;
  isVisible: boolean;
  setIsSmileImage: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => void;
