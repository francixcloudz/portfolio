import { forwardRef } from "react";
import NextImage from "next/image";
import { Container } from "./Image.styled";
import { ImageType } from "./Image.types";

export const Image: ImageType = forwardRef(({ src, className, style, ...rest }, ref) => (
  <Container ref={ref} className={className} style={style}>
    <NextImage src={src} layout="responsive" objectFit="contain" {...rest} />
  </Container>
));
