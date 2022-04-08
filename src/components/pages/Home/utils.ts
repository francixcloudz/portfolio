// Files
import type { GetTimeline, HandleAnimations } from "./types";

// Assets
import { gsap } from "assets/utils/gsap";

const duration = 0.3;

const fadeIn = {
  initial: {
    opacity: 0,
    y: "15px",
  },
  animate: {
    opacity: 1,
    y: 0,
    duration,
  },
};

const getTimeline: GetTimeline = ({ allRefs, callback }) => {
  gsap.defaults({
    ease: "none",
    duration: duration / 2,
  });
  const tl = gsap.timeline();

  const ref = (refName: string) => allRefs[refName];
  const refChild = (refName: string, index) =>
    (ref(refName) as HTMLElement).children[index];

  tl.set(ref("Container"), { opacity: 0 });
  tl.set(ref("Content"), {
    backgroundSize: "1px 1px",
    borderRadius: "0 0 0 0",
    minHeight: "100vh",
  });
  tl.set(refChild("Title", 0), fadeIn.initial);
  tl.set(refChild("Title", 1), fadeIn.initial);
  tl.set(refChild("Nav", 0), fadeIn.initial);
  tl.set(refChild("Nav", 1).children[0], fadeIn.initial);
  tl.set(refChild("Nav", 1).children[1], fadeIn.initial);
  tl.set(ref("Notification"), fadeIn.initial);

  tl.to(ref("Container"), { opacity: 1 }, "+=0.5");
  tl.to(refChild("Title", 0), fadeIn.animate, ">");
  tl.to(ref("Content"), { backgroundSize: "22px 22px", duration }, ">");
  tl.to(refChild("Title", 1), fadeIn.animate, ">");
  tl.to(refChild("Nav", 0), fadeIn.animate, ">");
  tl.to(refChild("Nav", 1).children[0], fadeIn.animate, ">");
  tl.to(refChild("Nav", 1).children[1], fadeIn.animate, ">");
  tl.to(ref("Content"), { borderRadius: "0 0 20vw 20vw", duration }, "+=0.1");
  tl.to(ref("Content"), { minHeight: "90vh" }, ">");

  tl.to(ref("Notification"), fadeIn.animate, "+=0.5");
  tl.add(callback, ">");

  return tl;
};

export const handleAnimations: HandleAnimations = ({
  allRefs,
  isVisible,
  setIsSmileImage,
  setIsLoading,
}) => {
  const tl = getTimeline({
    allRefs,
    callback: () => {
      setIsSmileImage(false);
      setIsLoading(false);
    },
  });
  if (!isVisible) tl.play();

  return () => {
    tl.kill();
  };
};
