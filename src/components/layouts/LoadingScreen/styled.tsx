// Dependencies
import styled from "styled-components";

// Assets
import { COLORS, ANIMATIONS } from "assets/styles/constants";

export const Container = styled.div<{ fadeOut: boolean }>`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${COLORS.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 50vw;
    height: 50vw;
    max-width: 400px;
    max-height: 400px;
  }

  *::-webkit-scrollbar {
    width: 0;
  }

  ${({ fadeOut }) =>
    fadeOut
      ? `animation: FADE_OUT 0.4s ease forwards;
    ${ANIMATIONS.FADE_OUT}`
      : ``}
`;
