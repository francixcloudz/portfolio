import { ReactElement, useContext, useRef, useState } from "react";
import Title from "components/atoms/Title/Title";
import Notification from "components/molecules/Notification/Notification";
import Loading, { LoadingContext } from "components/organisms/Loading/Loading";
import Nav from "components/organisms/Nav/Nav";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useRefSet, { RefSet } from "hooks/useRefSet";
import { AllRefsGsap } from "types";
import image from "assets/images/character.png";
import smileImage from "assets/images/character_smile.png";
import { Container, CharacterWrapper, Character, Content, Box } from "./Landing.styled";
import Loader from "./Loader/Loader";
import handleAnimations from "./utils/handleAnimations";

const Landing = (): ReactElement | null => {
  const { isLoaded } = useContext(LoadingContext);

  const [isSmileImage, setIsSmileImage] = useState(true);

  const portraitRef = useRef<HTMLDivElement>(null);
  const allRefs = useRef<AllRefsGsap>({});
  const ref = useRefSet(allRefs);

  useIsoLayoutEffect(() => {
    if (isLoaded) {
      handleAnimations({
        refs: new RefSet(allRefs.current),
        setIsSmileImage,
      });
    }
  }, [isLoaded]);

  return (
    <Loading>
      <Loader portraitRef={portraitRef} />
      <Container>
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
      </Container>
    </Loading>
  );
};

export default Landing;
