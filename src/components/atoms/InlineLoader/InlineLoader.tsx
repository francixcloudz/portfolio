import { ReactElement } from "react";
import { Container, Dot } from "./InlineLoader.styled";

const InlineLoader = (): ReactElement => (
  <Container>
    {new Array(4).fill(null).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Dot key={`InlineLoader-${index}`} />
    ))}
  </Container>
);

export default InlineLoader;
