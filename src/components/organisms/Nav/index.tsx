// Dependencies
import { useState, forwardRef } from "react";

// Files
import { Container, Burger, Links } from "./styled";
import type { Props } from "./types";

// Components
import Logo from "components/atoms/Logo";

// Assets
import useResponsive from "assets/hooks/useResponsive";
import { BREAKPOINTS } from "assets/styles/constants";

const Nav: React.FC<Props & React.RefAttributes<HTMLDivElement>> = forwardRef(
  ({ className }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useResponsive(BREAKPOINTS.MOBILE);

    return (
      <Container ref={ref} className={className}>
        <Logo />
        {isMobile && (
          <Burger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Burger>
        )}
        <Links isOpen={isOpen}>
          <a className="portfolio" href="#Portfolio">
            Portfolio
          </a>
          <a className="contact" href="#Contact">
            Say Hello!
          </a>
        </Links>
      </Container>
    );
  }
);

export default Nav;
