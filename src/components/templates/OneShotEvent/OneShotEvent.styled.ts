import styled from "styled-components";
import Icon from "components/atoms/Icon/Icon";
import { COLORS } from "styles/theme";
import { FontFamily } from "styles/theme/Fonts";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${COLORS.BLACK};
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
  fill: ${COLORS.WHITE};
`;

export const BrandName = styled.p`
  color: ${COLORS.WHITE};
  font-size: 0.8rem;
  letter-spacing: 0.25rem;
  font-family: ${FontFamily.Cinzel};
`;

export enum DetailsVariant {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  ExtraLarge = "ExtraLarge",
}

export const Details = styled.p<{ variant: DetailsVariant }>`
  color: ${COLORS.WHITE};
  font-family: ${FontFamily.LeagueGothic};
  letter-spacing: 0.1rem;

  ${({ variant }) => {
    switch (variant) {
      case DetailsVariant.Small:
        return `
          font-size: 0.6rem;
        `;
      case DetailsVariant.Medium:
        return `
          font-size: 0.8rem;
        `;
      case DetailsVariant.Large:
        return `
          font-size: 1.2rem;
        `;
      case DetailsVariant.ExtraLarge:
        return `
          font-size: 1.5rem;
        `;
      default:
        return "";
    }
  }}
`;
