// Dependencies
import React, { useState, useRef } from "react";

// Styled
import {
  Container,
  Wrapper,
  Loading,
  Portrait,
  PortraitFixed,
  ScreenshotWrapper,
  CameraIcon,
} from "./styled";

// Inner
import { getTimeline } from "./utils";

// Components
import Progress from "components/molecules/Progress";

// Assets
import useLayoutEffect from "assets/hooks/useLayoutEffect";
import gif from "assets/media/loading.gif";
import portrait from "assets/media/character_smile.png";
import camera from "assets/media/icons/camera.png";

type Props = {
  loading: boolean;
  landingPortraitRef: React.RefObject<HTMLImageElement>;
};

const LoadingScreen: React.FC<Props> = ({ loading, landingPortraitRef }) => {
  const [loaded, setLoaded] = useState(false);
  const [portraitDomRect, setPortraitDomRect] = useState({});

  const allRefs = useRef<{ [node: string]: gsap.TweenTarget }>({});
  const createRefs = (refName, node) => {
    allRefs.current[refName] = node;
  };

  useLayoutEffect(() => {
    const loaderPortraitRefDomRect = (
      allRefs?.current["Portrait"] as HTMLDivElement
    ).getBoundingClientRect() as DOMRect;
    const { x: left, y: top, width, height } = loaderPortraitRefDomRect;
    setPortraitDomRect({ left, top, width, height });

    const landingPortraitRefDomRect =
      landingPortraitRef.current?.getBoundingClientRect() as DOMRect;

    const timeline = getTimeline({
      allRefs: allRefs?.current,
      callBack: () => setLoaded(true),
      landingPortraitRefDomRect,
    });

    timeline.play();

    return () => {
      timeline.kill();
    };
  }, [loading, landingPortraitRef, allRefs]);

  return (
    <Container fadeOut={!loading}>
      <Wrapper>
        <Loading
          ref={(node) => createRefs("Loading", node)}
          src={gif}
          priority
        />
        <CameraIcon
          ref={(node) => createRefs("CameraIcon", node)}
          src={camera}
          alt="camera"
        />
        <div ref={(node) => createRefs("Progress", node)}>
          {loaded && <Progress className="progress" duration={1} />}
        </div>
        <Portrait
          ref={(node) => createRefs("Portrait", node)}
          src={portrait}
          alt="portrait"
        />
        <ScreenshotWrapper
          ref={(node) => createRefs("ScreenshotWrapper", node)}
        />
        <PortraitFixed
          ref={(node) => createRefs("PortraitFixed", node)}
          style={portraitDomRect}
          src={portrait}
          alt="portrait"
        />
      </Wrapper>
    </Container>
  );
};

export default LoadingScreen;
