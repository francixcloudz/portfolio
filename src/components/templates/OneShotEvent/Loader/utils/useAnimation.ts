import { CSSProperties } from "react";
import { RefSet } from "hooks/useRefSet";
import { gsap } from "utils/gsap";

interface UseAnimationProps {
  refs: RefSet;
  delay: number;
  setMainImageStyle: React.Dispatch<React.SetStateAction<CSSProperties>>;
  mainImage: React.RefObject<HTMLDivElement>;
}

const useAnimation = ({ refs, delay, setMainImageStyle, mainImage }: UseAnimationProps) => {
  const tl = gsap.timeline();

  const setAnimation = () => {
    const loaderImageInfo = (
      refs.get("LoaderImage") as HTMLDivElement
    ).getBoundingClientRect() as DOMRect;
    const { x: left, y: top, width, height } = loaderImageInfo;
    setMainImageStyle({ left, top, width, height });
  };

  const startAnimation = () => {
    const {
      x: leftMainImage,
      y: topMainImage,
      width: widthMainImage,
      height: heightMainImage,
    } = mainImage.current?.getBoundingClientRect() as DOMRect;
    tl.to(refs.get("LoaderImage"), {
      delay,
      ease: "none",
      left: leftMainImage,
      top: topMainImage,
      width: widthMainImage,
      height: heightMainImage,
    });
  };

  return {
    setAnimation,
    startAnimation,
    clearAnimation: () => tl.kill(),
  };
};

export default useAnimation;
