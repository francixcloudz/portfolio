// Inner
import type { GetTimeline, HandleAnimations } from "./types";

// Assets
import { gsap } from "assets/utils/gsap";

export const getTimeline: GetTimeline = ({
  allRefs,
  callBack,
  landingPortraitRefDomRect,
}) => {
  const tl = gsap.timeline({ delay: 2 });
  const ref = (refName: string) => allRefs[refName];

  tl.call(callBack);
  tl.to(ref("CameraIcon"), { opacity: "1", duration: 0.2 }, "-=0.5");
  tl.to(ref("ScreenshotWrapper"), { opacity: "1", duration: 0.1 }, "+=1");
  tl.to(ref("CameraIcon"), { scale: "1.3", duration: 0.1 }, "<");

  tl.to(ref("ScreenshotWrapper"), { opacity: "0" }, "+=0.25");
  tl.to(ref("CameraIcon"), { scale: "1", duration: 0.1 }, "<");
  tl.set(ref("PortraitFixed"), { opacity: "1" }, "<");
  tl.to(ref("Portrait"), { opacity: "1" }, "<");
  tl.to(ref("Loading"), { opacity: "0", duration: 0.5 }, "<");

  tl.to(ref("CameraIcon"), { opacity: "0", duration: 0.2 }, "+=0.25");
  tl.to(ref("Portrait"), { opacity: "0" }, "<");
  tl.to(ref("Progress"), { opacity: "0" }, "<");

  const { x: left, y: top, width, height } = landingPortraitRefDomRect;
  tl.to(ref("PortraitFixed"), { left, top, width, height }, "+=0.25");

  return tl;
};

export const handleAnimations: HandleAnimations = ({
  allRefs,
  setPortraitDomRect,
  setLoaded,
  landingPortraitRef,
}) => {
  const loaderPortraitRefDomRect = (
    allRefs["Portrait"] as HTMLDivElement
  ).getBoundingClientRect() as DOMRect;
  const { x: left, y: top, width, height } = loaderPortraitRefDomRect;
  setPortraitDomRect({ left, top, width, height });

  const landingPortraitRefDomRect =
    landingPortraitRef.current?.getBoundingClientRect() as DOMRect;

  const tl = getTimeline({
    allRefs,
    callBack: () => setLoaded(true),
    landingPortraitRefDomRect,
  });

  tl.play();

  return () => {
    tl.kill();
  };
};
