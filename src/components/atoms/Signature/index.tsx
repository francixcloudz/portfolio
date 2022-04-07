// Styled
import { Container, Image } from "./styled";

// Assets
import lenses from "assets/media/lenses_white.png";
import smile from "assets/media/smile_white.png";

const Signature: React.FC = () => {
  return (
    <Container>
      <a href="http://arrigoni.in" target="_blank" rel="noreferrer">
        <p>made by</p>
        <Image className="lenses" alt="lenses" src={lenses} />
        <Image className="smile" alt="smile" src={smile} />
      </a>
    </Container>
  );
};

export default Signature;
