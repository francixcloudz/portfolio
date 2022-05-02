import { ReactElement } from "react";
import type { RefSet } from "hooks/useRefSet";

interface HomeProps {
  portraitRef: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
}

export type HomeType = (props: HomeProps) => ReactElement;

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

export type HandleScroll = (props: { refs: RefSet }) => () => void;
