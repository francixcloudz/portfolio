import { useState, forwardRef, RefAttributes, ForwardedRef } from "react";
import Logo from "components/atoms/Logo/Logo";
import useResponsive from "hooks/useResponsive";
import theme from "styles/theme/default";
import { Container, Burger, Links } from "./Nav.styled";

const Nav = forwardRef(
  ({ ...rest }: RefAttributes<HTMLDivElement>, ref: ForwardedRef<HTMLDivElement>) => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useResponsive(theme.breakpoints.xsmall);

    return (
      <Container ref={ref} {...rest}>
        <Logo />
        {isMobile && (
          <Burger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
            <span />
            <span />
            <span />
            <span />
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
  },
);

export default Nav;
