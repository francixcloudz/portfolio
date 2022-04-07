// Dependencies
import type { StaticImageData } from "next/image";

// Styled
import { Container, TitleWrapper } from "./styled";

// Components
import { Emoji } from "components/templates/Styled";

type Props = {
  title: string;
  subtitle: string;
  emoji: StaticImageData;
  variant: "white" | "dark";
};

const Title: React.FC<Props> = ({ title, subtitle, emoji, variant }) => {
  return (
    <Container variant={variant}>
      <TitleWrapper>
        <h2>{title}</h2>
        <Emoji src={emoji} alt={title} />
      </TitleWrapper>
      <p>{subtitle}</p>
    </Container>
  );
};

export default Title;
