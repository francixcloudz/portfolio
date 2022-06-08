import { CSSProperties } from "react";
import { RefSet } from "hooks/useRefSet";
import { gsap } from "utils/gsap";

interface UseAnimationProps {
  refs: RefSet;
  delay: number;
  setLoaderImageStyle: React.Dispatch<React.SetStateAction<CSSProperties>>;
  mainImage: React.RefObject<HTMLDivElement>;
}

const useAnimation = ({ refs, delay, setLoaderImageStyle, mainImage }: UseAnimationProps) => {
  const tl = gsap.timeline();

  const setAnimation = () => {
    const loaderImageInfo = (
      refs.get("LoaderImage") as HTMLDivElement
    ).getBoundingClientRect() as DOMRect;
    const { x: left, y: top, width, height } = loaderImageInfo;
    setLoaderImageStyle({ left, top, width, height });
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
      // TODO: Fix first load of mainImage
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
