export type Props = {
  portraitRef: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
};

export type GetTimeline = (props: {
  allRefs: { [element: string]: gsap.TweenTarget };
  callback: React.Dispatch<React.SetStateAction<boolean>>;
}) => gsap.core.Timeline;

export type HandleAnimations = (props: {
  allRefs: { [element: string]: gsap.TweenTarget };
  isVisible: boolean;
  setIsSmileImage: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => void;
