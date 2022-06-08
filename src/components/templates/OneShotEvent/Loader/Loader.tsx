import { CSSProperties, useMemo, useRef, useState } from "react";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useRefSet, { RefSet } from "hooks/useRefSet";
import { AllRefsGsap } from "types/animations";
import OneShotImage from "assets/images/brand/OneShot/logo_white.png";
import { Container, OneShotLogo } from "./Loader.styled";
import useAnimation from "./utils/useAnimation";

export interface LoadingProps {
  mainImage: React.RefObject<HTMLDivElement>;
  isLoaded: boolean;
  isDelayLoaded: boolean;
}

const DEFAULT_DELAY = 1;

const Loader = ({ mainImage, isLoaded, isDelayLoaded }: LoadingProps) => {
  const [loaderImageStyle, setLoaderImageStyle] = useState<CSSProperties>({});

  const allRefs = useRef<AllRefsGsap>({});
  const ref = useRefSet(allRefs);

  const { setAnimation, startAnimation, clearAnimation } = useAnimation({
    refs: new RefSet(allRefs.current),
    delay: DEFAULT_DELAY,
    setLoaderImageStyle,
    mainImage,
  });

  useIsoLayoutEffect(() => {
    setAnimation();
  }, []);

  useMemo(() => {
    if (mainImage.current && isLoaded) startAnimation();
    return () => {
      clearAnimation();
    };
  }, [mainImage.current, isLoaded]);

  return (
    <Container isDelayLoaded={isDelayLoaded}>
      <OneShotLogo
        ref={(node) => ref("LoaderImage", node)}
        src={OneShotImage}
        alt="OneShot Logo"
        style={loaderImageStyle}
        priority
      />
    </Container>
  );
};

export default Loader;
