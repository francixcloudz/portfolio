// Dependencies
import { forwardRef } from "react";

// Files
import { Container, TitleWrapper } from "./styled";
import type { Props } from "./types";

// Components
import { Emoji } from "components/templates/Styled";

const Title: React.FC<Props & React.RefAttributes<HTMLDivElement>> = forwardRef(
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
  }
);

export default Title;
