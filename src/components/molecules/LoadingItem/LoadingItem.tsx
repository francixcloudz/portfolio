import React, { useState, useRef } from "react";
import Progress from "components/molecules/Progress/Progress";
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
} from "./LoadingItem.styled";
import handleAnimations from "./utils/animations";
import { LoadingProps } from "./utils/types";

const LoadingItem = ({ isLoading, landingPortraitRef }: LoadingProps) => {
  const [loaded, setLoaded] = useState(false);
  const [portraitDomRect, setPortraitDomRect] = useState<DomRect>({});

  const allRefs = useRef<AllRefsGsap>({});
  const ref = useRefSet(allRefs);

  useIsoLayoutEffect(
    () =>
      handleAnimations({
        refs: new RefSet(allRefs.current),
        setLoaded,
        setPortraitDomRect,
        landingPortraitRef,
      }),
    [isLoading, landingPortraitRef, allRefs],
  );

  return (
    <Container fadeOut={!isLoading}>
      <Wrapper>
        <LoadingImage ref={(node) => ref("Loading", node)} src={gif} priority />
        <CameraIcon ref={(node) => ref("CameraIcon", node)} src={camera} alt="camera" />
        <div ref={(node) => ref("Progress", node)}>
          {loaded && <Progress className="progress" duration={1} />}
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

export default LoadingItem;
