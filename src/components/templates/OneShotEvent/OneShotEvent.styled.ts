import { rgba } from "polished";
import styled from "styled-components";
import Icon from "components/atoms/Icon/Icon";
import TicketsCheckoutForm from "components/organisms/TicketsCheckoutForm/TicketsCheckoutForm";

export const Container = styled.div<{ isMobile: boolean }>`
  min-width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  ${({ isMobile }) =>
    isMobile
      ? `
      flex-direction: column;
        > * {
          width: 100%;
          min-width: 100vw;
          min-height: 100vh;
          padding: 5vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        `
      : ``}
`;

export const FlyerWrapper = styled.div<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? "100%" : "30%")};
  display: flex;
  flex-direction: column;
  justify-content: ${({ isMobile }) => (isMobile ? "space-between" : "center")};
  align-items: center;
`;

export const Flyer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ isMobile }) =>
    isMobile
      ? `
          margin: auto;
        `
      : ``}
`;

export const OneShotLogo = styled(Icon.OneShot)`
  width: 12.5rem;
  height: 12.5rem;
  fill: ${({ theme }) => theme.colors.white};
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
          font-size: 0.8rem;
        `;
      case DetailsVariant.Medium:
        return `
          font-size: 1rem;
        `;
      case DetailsVariant.Large:
        return `
          font-size: 1.2rem;
        `;
      case DetailsVariant.ExtraLarge:
        return `
          font-size: 2.2rem;
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
  width: 100%;
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

  :hover {
    box-shadow: 0 6px 10px -3px ${({ theme }) => rgba(theme.colors.violet, 0.8)};
  }
`;

export const StyledTicketsCheckoutForm = styled(TicketsCheckoutForm)`
  width: ${({ isMobile }) => (isMobile ? "100%" : "55%")};
`;
