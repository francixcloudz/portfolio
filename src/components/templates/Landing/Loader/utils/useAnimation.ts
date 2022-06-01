import { RefSet } from "hooks/useRefSet";
import { DomRect } from "types";
import { gsap } from "utils/gsap";

interface UseAnimationProps {
  refs: RefSet;
  delay: number;
  setMainImageStyle: React.Dispatch<React.SetStateAction<DomRect>>;
  mainImage: React.RefObject<HTMLDivElement>;
}

const useAnimation = ({ refs, delay, setMainImageStyle, mainImage }: UseAnimationProps) => {
  const tl = gsap.timeline({ delay });

  const startAnimation = () => {
    const loaderPortraitRefDomRect = (
      refs.get("Portrait") as HTMLDivElement
    ).getBoundingClientRect() as DOMRect;

    const { x: left, y: top, width, height } = loaderPortraitRefDomRect;
    setMainImageStyle({ left, top, width, height });

    tl.to(refs.get("CameraIcon"), { opacity: "1", duration: 0.2 }, "-=0.5");
    tl.to(refs.get("ScreenshotWrapper"), { opacity: "1", duration: 0.1 }, "+=1");
    tl.to(refs.get("CameraIcon"), { scale: "1.3", duration: 0.1 }, "<");

    tl.to(refs.get("ScreenshotWrapper"), { opacity: "0" }, "+=0.25");
    tl.to(refs.get("CameraIcon"), { scale: "1", duration: 0.1 }, "<");
    tl.set(refs.get("PortraitFixed"), { opacity: "1" }, "<");
    tl.to(refs.get("Portrait"), { opacity: "1" }, "<");
    tl.to(refs.get("Loading"), { opacity: "0", duration: 0.5 }, "<");

    tl.to(refs.get("CameraIcon"), { opacity: "0", duration: 0.2 }, "+=0.25");
    tl.to(refs.get("Portrait"), { opacity: "0" }, "<");
    tl.to(refs.get("Progress"), { opacity: "0" }, "<");

    const {
      x: leftLanding,
      y: topLanding,
      width: widthLanding,
      height: heightLanding,
    } = mainImage.current?.getBoundingClientRect() as DOMRect;
    tl.to(
      refs.get("PortraitFixed"),
      { left: leftLanding, top: topLanding, width: widthLanding, height: heightLanding },
      "+=0.25",
    );
  };

  return {
    startAnimation,
    clearAnimation: () => tl.kill(),
  };
};

export default useAnimation;
