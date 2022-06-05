import { useState, useRef } from "react";
import Progress from "components/molecules/Progress/Progress";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useRefSet, { RefSet } from "hooks/useRefSet";
import { AllRefsGsap, DomRect } from "types/animations";
import portrait from "assets/images/character_smile.png";
import camera from "assets/images/icons/camera.png";
import gif from "assets/images/loading.gif";
import {
  Container,
  Wrapper,
  LoadingImage,
  Portrait,
  PortraitFixed,
  ScreenshotWrapper,
  CameraIcon,
} from "./Loader.styled";
import useAnimation from "./utils/useAnimation";

export interface LoadingProps {
  mainImage: React.RefObject<HTMLDivElement>;
  isLoaded: boolean;
}

const DEFAULT_DELAY = 2;

const Loader = ({ mainImage, isLoaded }: LoadingProps) => {
  const [mainImageStyle, setMainImageStyle] = useState<DomRect>({});

  const allRefs = useRef<AllRefsGsap>({});
  const ref = useRefSet(allRefs);

  const { startAnimation, clearAnimation } = useAnimation({
    refs: new RefSet(allRefs.current),
    delay: DEFAULT_DELAY,
    setMainImageStyle,
    mainImage,
  });

  useIsoLayoutEffect(() => {
    if (mainImage.current) startAnimation();
    return () => {
      clearAnimation();
    };
  }, [mainImage.current]);

  return (
    <Container isLoaded={isLoaded}>
      <Wrapper>
        <LoadingImage ref={(node) => ref("Loading", node)} src={gif} priority />
        <CameraIcon ref={(node) => ref("CameraIcon", node)} src={camera} alt="camera" />
        <div ref={(node) => ref("Progress", node)}>
          <Progress className="progress" duration={1} delay={DEFAULT_DELAY} />
        </div>
        <Portrait ref={(node) => ref("Portrait", node)} src={portrait} alt="portrait" />
        <ScreenshotWrapper ref={(node) => ref("ScreenshotWrapper", node)} />
        <PortraitFixed
          ref={(node) => ref("PortraitFixed", node)}
          style={mainImageStyle}
          src={portrait}
          alt="portrait"
        />
      </Wrapper>
    </Container>
  );
};

export default Loader;
