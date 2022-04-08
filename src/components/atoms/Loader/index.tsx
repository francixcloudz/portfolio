// Files
import { Container } from "./styled";

const Loader: React.FC = () => {
  return (
    <Container>
      {new Array(4).fill(null).map((key) => (
        <div className="dot-container" key={key}>
          <div className="dot"></div>
        </div>
      ))}
    </Container>
  );
};

export default Loader;
