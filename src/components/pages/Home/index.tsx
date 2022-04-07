// Dependencies
import { useRef, useState } from "react";

// Styled
import { Container, CharacterWrapper, Character, Content, Box } from "./styled";

// Inner
import { getTimeline } from "./utils";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

// Components
import Signature from "components/atoms/Signature";
import Notification from "components/molecules/Notification";
import Nav from "components/templates/Nav";

// Assets
import useLayoutEffect from "assets/hooks/useLayoutEffect";
import image from "assets/media/character.png";
import smileImage from "assets/media/character_smile.png";

type Props = {
  portraitRef: React.RefObject<HTMLImageElement>;
  loading: boolean;
};

const Home: React.FC<Props> = ({ portraitRef, loading }) => {
  const [isSmileImage, setIsSmileImage] = useState(true);

  const allRefs = useRef<{ [node: string]: gsap.TweenTarget }>({});
  const createRefs = (refName, node) => {
    allRefs.current[refName] = node;
  };

  useLayoutEffect(() => {
    const timeline = getTimeline({
      allRefs: allRefs.current,
      callBack: () => setIsSmileImage(false),
    });
    if (!loading) timeline.play();

    return () => {
      timeline.kill();
    };
  }, [loading]);

  return (
    <>
      <Container>
        <Nav />
        <Content>
          <Box>
            <h1>Francisco Arrigoni</h1>
            <h2>Sr. Frontend Engineer</h2>
            <CharacterWrapper>
              <Character
                ref={portraitRef}
                alt="portrait"
                src={isSmileImage ? smileImage : image}
                onMouseOver={() => setIsSmileImage(true)}
                onMouseOut={() => setIsSmileImage(false)}
              />
              <Notification
                onClick={setIsSmileImage}
                ref={(node) => createRefs("Notification", node)}
              />
            </CharacterWrapper>
          </Box>
        </Content>
      </Container>
      <About />
      <Portfolio />
      <Contact />
      <Signature />
    </>
  );
};

export default Home;
