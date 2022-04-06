// Dependencies
import { useLayoutEffect, useState, useRef } from "react";

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
import gif from "assets/media/loading.gif";
import portrait from "assets/media/character_smile.png";
import camera from "assets/media/icons/camera.png";

type Props = {
  loading: boolean | null;
  landingPortraitRef: React.RefObject<HTMLImageElement>;
};

const Component: React.FC<Props> = ({ loading, landingPortraitRef }) => {
  const [loaded, setLoaded] = useState(false);
  const [portraitDomRect, setPortraitDomRect] = useState({});

  const loaderPortraitRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const loaderPortraitRefDomRect =
      loaderPortraitRef.current?.getBoundingClientRect() as DOMRect;
    const { x: left, y: top, width, height } = loaderPortraitRefDomRect;
    setPortraitDomRect({ left, top, width, height });

    const landingPortraitRefDomRect =
      landingPortraitRef.current?.getBoundingClientRect() as DOMRect;
    const timeline = getTimeline({
      callBack: () => setLoaded(true),
      landingPortraitRefDomRect,
    });

    if (loading !== null) timeline.play();

    return () => {
      timeline.kill();
    };
  }, [loading, landingPortraitRef, loaderPortraitRef]);

  return (
    <Container fadeOut={!loading}>
      <Wrapper>
        <Loading id="Loading" src={gif} />
        <CameraIcon id="CameraIcon" src={camera} />
        <div id="Progress">
          {loaded && <Progress className="progress" duration={1} />}
        </div>
        <Portrait id="Portrait" ref={loaderPortraitRef} src={portrait} />
        <ScreenshotWrapper id="ScreenshotWrapper" />
        <PortraitFixed
          style={portraitDomRect}
          id="PortraitFixed"
          src={portrait}
        />
      </Wrapper>
    </Container>
  );
};

export default Component;
