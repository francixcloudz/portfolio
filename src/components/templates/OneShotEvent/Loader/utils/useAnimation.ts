import { RefSet } from "hooks/useRefSet";
import { gsap } from "utils/gsap";

interface UseAnimationProps {
  refs: RefSet;
}

const useAnimation = ({ refs }: UseAnimationProps) => {
  const tl = gsap.timeline();

  const startAnimation = () => {
    // eslint-disable-next-line no-console
    console.log(refs);
  };

  return {
    startAnimation,
    clearAnimation: () => tl.kill(),
  };
};

export default useAnimation;
