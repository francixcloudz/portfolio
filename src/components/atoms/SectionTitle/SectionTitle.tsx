import { StaticImageData } from "next/image";
import { ForwardedRef, forwardRef } from "react";
import { Container, TitleWrapper, Emoji } from "./SectionTitle.styled";

export type Variants = "white" | "black" | "principal";

export interface SectionTitleProps {
  title: string;
  subtitle: string;
  isWhite?: boolean;
  emoji?: StaticImageData;
  principal?: boolean;
}

const SectionTitle = forwardRef(
  (
    { title, subtitle, emoji, isWhite, principal }: SectionTitleProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const BaseTitle = principal ? "h1" : "h2";
    const BaseSubtitle = principal ? "h2" : "p";

    return (
      <Container ref={ref} isWhite={isWhite}>
        <TitleWrapper>
          <BaseTitle className="title">{title}</BaseTitle>
          {emoji && <Emoji className="emoji" src={emoji} alt={title} />}
        </TitleWrapper>
        <BaseSubtitle className="subtitle">{subtitle}</BaseSubtitle>
      </Container>
    );
  },
);

export default SectionTitle;
