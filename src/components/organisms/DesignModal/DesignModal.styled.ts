import styled from "styled-components";
import ImageTemplate from "components/atoms/Image";
import { COLORS, FONT_FAMILY, ANIMATIONS } from "styles/theme";

export const Image = styled(ImageTemplate)``;

export const Container = styled.div`
  z-index: 9;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;

  h2 {
    width: 100%;
    text-align: center;
  }

  .overlay {
    background: rgba(${COLORS.BLACK_RGB}, 0.85);
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
  }

  .modal {
    z-index: 10;
    background: linear-gradient(90deg, ${COLORS.WHITE} 21px, transparent 1%) center,
      linear-gradient(${COLORS.WHITE} 21px, transparent 1%) center, ${COLORS.PRIMARY};
    background-size: 22px 22px;
    box-shadow: 0 0 30px 0 rgba(${COLORS.PRIMARY_RGB}, 0.7);
    border-radius: 20px;
    width: 90%;
    height: fit-content;
    padding: 2rem;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 800px;
    max-height: 80vh;
    overflow: overlay;
  }

  &[data-state="true"] .Modal {
    animation: FADE_IN_TOP 2.5s linear;
    ${ANIMATIONS.FADE_IN_TOP}
  }
`;

export const Close = styled.span`
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 1rem;
  border-radius: 50%;
  background: white;
  z-index: 5;
  color: #000000;
  font-family: ${FONT_FAMILY.PRIMARY};
  box-shadow: 0 0 10px 0 rgb(${COLORS.PRIMARY_RGB}, 0.5);
  animation: ZOOM 0.3s linear;
  ${ANIMATIONS.ZOOM}

  &:hover {
    color: ${COLORS.PRIMARY};
    box-shadow: 0 0 10px 0 rgb(${COLORS.PRIMARY_RGB}, 0.7);
  }
`;

export const PageList = styled.div`
  display: flex;
  flex-direction: column;

  p {
    position: absolute;
    margin: 0;
    background: rgba(${COLORS.WHITE_RGB}, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 0.5rem 0.7rem;
    border-radius: 15px;
    box-shadow: 0 0 5px 0 rgba(${COLORS.BLACK_RGB}, 0.2);
    font-size: 0.8rem;
    bottom: 0.5rem;
    left: 0.5rem;
    opacity: 0;
    transform: scale(0);
    animation: EASE_IN 0.5s 0.5s ease forwards;
    ${ANIMATIONS.EASE_IN}
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    background: white;
    z-index: 5;
    color: #000000;
    font-family: ${FONT_FAMILY.PRIMARY};
    box-shadow: inset 0 0 0.5rem 0 rgb(${COLORS.PRIMARY_RGB}, 0.2);
  }

  ${Image} {
    background: white;
    max-width: 100%;
  }

  .wrapper {
    position: relative;
    max-height: 400px;
    border-radius: 20px;
    margin: 20px auto;
    box-shadow: 0 5px 10px -2.5px rgba(${COLORS.PRIMARY_RGB}, 0.5);
    width: 100%;
    height: 100%;
    background: ${COLORS.WHITE};
  }

  .page {
    max-height: 400px;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    overflow-y: overlay;
  }
`;
