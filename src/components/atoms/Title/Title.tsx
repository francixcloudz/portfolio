import { StaticImageData } from "next/image";
import { ForwardedRef, forwardRef } from "react";
import { Emoji } from "styles/Templates";
import { Container, TitleWrapper } from "./Title.styled";
import { Variants } from "./utils/types";

export interface TitleProps {
  title: string;
  subtitle: string;
  variant: Variants;
  emoji?: StaticImageData;
  principal?: boolean;
}

const Title = forwardRef(
  (
    { title, subtitle, emoji, variant, principal }: TitleProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const BaseTitle = principal ? "h1" : "h2";
    const BaseSubtitle = principal ? "h2" : "p";

    return (
      <Container variant={variant} ref={ref}>
        <TitleWrapper>
          <BaseTitle className="title">{title}</BaseTitle>
          {emoji && <Emoji className="emoji" src={emoji} alt={title} />}
        </TitleWrapper>
        <BaseSubtitle className="subtitle">{subtitle}</BaseSubtitle>
      </Container>
    );
  },
);

export default Title;
