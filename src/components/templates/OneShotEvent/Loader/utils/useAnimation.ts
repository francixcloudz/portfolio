import { RefSet } from "hooks/useRefSet";
import { gsap } from "utils/gsap";

interface UseAnimationProps {
  refs: RefSet;
}

const useAnimation = ({ refs }: UseAnimationProps) => {
  const tl = gsap.timeline();

  const startAnimation = () => {};

  return {
    startAnimation,
    clearAnimation: () => tl.kill(),
  };
};

export default useAnimation;
