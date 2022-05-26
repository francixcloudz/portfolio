import { RefSet } from "hooks/useRefSet";
import { gsap, ScrollTrigger, clear } from "utils/gsap";

const duration = 0.3;

const getTimeline: (props: { refs: RefSet }) => gsap.core.Timeline = ({ refs }) => {
  gsap.defaults({
    ease: "none",
    duration: duration / 2,
  });

  const tl = gsap.timeline();

  // TODO: Display projects escalonatelly

  return tl;
};

const handleAnimations: (props: { refs: RefSet }) => void = ({ refs }) => {
  const tl = getTimeline({ refs });
  tl.play();
  ScrollTrigger.create({
    trigger: refs.get("Content") as gsap.DOMTarget,
    start: "0 bottom",
    onEnter: () => {
      tl.resume();
    },
  });

  return () => {
    tl.kill();
    clear(ScrollTrigger);
  };
};

export default handleAnimations;
