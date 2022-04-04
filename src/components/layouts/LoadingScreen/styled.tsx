// Dependencies
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

// Assets
import { COLORS, ANIMATIONS } from "assets/styles/constants";

export const Container = styled(motion.div)<{ fadeOut: boolean }>`
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

export const Wrapper = styled(motion.div)`
  position: relative;
  width: 50vw;
  height: 50vw;
  max-width: 400px;
  max-height: 400px;
`;

export const NotLoadedImage = styled(motion.img)`
  width: inherit;
  height: inherit;
  max-width: inherit;
  max-height: inherit;
`;

export const NotLoadedImageBackground = styled(motion.div)`
  position: absolute;
  top: 18%;
  left: 17.5%;
  width: 65.5%;
  height: 65.5%;
  border-radius: 50%;
  background: ${COLORS.YELLOW};
`;

export const LoadedImageBackground = styled(motion.div)`
  position: absolute;
  top: 4%;
  left: 27%;
  width: 45%;
  height: 45%;
  border-radius: 50%;
  background: ${COLORS.YELLOW};
`;

export const LoadedImage = styled(motion.img)`
  position: absolute;
  top: 4%;
  left: 27%;
  width: 45%;
  height: 45%;
  border-radius: 50%;
  box-shadow: 0 0 15px 0 rgba(${COLORS.YELLOW_RGB}, 0.5);
`;
