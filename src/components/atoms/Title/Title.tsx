import { forwardRef } from "react";
import { Container, TitleWrapper } from "./Title.styled";
import type { TitleType } from "./Title.types";
import { Emoji } from "styles/Templates";

export const Title: TitleType = forwardRef(
  ({ title, subtitle, emoji, variant, principal }, ref) => {
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
