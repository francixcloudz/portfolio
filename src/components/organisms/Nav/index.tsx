// Dependencies
import { useState, forwardRef } from "react";

// Styled
import { Container, Logo, Burger, Links, Image } from "./styled";

// Assets
import lenses from "assets/media/lenses.png";
import smile from "assets/media/smile.png";

type Props = {
  className?: string;
};

const Nav: React.FC<Props & React.RefAttributes<HTMLDivElement>> = forwardRef(
  ({ className }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Container ref={ref} className={className}>
        <Logo href="http://arrigoni.in">
          <Image className="lenses" alt="lenses" src={lenses} />
          <Image className="smile" alt="smile" src={smile} />
        </Logo>
        <div>
          <Burger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Burger>
          <Links isOpen={isOpen}>
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
  }
);

export default Nav;
