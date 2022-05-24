import { gsap, ScrollTrigger, clear } from "utils/gsap";
import { GetTimeline, HandleAnimations, HandleScroll } from "./types";

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

const getTimeline: GetTimeline = ({ refs, callback }) => {
  gsap.defaults({
    ease: "none",
    duration: duration / 2,
  });

  const tl = gsap.timeline();

  tl.set(refs.get("Container"), { opacity: 0 });
  tl.set(refs.get("Content"), {
    backgroundSize: "1px 1px",
    borderRadius: "0 0 0 0",
    minHeight: "100vh",
  });
  tl.set(refs.child("Title", 0), fadeIn.initial);
  tl.set(refs.child("Title", 1), fadeIn.initial);
  tl.set(refs.child("Nav", 0), fadeIn.initial);
  tl.set(refs.child("Nav", 1).children[0], fadeIn.initial);
  tl.set(refs.child("Nav", 1).children[1], fadeIn.initial);
  tl.set(refs.get("Notification"), fadeIn.initial);

  tl.to(refs.get("Container"), { opacity: 1 }, "+=0.5");
  tl.to(refs.child("Title", 0), fadeIn.animate, ">");
  tl.to(refs.get("Content"), { backgroundSize: "22px 22px", duration }, ">");
  tl.to(refs.child("Title", 1), fadeIn.animate, ">");
  tl.to(refs.child("Nav", 0), fadeIn.animate, ">");
  tl.to(refs.child("Nav", 1).children[0], fadeIn.animate, ">");
  tl.to(refs.child("Nav", 1).children[1], fadeIn.animate, ">");
  tl.to(refs.get("Content"), { borderRadius: "0 0 20vw 20vw", duration }, "+=0.1");
  tl.to(refs.get("Content"), { minHeight: "90vh" }, ">");

  tl.to(refs.get("Notification"), fadeIn.animate, "+=0.5");
  tl.add(callback, ">");

  return tl;
};

export const handleAnimations: HandleAnimations = ({
  refs,
  isVisible,
  setIsSmileImage,
  setIsLoading,
}) => {
  const tl = getTimeline({
    refs,
    callback: () => {
      setIsSmileImage(false);
      setIsLoading(false);
    },
  });
  if (!isVisible) tl.play();

  return () => {
    tl.kill();
  };
};

export const handleScroll: HandleScroll = ({ refs }) => {
  const goToSection = (section) => {
    gsap.to(window, {
      scrollTo: { y: section, autoKill: false },
      duration: 0,
    });
  };
  const sections = Array.from((refs.get("Container") as HTMLElement).children);
  sections.forEach((section, index) => {
    ScrollTrigger.create({
      trigger: section,
      start: "0% 20%",
      end: "100% 80%",
      onLeave: () => goToSection(sections[index + 1]),
      onLeaveBack: () => goToSection(sections[index + -1]),
    });
  });
  return () => {
    clear(ScrollTrigger);
  };
};