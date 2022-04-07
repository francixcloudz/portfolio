// Assets
import { gsap } from "assets/utils/gsap";

type Props = {
  allRefs: { [element: string]: gsap.TweenTarget };
  callBack: React.Dispatch<React.SetStateAction<boolean>>;
};

export const getTimeline: (props: Props) => gsap.core.Timeline = ({
  allRefs,
  callBack,
}) => {
  const timeline = gsap.timeline({ delay: 0.5 });
  timeline.call(callBack);
  // eslint-disable-next-line no-console
  console.log(allRefs);
  return timeline;
};
