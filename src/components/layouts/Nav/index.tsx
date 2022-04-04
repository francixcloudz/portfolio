// Dependencies
import { useRef } from "react";

// Styled
import { Container, Logo, Burger, Links } from "./styled";

// Assets
import lenses from "assets/media/lenses.png";
import smile from "assets/media/smile.png";

const Nav: React.FC = () => {
  const links = useRef<HTMLDivElement>(null);
  const handleMenu = (event: React.BaseSyntheticEvent) => {
    if (links.current !== null) {
      event.currentTarget.classList.toggle("open");
      links.current.classList.toggle("active");
    }
  };

  return (
    <Container>
      <Logo href="http://arrigoni.in">
        <img className="lenses" alt="lenses" src={lenses} />
        <img className="smile" alt="smile" src={smile} />
      </Logo>
      <div>
        <Burger onClick={handleMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Burger>
        <Links ref={links}>
          <a className="portfolio scroll" href="#Portfolio">
            Portfolio
          </a>
          <a className="contact scroll" href="#Contact">
            Say Hello!
          </a>
        </Links>
      </div>
    </Container>
  );
};

export default Nav;
