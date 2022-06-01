import { ReactElement, useContext, useRef, useState } from "react";
import SectionTitle from "components/atoms/SectionTitle/SectionTitle";
import Notification from "components/molecules/Notification/Notification";
import { LoadingContext } from "components/organisms/Loading/Loading";
import Nav from "components/organisms/Nav/Nav";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useRefSet, { RefSet } from "hooks/useRefSet";
import { AllRefsGsap } from "types";
import image from "assets/images/character.png";
import smileImage from "assets/images/character_smile.png";
import { Container, CharacterWrapper, Character, Content, Box } from "./Landing.styled";
import Loader from "./Loader/Loader";
import useAnimation from "./utils/useAnimation";

const Landing = (): ReactElement => {
  const { isLoaded } = useContext(LoadingContext);

  const [isSmileImage, setIsSmileImage] = useState(true);

  const mainImage = useRef<HTMLDivElement>(null);
  const allRefs = useRef<AllRefsGsap>({});
  const ref = useRefSet(allRefs);

  const { setAnimation, startAnimation, clearAnimation } = useAnimation({
    refs: new RefSet(allRefs.current),
    setIsSmileImage,
  });

  useIsoLayoutEffect(() => {
    setAnimation();
    if (isLoaded) startAnimation();
    return () => {
      clearAnimation();
    };
  }, [isLoaded]);

  return (
    <>
      <Loader mainImage={mainImage} isLoaded={isLoaded} />
      <Container>
        <Nav ref={(node) => ref("Nav", node)} />
        <Content ref={(node) => ref("Content", node)}>
          <Box>
            <SectionTitle
              title="Francisco Arrigoni"
              subtitle="Sr. Frontend Engineer"
              ref={(node) => ref("Title", node)}
              principal
            />
            <CharacterWrapper>
              <Character
                ref={mainImage}
                alt="portrait"
                src={isSmileImage ? smileImage : image}
                onMouseOver={() => setIsSmileImage(true)}
                onMouseOut={() => setIsSmileImage(false)}
              />
              <Notification ref={(node) => ref("Notification", node)} />
            </CharacterWrapper>
          </Box>
        </Content>
      </Container>
    </>
  );
};

export default Landing;
