import { RefSet } from "hooks/useRefSet";
import { gsap, ScrollTrigger, clear } from "utils/gsap";

const duration = 0.3;

const getTimeline: (props: { refs: RefSet }) => gsap.core.Timeline = ({ refs }) => {
  gsap.defaults({
    ease: "none",
    duration: duration / 2,
  });

  const tl = gsap.timeline();

  tl.set(refs.get("Content"), {
    borderRadius: "0 0 0 0",
    padding: "20vh 0 40vh 0",
  });

  tl.add(() => {
    tl.pause();
  }, ">");

  tl.to(
    refs.get("Content"),
    {
      borderRadius: "0 0 20vw 20vw",
      duration,
    },
    "+=0.1",
  );
  tl.to(
    refs.get("Content"),
    {
      padding: "20vh 0 20vh 0",
    },
    ">",
  );

  return tl;
};

const handleAnimations: (props: { refs: RefSet }) => void = ({ refs }) => {
  const tl = getTimeline({ refs });
  tl.play();
  ScrollTrigger.create({
    trigger: refs.get("Content") as gsap.DOMTarget,
    start: "95% center+=25%",
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