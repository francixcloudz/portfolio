import { rgba } from "polished";
import styled from "styled-components";
import Image from "components/atoms/Image/Image";
import TicketsCheckoutForm from "components/organisms/TicketsCheckoutForm/TicketsCheckoutForm";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    flex-direction: column;
    > * {
      width: 100%;
      min-width: 100vw;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const FlyerWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Flyer = styled.div`
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    margin: auto;
  }
`;

export const FlyerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OneShotLogo = styled(Image)`
  width: 15rem;
  height: 15rem;
`;

export const BrandName = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.8rem;
  letter-spacing: 0.25rem;
  font-family: ${({ theme }) => theme.fonts.Cinzel.family};
`;

export enum DetailsVariant {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  ExtraLarge = "ExtraLarge",
}

export const Details = styled.p<{ variant?: DetailsVariant }>`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.LeagueGothic.family};
  letter-spacing: 0.1rem;
  margin-bottom: 1.5rem;
  text-shadow: 0.15rem 0.15rem 0 ${({ theme }) => rgba(theme.colors.white, 0.3)};

  ${({ variant }) => {
    switch (variant) {
      case DetailsVariant.Small:
        return `
          font-size: 1rem;
        `;
      case DetailsVariant.Medium:
        return `
          font-size: 1.2rem;
        `;
      case DetailsVariant.Large:
        return `
          font-size: 1.5rem;
        `;
      case DetailsVariant.ExtraLarge:
        return `
          font-size: 3rem;
        `;
      default:
        return "";
    }
  }};
`;

export const MobileCTAButton = styled.a`
  cursor: pointer;
  border-radius: 0.5rem;
  background: transparent;
  width: 90%;
  height: 100%;
  letter-spacing: 1px;
  font-family: ${({ theme }) => theme.fonts.FredokaOne.family};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.violet} 21px, transparent 1%)
      center,
    linear-gradient(${({ theme }) => theme.colors.violet} 21px, transparent 1%) center,
    ${({ theme }) => theme.colors.white};
  background-size: 22px 22px;
  padding: 1rem;
  margin: 5vw auto;
  display: none;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    display: block;
  }

  :hover {
    box-shadow: 0 6px 10px -3px ${({ theme }) => rgba(theme.colors.violet, 0.8)};
  }
`;

export const StyledTicketsCheckoutForm = styled(TicketsCheckoutForm)`
  width: 55%;
  max-height: 100vh;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 100%;
    padding: 5vw;
  }
`;
