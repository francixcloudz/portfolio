import NextImage, { ImageProps } from "next/image";
import { ForwardedRef, forwardRef } from "react";
import { Container } from "./Image.styled";

const Image = forwardRef(
  ({ src, className, style, ...rest }: ImageProps, ref: ForwardedRef<HTMLDivElement>) => (
    <Container ref={ref} className={className} style={style}>
      <NextImage src={src} layout="responsive" objectFit="contain" {...rest} />
    </Container>
  ),
);

export default Image;
