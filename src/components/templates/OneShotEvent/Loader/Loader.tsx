import { useRef } from "react";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useRefSet, { RefSet } from "hooks/useRefSet";
import { AllRefsGsap } from "types/animations";
import { Container, SvgWrapper, HandSvg, GlassSvg, BrainSvg } from "./Loader.styled";
import useAnimation from "./utils/useAnimation";

export interface LoadingProps {
  isLoaded: boolean;
}

const Loader = ({ isLoaded }: LoadingProps) => {
  const allRefs = useRef<AllRefsGsap>({});
  const ref = useRefSet(allRefs);

  const { startAnimation, clearAnimation } = useAnimation({
    refs: new RefSet(allRefs.current),
  });

  useIsoLayoutEffect(() => {
    startAnimation();
    return () => {
      clearAnimation();
    };
  }, []);

  return (
    <Container isLoaded={isLoaded}>
      <SvgWrapper>
        <GlassSvg ref={(node) => ref("GlassSvg", node)} />
        <BrainSvg ref={(node) => ref("BrainSvg", node)} />
        <HandSvg ref={(node) => ref("HandSvg", node)} />
      </SvgWrapper>
    </Container>
  );
};

export default Loader;
