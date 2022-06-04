import styled from "styled-components";
import ImageTemplate from "components/atoms/Image/Image";

export const Image = styled(ImageTemplate)``;

export const Container = styled.a<{ isWhite: boolean }>`
  cursor: pointer;
  * {
    cursor: pointer;
  }

  ${({ isWhite, theme }) =>
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
      background: ${theme.colors.white};
      width: 100px;
      position: relative;
      
      @media only screen and (max-width: ${theme.breakpoints.medium}px) {
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
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fonts.Nunito.weights.Bold};
    font-size: 8px;
    margin-bottom: 5px;
  }
`;
