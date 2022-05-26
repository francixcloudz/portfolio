import { useState, useRef, useContext } from "react";
import Progress from "components/molecules/Progress/Progress";
import { LoadingContext } from "components/organisms/Loading/Loading";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useRefSet, { RefSet } from "hooks/useRefSet";
import { AllRefsGsap, DomRect } from "types";
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
import handleAnimations from "./utils/handleAnimations";

export interface LoadingProps {
  portraitRef: React.RefObject<HTMLDivElement>;
}

const Loader = ({ portraitRef }: LoadingProps) => {
  const { isLoaded } = useContext(LoadingContext);

  const [startAnimation, setStartAnimation] = useState(false);
  const [portraitDomRect, setPortraitDomRect] = useState<DomRect>({});

  const allRefs = useRef<AllRefsGsap>({});
  const ref = useRefSet(allRefs);

  useIsoLayoutEffect(() => {
    if (portraitRef.current) {
      handleAnimations({
        refs: new RefSet(allRefs.current),
        setStartAnimation,
        setPortraitDomRect,
        portraitRef,
      });
    }
  }, [portraitRef, allRefs]);

  return (
    <Container isLoaded={isLoaded}>
      <Wrapper>
        <LoadingImage ref={(node) => ref("Loading", node)} src={gif} priority />
        <CameraIcon ref={(node) => ref("CameraIcon", node)} src={camera} alt="camera" />
        <div ref={(node) => ref("Progress", node)}>
          {startAnimation && <Progress className="progress" duration={1} />}
        </div>
        <Portrait ref={(node) => ref("Portrait", node)} src={portrait} alt="portrait" />
        <ScreenshotWrapper ref={(node) => ref("ScreenshotWrapper", node)} />
        <PortraitFixed
          ref={(node) => ref("PortraitFixed", node)}
          style={portraitDomRect}
          src={portrait}
          alt="portrait"
        />
      </Wrapper>
    </Container>
  );
};

export default Loader;
