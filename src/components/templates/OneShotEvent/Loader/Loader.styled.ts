import styled from "styled-components";

export const Container = styled.div<{ isLoaded: boolean }>`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.white};
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
          ${({ theme }) => theme.animations.FADE_OUT}
`
      : ``}
`;

export const SvgWrapper = styled.div``;
export const HandSvg = styled.div``;
export const GlassSvg = styled.div``;
export const BrainSvg = styled.div``;
