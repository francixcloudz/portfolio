import { useState, forwardRef, RefAttributes, ForwardedRef } from "react";
import Logo from "components/atoms/Logo/Logo";
import useResponsive from "hooks/useResponsive";
import theme from "styles/theme/default";
import { Container, Burger, Links, PortfolioLink, ContactLink } from "./Nav.styled";

const Nav = forwardRef(
  ({ ...rest }: RefAttributes<HTMLDivElement>, ref: ForwardedRef<HTMLDivElement>) => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useResponsive(theme.breakpoints.xsmall);

    return (
      <Container ref={ref} {...rest}>
        <Logo />
        <Links isOpen={isOpen}>
          <PortfolioLink href="#Portfolio">Portfolio</PortfolioLink>
          <ContactLink href="#Contact">Say Hello!</ContactLink>
        </Links>
        {isMobile && (
          <Burger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
            <span />
            <span />
            <span />
            <span />
          </Burger>
        )}
      </Container>
    );
  },
);

export default Nav;
