// Files
import { Container, Image } from "./styled";
import type { Props } from "./types";

// Assets
import { baseUrl } from "assets/constants";
import lenses from "assets/media/lenses.png";
import smile from "assets/media/smile.png";
import lenses_white from "assets/media/lenses_white.png";
import smile_white from "assets/media/smile_white.png";

const Logo: React.FC<Props> = ({ isWhite }) => (
  <Container href={baseUrl} isWhite={!!isWhite}>
    {isWhite && <p>made by</p>}
    <Image
      className="lenses"
      alt="lenses"
      src={isWhite ? lenses_white : lenses}
    />
    <Image className="smile" alt="smile" src={isWhite ? smile_white : smile} />
  </Container>
);

export default Logo;
