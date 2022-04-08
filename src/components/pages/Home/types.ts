export type Props = {
  portraitRef: React.RefObject<HTMLDivElement>;
  loading: boolean;
};

export type GetTimeline = (props: {
  allRefs: { [element: string]: gsap.TweenTarget };
  callback: React.Dispatch<React.SetStateAction<boolean>>;
}) => gsap.core.Timeline;

export type HandleAnimations = (props: {
  allRefs: { [element: string]: gsap.TweenTarget };
  loading: boolean;
  setIsSmileImage: React.Dispatch<React.SetStateAction<boolean>>;
}) => void;
