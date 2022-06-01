import { RefSet } from "hooks/useRefSet";
import { gsap, ScrollTrigger, clear } from "utils/gsap";

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

const handleAnimations = ({ refs }: UseAnimationProps) => {
  gsap.defaults({
    ease: "none",
    duration: duration / 2,
  });

  const tl = gsap.timeline();

  tl.set(refs.child("Title", 0).children[0], fadeIn.initial);
  tl.set(refs.child("Title", 0).children[1], fadeIn.initial);
  tl.set(refs.child("Title", 1), fadeIn.initial);
  tl.set(refs.get("Paragraph"), fadeIn.initial);
  tl.set(refs.get("Resume"), fadeIn.initial);

  tl.add(() => {
    tl.pause();
  }, ">");

  tl.to(refs.child("Title", 0).children[0], fadeIn.animate);
  tl.to(refs.child("Title", 0).children[1], fadeIn.animate);
  tl.to(refs.child("Title", 1), fadeIn.animate);
  tl.to(refs.get("Paragraph"), fadeIn.animate);
  tl.to(refs.get("Resume"), fadeIn.animate);

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
