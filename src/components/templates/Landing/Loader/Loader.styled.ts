import styled, { css } from "styled-components";
import Image from "components/atoms/Image/Image";

export const Container = styled.div<{ isDelayLoaded: boolean }>`
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

  ${({ isDelayLoaded, theme }) =>
    isDelayLoaded
      ? `
      animation: FADE_OUT 0.4s ease forwards;
      ${theme.animations.FADE_OUT}
      `
      : ``}
`;

export const Wrapper = styled.div`
  position: relative;
  width: 95vw;
  height: 95vw;
  max-width: 400px;
  max-height: 400px;

  .progress {
    position: absolute;
    top: 0%;
    left: 23%;
    width: 53%;
    height: 53%;
    border-radius: 50%;
  }
`;

export const LoadingImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  max-width: inherit;
  max-height: inherit;
`;

const portraitStyle = css`
  opacity: 0;
  position: absolute;
  top: 4%;
  left: 27%;
  width: 45%;
  height: 45%;
  border-radius: 50%;
`;

export const Portrait = styled(Image)`
  ${portraitStyle}
`;

export const PortraitFixed = styled(Portrait)`
  position: fixed;
`;

export const ScreenshotWrapper = styled.div`
  ${portraitStyle}
  background: ${({ theme }) => theme.colors.white};
`;

export const CameraIcon = styled(Image)`
  opacity: 0;
  position: absolute;
  top: -4%;
  left: 50%;
  width: 5%;
  height: 5%;
  transform: translateX(-50%);
`;
