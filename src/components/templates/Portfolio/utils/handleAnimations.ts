import { RefSet } from "hooks/useRefSet";
import { gsap, ScrollTrigger, clear } from "utils/gsap";

const duration = 0.3;

const handleAnimations: (props: { refs: RefSet }) => void = ({ refs }) => {
  gsap.defaults({
    ease: "none",
    duration: duration / 2,
  });

  const tl = gsap.timeline();

  tl.set(refs.get("Content"), { opacity: 1 });
  // TODO: Display projects escalonatelly

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
