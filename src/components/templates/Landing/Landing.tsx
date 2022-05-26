import { ReactElement, useRef, useState } from "react";
import Title from "components/atoms/Title/Title";
import Notification from "components/molecules/Notification/Notification";
import Nav from "components/organisms/Nav/Nav";
import useCurrentPath from "hooks/useCurrentPath";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useRedirection from "hooks/useRedirection";
import useRefSet, { RefSet } from "hooks/useRefSet";
import { AllRefsGsap } from "types";
import image from "assets/images/character.png";
import smileImage from "assets/images/character_smile.png";
import { Container, Section, CharacterWrapper, Character, Content, Box } from "./Landing.styled";
import Loading from "./Loading/Loading";
import { handleAnimations, handleScroll } from "./utils/handleAnimations";

const Landing = (): ReactElement | null => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSmileImage, setIsSmileImage] = useState(true);

  const portraitRef = useRef<HTMLDivElement>(null);
  const allRefs = useRef<AllRefsGsap>({});
  const ref = useRefSet(allRefs);

  useIsoLayoutEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("load", () => {
      useRedirection(useCurrentPath());
      setTimeout(() => setIsLoading(false), 6000);
    });
  }, []);

  useIsoLayoutEffect(() => {
    handleAnimations({
      refs: new RefSet(allRefs.current),
      isVisible: !isLoading,
      setIsSmileImage,
      setIsLoading,
    });
  }, [isLoading, portraitRef]);

  useIsoLayoutEffect(() => {
    if (!isLoading) handleScroll({ refs: new RefSet(allRefs.current) });
  }, [isLoading]);

  return (
    <>
      <Loading isLoading={isLoading} landingPortraitRef={portraitRef} />
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
      </Container>
    </>
  );
};

export default Landing;
