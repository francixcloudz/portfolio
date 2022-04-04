// Styled
import {
  Container,
  Wrapper,
  NotLoadedImageBackground,
  NotLoadedImage,
  LoadedImageBackground,
  LoadedImage,
} from "./styled";

// Assets
import gif from "assets/media/loading.gif";
import loaded from "assets/media/character.png";

const LoadingScreen: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <Container fadeOut={!loading}>
      <Wrapper>
        {/* <NotLoadedImageBackground variants={scaleIn} /> */}
        <NotLoadedImage
          src={gif}
          initial=""
          animate={{ opacity: 0, transition: { delay: 3 } }} // TODO: activate when finishes loading https://www.notion.so/Motion-AnimateSharedLayout-54ee0a875ce342e3b9993a956a791794
        />
        {/* First plays the circular loader like taking a snapshot, the appears the background, the the image */}
        <LoadedImageBackground
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
        />
        <LoadedImage
          src={loaded}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2 } }}
        />
      </Wrapper>
    </Container>
  );
};

export default LoadingScreen;
