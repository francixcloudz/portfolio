// Styled
import { Container, Wrapper } from "./styled";

// Assets
import gif from "assets/media/loading.gif";
import lenses from "assets/media/lenses.png";
import { staggerContainer } from "assets/framer";

const LoadingScreen: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <Container variant={staggerContainer} fadeOut={!loading}>
      <Wrapper>
        <img className="loading" src={gif} alt="loading" />
        <img className="lenses" alt="lenses" src={lenses} />
      </Wrapper>
    </Container>
  );
};

export default LoadingScreen;
