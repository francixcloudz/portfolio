// Dependencies
import styled from "styled-components";

// Components
import { StyledBackground } from "components/templates/Styled";

// Assets
import { COLORS, BREAKPOINTS, ANIMATIONS } from "assets/styles/constants";

export const Container = styled.div`
  z-index: 9;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

export const Overlay = styled.div`
  z-index: 8;
  background: rgba(${COLORS.BLACK_RGB}, 0.85);
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

export const Box = styled.div<{ overflow?: boolean; fitContent?: boolean }>`
  z-index: 10;
  ${StyledBackground}
  border-radius: 20px;
  padding: 2rem;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  max-width: 800px;
  max-height: 80vh;
  overflow: ${({ overflow }) => (overflow ? "overlay" : "hidden")};
  height: fit-content;
  width: ${({ fitContent }) => (fitContent ? "fit-content" : "90%")};

  &[data-state="true"] {
    animation: FADE_IN_TOP 4s ease forwards;
    ${ANIMATIONS.FADE_IN_TOP}
  }

  @media only screen and (max-width: ${BREAKPOINTS.MOBILE}px) {
    width: 85vw;
    height: 85vh;
  }
`;

export const Content = styled.div`
  display: block;
  width: 100%;
  margin: 0;

  > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Close = styled.span`
  position: absolute;
  cursor: pointer;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(${COLORS.PRIMARY_RGB}, 0.5);
  animation: ZOOM 0.3s linear;
  ${ANIMATIONS.ZOOM}
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(${COLORS.PRIMARY_RGB}, 1);
  }

  * {
    cursor: pointer;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;
