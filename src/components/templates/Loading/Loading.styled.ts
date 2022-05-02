import styled, { css } from "styled-components";
import Image from "components/templates/Image";
import { COLORS, ANIMATIONS } from "styles/constants";

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

  *::-webkit-scrollbar {
    width: 0;
  }

  ${({ fadeOut }) =>
    fadeOut
      ? `animation: FADE_OUT 0.4s ease forwards;
    ${ANIMATIONS.FADE_OUT}`
      : ``}
`;

export const Wrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 50vw;
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
  background: ${COLORS.WHITE};
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
