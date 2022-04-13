// Files
import type { GetTimeline, HandleAnimations } from "./types";

// Assets
import { gsap, ScrollTrigger, clear } from "assets/utils/gsap";

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

const getTimeline: GetTimeline = ({ refs }) => {
  gsap.defaults({
    ease: "none",
    duration: duration / 2,
  });

  const tl = gsap.timeline();

  tl.set(refs.get("Content"), {
    borderRadius: "0 0 0 0",
    padding: "20vh 0 40vh 0",
  });
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

  tl.add(() => {
    tl.pause();
  }, ">");

  tl.to(
    refs.get("Content"),
    {
      borderRadius: "0 0 20vw 20vw",
      duration,
    },
    "+=0.1"
  );
  tl.to(
    refs.get("Content"),
    {
      padding: "20vh 0 20vh 0",
    },
    ">"
  );

  return tl;
};

export const handleAnimations: HandleAnimations = ({ refs }) => {
  const tl = getTimeline({ refs });
  tl.play();
  ScrollTrigger.create({
    trigger: refs.get("Content") as gsap.DOMTarget,
    start: "0 center",
    end: "60% center",
    onEnter: () => {
      tl.resume();
    },
    onLeave: () => {
      tl.resume();
    },
    markers: true,
  });

  return () => {
    tl.kill();
    clear(ScrollTrigger);
  };
};
