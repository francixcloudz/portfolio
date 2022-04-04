// Styled
import { Container } from "./styled";

// Assets
import lenses from "assets/media/lenses.png";
import smile from "assets/media/smile.png";

const Logo: React.FC = () => {
  return (
    <Container>
      <a href="http://arrigoni.in" target="_blank" rel="noreferrer">
        <p>made by</p>
        <img className="lenses" alt="lenses" src={lenses} />
        <img className="smile" alt="smile" src={smile} />
      </a>
    </Container>
  );
};

export default Logo;
