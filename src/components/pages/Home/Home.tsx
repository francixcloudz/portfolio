import { ReactElement, useContext, useRef, useState } from "react";
import Logo from "components/atoms/Logo/Logo";
import PageContainer from "components/atoms/PageContainer/PageContainer";
import Title from "components/atoms/Title/Title";
import Notification from "components/molecules/Notification/Notification";
import Nav from "components/organisms/Nav/Nav";
import About from "components/templates/About/About";
import Contact from "components/templates/Contact/Contact";
import Portfolio from "components/templates/Portfolio/Portfolio";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useRefSet, { RefSet } from "hooks/useRefSet";
import { AllRefsGsap } from "types";
import image from "assets/images/character.png";
import smileImage from "assets/images/character_smile.png";
import { Container, Section, CharacterWrapper, Character, Content, Box } from "./Home.styled";
import Loading, { LoadingContext } from "./Loading/Loading";
import { handleAnimations, handleScroll } from "./utils/animations";

const Home = (): ReactElement | null => {
  const { portraitRef, isVisible } = useContext(LoadingContext);
  if (!isVisible) return null;

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

  console.log("hola");
  return (
    <PageContainer>
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
    </PageContainer>
  );
};

export default Home;
