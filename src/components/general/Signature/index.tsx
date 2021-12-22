// Styled
import { Container } from "./styled";

// Assets
import lenses from "assets/components/Signature/lenses.png";
import smile from "assets/components/Signature/smile.png";

const Logo: React.FC = () => {
  return (
    <Container id="Signature">
      <a href="http://franarrigoni.vercel.app" target="_blank" rel="noreferrer">
        <p>made by</p>
        <img className="lenses" alt="lenses" src={lenses} />
        <img className="smile" alt="smile" src={smile} />
      </a>
    </Container>
  );
};

export default Logo;
