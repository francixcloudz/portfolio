// Dependencies
import { forwardRef } from "react";
import NextImage, { ImageProps } from "next/image";

// Files
import { Container } from "./styled";

const Image: React.FC<ImageProps & React.RefAttributes<HTMLDivElement>> =
  forwardRef(({ src, className, style, ...rest }, ref) => (
    <Container ref={ref} className={className} style={style}>
      <NextImage src={src} layout="responsive" objectFit="contain" {...rest} />
    </Container>
  ));

export default Image;
