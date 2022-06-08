import styled, { css } from "styled-components";
import Image from "components/atoms/Image/Image";

export const Container = styled.div<{ isLoaded: boolean }>`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  *::-webkit-scrollbar {
    width: 0;
  }

  ${({ isLoaded, theme }) =>
    isLoaded &&
    css`
      animation: FADE_OUT 0.4s ease forwards;
      ${theme.animations.FADE_OUT}
    `}
`;

export const OneShotLogo = styled(Image)`
  position: fixed;
  width: 95vw;
  height: 95vw;
  max-width: 400px;
  max-height: 400px;
`;
