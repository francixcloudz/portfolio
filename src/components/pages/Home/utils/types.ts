import { ReactElement } from "react";
import { RefSet } from "hooks/useRefSet";

export type HomeType = () => ReactElement | null;

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
