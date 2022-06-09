import { ReactElement } from "react";
import { Container, DotContainer, Dot } from "./Loader.styled";

const Loader = (): ReactElement => (
  <Container>
    {new Array(4).fill(null).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <DotContainer key={`Loader-${index}`}>
        <Dot />
      </DotContainer>
    ))}
  </Container>
);

export default Loader;
