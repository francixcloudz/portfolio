import styled, { css } from "styled-components";
import Icon from "components/atoms/Icon/Icon";

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

export const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 25%;
  top: 25%;
  width: 50%;
  height: 50%;
`;

export const OneShotLogo = styled(Icon.OneShot)`
  fill: ${({ theme }) => theme.colors.white};
`;
