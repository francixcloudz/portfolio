// Assets
import type { DomRect } from "assets/types";

export type Props = {
  isLoading: boolean;
  landingPortraitRef: React.RefObject<HTMLDivElement>;
};

export type GetTimeline = (props: {
  allRefs: { [element: string]: gsap.TweenTarget };
  callBack: React.Dispatch<React.SetStateAction<boolean>>;
  landingPortraitRefDomRect: DomRect;
}) => gsap.core.Timeline;

export type HandleAnimations = (props: {
  allRefs: { [element: string]: gsap.TweenTarget };
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setPortraitDomRect: React.Dispatch<React.SetStateAction<DomRect>>;
  landingPortraitRef: React.RefObject<HTMLDivElement>;
}) => void;
