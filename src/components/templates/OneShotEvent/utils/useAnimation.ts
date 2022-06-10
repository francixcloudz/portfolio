import { RefSet } from "hooks/useRefSet";
import { gsap } from "utils/gsap";

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

interface UseAnimationProps {
  refs: RefSet;
}

const useAnimation = ({ refs }: UseAnimationProps) => {
  const tl = gsap.timeline({
    ease: "none",
    duration: duration / 2,
  });

  const setAnimation = () => {
    refs.children("FlyerContent").forEach((child) => {
      tl.set(child, fadeIn.initial);
    });
    const MobileCTAButton = refs.get("MobileCTAButton");
    if (MobileCTAButton) tl.set(MobileCTAButton, fadeIn.initial);
    tl.set(refs.get("EventDetails"), fadeIn.initial);
  };

  const startAnimation = () => {
    refs.children("FlyerContent").forEach((child) => {
      tl.to(child, fadeIn.animate, ">-50%");
    });
    const MobileCTAButton = refs.get("MobileCTAButton");
    if (MobileCTAButton) tl.to(MobileCTAButton, fadeIn.animate, ">");
    tl.to(refs.get("EventDetails"), fadeIn.animate, ">");
  };

  return {
    startAnimation,
    setAnimation,
    clearAnimation: () => tl.kill(),
  };
};

export default useAnimation;
