import { gsap } from "utils/gsap";
import { GetTimeline, HandleAnimations } from "./types";

const getTimeline: GetTimeline = ({ refs, callBack, landingPortraitRefDomRect }) => {
  const tl = gsap.timeline({ delay: 2 });

  tl.call(callBack);
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

  const { x: left, y: top, width, height } = landingPortraitRefDomRect;
  tl.to(refs.get("PortraitFixed"), { left, top, width, height }, "+=0.25");

  return tl;
};

const handleAnimations: HandleAnimations = ({
  refs,
  setPortraitDomRect,
  setLoaded,
  landingPortraitRef,
}) => {
  const loaderPortraitRefDomRect = (
    refs.get("Portrait") as HTMLDivElement
  ).getBoundingClientRect() as DOMRect;
  const { x: left, y: top, width, height } = loaderPortraitRefDomRect;
  setPortraitDomRect({ left, top, width, height });

  const landingPortraitRefDomRect = landingPortraitRef.current?.getBoundingClientRect() as DOMRect;

  const tl = getTimeline({
    refs,
    callBack: () => setLoaded(true),
    landingPortraitRefDomRect,
  });

  tl.play();

  return () => {
    tl.kill();
  };
};

export default handleAnimations;
