import { CSSProperties, useEffect, useRef, useState } from "react";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useRefSet, { RefSet } from "hooks/useRefSet";
import { AllRefsGsap } from "types/animations";
import { Container, SvgWrapper, OneShotLogo } from "./Loader.styled";
import useAnimation from "./utils/useAnimation";

export interface LoadingProps {
  mainImage: React.RefObject<HTMLDivElement>;
  isLoaded: boolean;
}

const DEFAULT_DELAY = 1;

const Loader = ({ isLoaded, mainImage }: LoadingProps) => {
  const allRefs = useRef<AllRefsGsap>({});
  const ref = useRefSet(allRefs);

  const [mainImageStyle, setMainImageStyle] = useState<CSSProperties>({});

  const { setAnimation, startAnimation, clearAnimation } = useAnimation({
    refs: new RefSet(allRefs.current),
    delay: DEFAULT_DELAY,
    setMainImageStyle,
    mainImage,
  });

  useIsoLayoutEffect(() => {
    setAnimation();
  }, []);

  useEffect(() => {
    if (mainImage.current) startAnimation();
    return () => {
      clearAnimation();
    };
  }, [mainImage.current]);

  return (
    <Container isLoaded={isLoaded}>
      <SvgWrapper ref={(node) => ref("LoaderImage", node)} style={mainImageStyle}>
        <OneShotLogo />
      </SvgWrapper>
    </Container>
  );
};

export default Loader;
