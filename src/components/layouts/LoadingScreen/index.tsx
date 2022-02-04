// Styled
import { Container } from "./styled";

// Assets
import gif from "assets/media/loading.gif";

const LoadingScreen: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <Container id="LoadingScreen" fadeOut={!loading}>
      <img src={gif} alt="loading" />
    </Container>
  );
};

export default LoadingScreen;
