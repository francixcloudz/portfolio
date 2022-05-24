import { baseUrl } from "data";
import lenses from "assets/images/lenses.png";
import lenses_white from "assets/images/lenses_white.png";
import smile from "assets/images/smile.png";
import smile_white from "assets/images/smile_white.png";
import { Container, Image } from "./Logo.styled";

interface LogoProps {
  isWhite?: boolean;
}

const Logo = ({ isWhite }: LogoProps) => (
  <Container href={baseUrl} isWhite={!!isWhite}>
    {isWhite && <p>made by</p>}
    <Image className="lenses" alt="lenses" src={isWhite ? lenses_white : lenses} />
    <Image className="smile" alt="smile" src={isWhite ? smile_white : smile} />
  </Container>
);

export default Logo;
