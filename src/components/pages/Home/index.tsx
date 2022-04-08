// Dependencies
import { useRef, useState } from "react";

// Files
import {
  Container,
  Section,
  CharacterWrapper,
  Character,
  Content,
  Box,
} from "./styled";
import type { Props } from "./types";
import { handleAnimations } from "./utils";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

// Components
import Logo from "components/atoms/Logo";
import Notification from "components/molecules/Notification";
import Nav from "components/organisms/Nav";

// Assets
import useIsoLayoutEffect from "assets/hooks/useIsoLayoutEffect";
import useRefSet from "assets/hooks/useRefSet";
import image from "assets/media/character.png";
import smileImage from "assets/media/character_smile.png";
import Title from "components/atoms/Title";

const Home: React.FC<Props> = ({ portraitRef, isVisible }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSmileImage, setIsSmileImage] = useState(true);
  const allRefs = useRef<{ [node: string]: gsap.TweenTarget }>({});
  const ref = useRefSet(allRefs);

  useIsoLayoutEffect(() => {
    handleAnimations({
      allRefs: allRefs.current,
      isVisible,
      setIsSmileImage,
      setIsLoading,
    });
  }, [isVisible]);

  return (
    <Container ref={(node) => ref("Container", node)}>
      <Section>
        <Nav ref={(node) => ref("Nav", node)} />
        <Content ref={(node) => ref("Content", node)}>
          <Box>
            <Title
              title="Francisco Arrigoni"
              subtitle="Sr. Frontend Engineer"
              variant="principal"
              ref={(node) => ref("Title", node)}
              principal
            />
            <CharacterWrapper>
              <Character
                ref={portraitRef}
                alt="portrait"
                src={isSmileImage ? smileImage : image}
                onMouseOver={() => setIsSmileImage(true)}
                onMouseOut={() => setIsSmileImage(false)}
              />
              <Notification ref={(node) => ref("Notification", node)} />
            </CharacterWrapper>
          </Box>
        </Content>
      </Section>
      {!isLoading && (
        <>
          <About />
          <Portfolio />
          <Contact />
          <Logo isWhite />
        </>
      )}
    </Container>
  );
};

export default Home;
