// Assets
import { gsap } from "assets/utils/gsap";

type Props = {
  callBack: React.Dispatch<React.SetStateAction<boolean>>;
  landingPortraitRefDomRect: DOMRect;
};

export const getTimeline: (props: Props) => gsap.core.Timeline = ({
  callBack,
  landingPortraitRefDomRect,
}) => {
  const { x: left, y: top, width, height } = landingPortraitRefDomRect;

  const timeline = gsap.timeline({ delay: 2 });
  timeline.call(callBack);

  timeline.to("#CameraIcon", { opacity: "1", duration: 0.2 }, "-=0.5");
  timeline.to("#ScreenshotWrapper", { opacity: "1", duration: 0.1 }, "+=1");
  timeline.to("#CameraIcon", { scale: "1.3", duration: 0.1 }, "<100%");

  timeline.to("#ScreenshotWrapper", { opacity: "0", duration: 0.1 }, "+=0.25");
  timeline.to("#CameraIcon", { scale: "1", duration: 0.1 }, "<100%");
  timeline.set("#PortraitFixed", { opacity: "1", duration: 0 }, "<100%");
  timeline.to("#Portrait", { opacity: "1", duration: 0 }, "<100%");
  timeline.to("#Loading", { opacity: "0", duration: 0.5 }, "<100%");

  timeline.to("#CameraIcon", { opacity: "0", duration: 0.2 }, "+=0.25");
  timeline.to("#Portrait", { opacity: "0", duration: 0 }, "<100%");
  timeline.to("#Progress", { opacity: "0", duration: 0 }, "<100%");

  timeline.to(
    "#PortraitFixed",
    { left, top, width, height, duration: 0 },
    "+=0.25"
  );

  return timeline;
};
