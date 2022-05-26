import { RefSet } from "hooks/useRefSet";
import { DomRect } from "types";
import { gsap } from "utils/gsap";

interface HandleAnimationsProps {
  refs: RefSet;
  setStartAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  setPortraitDomRect: React.Dispatch<React.SetStateAction<DomRect>>;
  portraitRef: React.RefObject<HTMLDivElement>;
}

const handleAnimations = ({
  refs,
  setPortraitDomRect,
  setStartAnimation,
  portraitRef,
}: HandleAnimationsProps) => {
  const loaderPortraitRefDomRect = (
    refs.get("Portrait") as HTMLDivElement
  ).getBoundingClientRect() as DOMRect;

  const { x: left, y: top, width, height } = loaderPortraitRefDomRect;
  setPortraitDomRect({ left, top, width, height });

  const landingPortraitRefDomRect = portraitRef.current?.getBoundingClientRect() as DOMRect;

  const tl = gsap.timeline({ delay: 2 });

  tl.call(() => setStartAnimation(true));
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
  } = landingPortraitRefDomRect;
  tl.to(
    refs.get("PortraitFixed"),
    { left: leftLanding, top: topLanding, width: widthLanding, height: heightLanding },
    "+=0.25",
  );

  tl.play();

  return () => {
    tl.kill();
  };
};

export default handleAnimations;
