// Dependencies
import { useState } from "react";

// Styled
import { Container } from "./styled";

// Assets
import gif from "assets/media/loading.gif";

const LoadingScreen: React.FC<{ time: number }> = ({ time }) => {
  const [fadeOut, setFadeOut] = useState(false);

  setTimeout(() => setFadeOut(true), time - 500);

  return (
    <Container id="LoadingScreen" fadeOut={fadeOut}>
      <img src={gif} alt="loading" />
    </Container>
  );
};

export default LoadingScreen;
