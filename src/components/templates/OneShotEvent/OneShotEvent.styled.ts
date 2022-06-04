import styled from "styled-components";
import Button from "components/atoms/Button/Button";
import Icon from "components/atoms/Icon/Icon";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${({ theme }) => theme.colors.black};
`;

export const FlyerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const Details = styled.p<{ variant: DetailsVariant }>`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.LeagueGothic.family};
  letter-spacing: 0.1rem;

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
          font-size: 1.4rem;
        `;
      case DetailsVariant.ExtraLarge:
        return `
          font-size: 1.8rem;
        `;
      default:
        return "";
    }
  }}
`;

export const MobileCTAButton = styled(Button)``;
