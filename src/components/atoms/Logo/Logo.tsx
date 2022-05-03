import { Container, Image } from "./Logo.styled";
import { LogoType } from "./Logo.types";
import { baseUrl } from "data";
import lenses from "assets/images/lenses.png";
import smile from "assets/images/smile.png";
import lenses_white from "assets/images/lenses_white.png";
import smile_white from "assets/images/smile_white.png";

export const Logo: LogoType = ({ isWhite }) => (
  <Container href={baseUrl} isWhite={!!isWhite}>
    {isWhite && <p>made by</p>}
    <Image className="lenses" alt="lenses" src={isWhite ? lenses_white : lenses} />
    <Image className="smile" alt="smile" src={isWhite ? smile_white : smile} />
  </Container>
);
