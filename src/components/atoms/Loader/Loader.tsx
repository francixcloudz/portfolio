import { ReactElement } from "react";
import { Container, DotContainer, Dot } from "./Loader.styled";

const Loader = (): ReactElement => (
  <Container>
    {new Array(4).fill(null).map((key) => (
      <DotContainer key={key}>
        <Dot />
      </DotContainer>
    ))}
  </Container>
);

export default Loader;
