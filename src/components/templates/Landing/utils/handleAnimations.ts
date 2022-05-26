import { RefSet } from "hooks/useRefSet";
import { gsap } from "utils/gsap";

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

interface HandleAnimationsProps {
  refs: RefSet;
  setIsSmileImage: React.Dispatch<React.SetStateAction<boolean>>;
}

const handleAnimations = ({ refs, setIsSmileImage }: HandleAnimationsProps) => {
  gsap.defaults({
    ease: "none",
    duration: duration / 2,
  });

  const tl = gsap.timeline();

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

  tl.pause();

  tl.to(refs.child("Title", 0), fadeIn.animate, ">");
  tl.to(refs.get("Content"), { backgroundSize: "22px 22px", duration }, ">");
  tl.to(refs.child("Title", 1), fadeIn.animate, ">");
  tl.to(refs.child("Nav", 0), fadeIn.animate, ">");
  tl.to(refs.child("Nav", 1).children[0], fadeIn.animate, ">");
  tl.to(refs.child("Nav", 1).children[1], fadeIn.animate, ">");
  tl.to(refs.get("Content"), { borderRadius: "0 0 20vw 20vw", duration }, "+=0.1");
  tl.to(refs.get("Content"), { minHeight: "90vh" }, ">");

  tl.to(refs.get("Notification"), fadeIn.animate, "+=0.5");
  tl.add(() => {
    setIsSmileImage(false);
  }, ">");

  return () => {
    tl.kill();
  };
};

export default handleAnimations;
