import styled from "styled-components";
import { COLORS, ANIMATIONS } from "styles/theme";

export const Container = styled.div<{ isLoaded: boolean }>`
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

  *::-webkit-scrollbar {
    width: 0;
  }

  ${({ isLoaded }) =>
    isLoaded
      ? `
      animation: FADE_OUT 0.4s ease forwards;
      ${ANIMATIONS.FADE_OUT}`
      : ``}
`;

export const SvgWrapper = styled.div``;
export const HandSvg = styled.div``;
export const GlassSvg = styled.div``;
export const BrainSvg = styled.div``;
