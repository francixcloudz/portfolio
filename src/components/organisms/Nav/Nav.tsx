import { useState, forwardRef } from "react";
import { Container, Burger, Links } from "./Nav.styled";
import { NavType } from "./Nav.types";
import Logo from "components/atoms/Logo";
import useResponsive from "hooks/useResponsive";
import { BREAKPOINTS } from "styles/constants";

export const Nav: NavType = forwardRef(({ ...rest }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useResponsive(BREAKPOINTS.MOBILE);

  return (
    <Container ref={ref} {...rest}>
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
});
