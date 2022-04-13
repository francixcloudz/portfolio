// Dependencies
import React, { useState, useRef } from "react";

// Files
import {
  Container,
  Wrapper,
  Loading,
  Portrait,
  PortraitFixed,
  ScreenshotWrapper,
  CameraIcon,
} from "./styled";
import type { Props } from "./types";
import { handleAnimations } from "./utils";

// Components
import Progress from "components/molecules/Progress";

// Assets
import useIsoLayoutEffect from "assets/hooks/useIsoLayoutEffect";
import useRefSet, { RefSet } from "assets/hooks/useRefSet";
import gif from "assets/media/loading.gif";
import portrait from "assets/media/character_smile.png";
import camera from "assets/media/icons/camera.png";
import type { AllRefsGsap, DomRect } from "assets/types";

const LoadingScreen: React.FC<Props> = ({ isLoading, landingPortraitRef }) => {
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
    [isLoading, landingPortraitRef, allRefs]
  );

  return (
    <Container fadeOut={!isLoading}>
      <Wrapper>
        <Loading ref={(node) => ref("Loading", node)} src={gif} priority />
        <CameraIcon
          ref={(node) => ref("CameraIcon", node)}
          src={camera}
          alt="camera"
        />
        <div ref={(node) => ref("Progress", node)}>
          {loaded && <Progress className="progress" duration={1} />}
        </div>
        <Portrait
          ref={(node) => ref("Portrait", node)}
          src={portrait}
          alt="portrait"
        />
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

export default LoadingScreen;
