import { forwardRef } from "react";
import { Container, Dot } from "./InlineLoader.styled";

const InlineLoader = forwardRef<HTMLDivElement>(({ ...rest }, ref) => (
  <Container ref={ref} {...rest}>
    {new Array(4).fill(null).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Dot key={`InlineLoader-${index}`} />
    ))}
  </Container>
));

export default InlineLoader;
