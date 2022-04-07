// Assets
import { gsap } from "assets/utils/gsap";

type Props = {
  allRefs: { [element: string]: gsap.TweenTarget };
  callBack: React.Dispatch<React.SetStateAction<boolean>>;
  landingPortraitRefDomRect: DOMRect;
};

export const getTimeline: (props: Props) => gsap.core.Timeline = ({
  allRefs,
  callBack,
  landingPortraitRefDomRect,
}) => {
  const { x: left, y: top, width, height } = landingPortraitRefDomRect;

  const timeline = gsap.timeline({ delay: 2 });
  timeline.call(callBack);

  timeline.to(allRefs["CameraIcon"], { opacity: "1", duration: 0.2 }, "-=0.5");
  timeline.to(
    allRefs["ScreenshotWrapper"],
    { opacity: "1", duration: 0.1 },
    "+=1"
  );
  timeline.to(allRefs["CameraIcon"], { scale: "1.3", duration: 0.1 }, "<100%");

  timeline.to(
    allRefs["ScreenshotWrapper"],
    { opacity: "0", duration: 0.1 },
    "+=0.25"
  );
  timeline.to(allRefs["CameraIcon"], { scale: "1", duration: 0.1 }, "<100%");
  timeline.set(
    allRefs["PortraitFixed"],
    { opacity: "1", duration: 0 },
    "<100%"
  );
  timeline.to(allRefs["Portrait"], { opacity: "1", duration: 0 }, "<100%");
  timeline.to(allRefs["Loading"], { opacity: "0", duration: 0.5 }, "<100%");

  timeline.to(allRefs["CameraIcon"], { opacity: "0", duration: 0.2 }, "+=0.25");
  timeline.to(allRefs["Portrait"], { opacity: "0", duration: 0 }, "<100%");
  timeline.to(allRefs["Progress"], { opacity: "0", duration: 0 }, "<100%");

  timeline.to(
    allRefs["PortraitFixed"],
    { left, top, width, height, duration: 0 },
    "+=0.25"
  );

  return timeline;
};
