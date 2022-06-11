import { forwardRef } from "react";
import { Container, DotsWrapper, DotContainer, Dot } from "./Loader.styled";

const Loader = forwardRef<HTMLDivElement>(({ ...rest }, ref) => (
  <Container ref={ref} {...rest}>
    <DotsWrapper>
      {new Array(4).fill(null).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <DotContainer key={`Loader-${index}`}>
          <Dot />
        </DotContainer>
      ))}
    </DotsWrapper>
  </Container>
));

export default Loader;
