import { Container, DotContainer, Dot } from "./Loader.styled";
import { LoaderType } from "./Loader.types";

export const Loader: LoaderType = () => {
  return (
    <Container>
      {new Array(4).fill(null).map((key) => (
        <DotContainer key={key}>
          <Dot />
        </DotContainer>
      ))}
    </Container>
  );
};
