import { useContext, useRef, useState } from "react";
import { Container, Section, CharacterWrapper, Character, Content, Box } from "./Home.styled";
import { HomeType } from "./Home.types";
import { handleAnimations, handleScroll } from "./Home.utils";
import About from "components/templates/HomeAbout";
import Portfolio from "components/templates/HomePortfolio";
import Contact from "components/templates/HomeContact";
import Logo from "components/atoms/Logo";
import Title from "components/atoms/Title";
import Notification from "components/molecules/Notification";
import Nav from "components/organisms/Nav";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useRefSet, { RefSet } from "hooks/useRefSet";
import image from "assets/images/character.png";
import smileImage from "assets/images/character_smile.png";
import type { AllRefsGsap } from "types";
import Loading, { LoadingContext } from "components/organisms/Loading";

export const Home: HomeType = () => {
  const { portraitRef, isVisible } = useContext(LoadingContext);
  if (!portraitRef || !isVisible) return null;

  const [isLoading, setIsLoading] = useState(true);
  const [isSmileImage, setIsSmileImage] = useState(true);

  const allRefs = useRef<AllRefsGsap>({});
  const ref = useRefSet(allRefs);

  useIsoLayoutEffect(() => {
    handleAnimations({
      refs: new RefSet(allRefs.current),
      isVisible,
      setIsSmileImage,
      setIsLoading,
    });
  }, [isVisible]);

  useIsoLayoutEffect(() => {
    if (!isLoading) handleScroll({ refs: new RefSet(allRefs.current) });
  }, [isLoading]);

  return (
    <Loading>
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
    </Loading>
  );
};
