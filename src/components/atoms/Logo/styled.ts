// Dependencies
import styled from "styled-components";

// Components
import ImageTemplate from "components/templates/Image";

// Assets
import { BREAKPOINTS, COLORS } from "assets/styles/constants";

export const Image = styled(ImageTemplate)``;

export const Container = styled.a<{ isWhite: boolean }>`
  cursor: pointer;
  * {
    cursor: pointer;
  }

  ${({ isWhite }) =>
    isWhite
      ? `
      width: 50px;
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto 15px;
      `
      : `
      background: ${COLORS.WHITE};
      width: 100px;
      position: relative;
      @media only screen and (max-width: ${BREAKPOINTS.TABLET}px) {
        width: 80px;
      }
      `}

  ${Image}.lenses {
    display: block;
    width: 100%;
    transition: transform 0.5s;
  }

  ${Image}.smile {
    width: 15%;
    margin: 0 auto;
    display: block;
    opacity: 0;
    transition: opacity 0.5s;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &:hover {
    .lenses {
      transform: translateY(${({ isWhite }) => (isWhite ? "-3px" : "-5px")});
    }
    .smile {
      opacity: 1;
    }
  }

  p {
    font-family: "Nunito", sans-serif;
    color: ${COLORS.WHITE};
    font-weight: 700;
    font-size: 8px;
    margin-bottom: 5px;
  }
`;