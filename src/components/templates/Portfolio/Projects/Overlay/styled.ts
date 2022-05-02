// Dependencies
import styled from "styled-components";

// Components
import ImageTemplate from "components/templates/Image";

// Assets
import { COLORS, FONT_FAMILY, ANIMATIONS } from "assets/styles/constants";

export const Image = styled(ImageTemplate)``;

export const Content = styled.div`
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background: linear-gradient(90deg, ${COLORS.PRIMARY} 21px, transparent 1%)
      center,
    linear-gradient(${COLORS.PRIMARY} 21px, transparent 1%) center,
    ${COLORS.WHITE};
  background-size: 22px 22px;
  z-index: 4;

  > .box {
    max-width: 350px;
    margin: auto;
    padding: 10px;
    text-align: center;
  }
`;

export const Container = styled.div<{ isActive: boolean }>`
  display: block;
  z-index: 3;

  ${({ isActive }) =>
    isActive
      ? `
      ${Content} {
        opacity: 1;
        display: flex;
      }`
      : ""}

  h3,
  p {
    color: ${COLORS.WHITE};
  }

  h3 {
    letter-spacing: 1.5px;
  }

  p {
    margin: 0px;
    font-size: 0.8rem;
  }

  .button {
    box-shadow: 0 3px 6px 0 rgb(${COLORS.WHITE_RGB}, 0.6);
    padding: 5px;
    border-radius: 5px;
    background: white;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    color: ${COLORS.YELLOW};
    width: 35px;
    margin: 10px 10px 0;
  }

  .working {
    font-size: 12px;
    font-weight: 700;

    ${Image} {
      cursor: default;
      display: block;
      margin: 10px auto;
      width: 32px;
      filter: drop-shadow(0 4px 2px rgba(${COLORS.BLACK_RGB}, 0.5));
    }
  }
`;

export const Stack = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: fit-content;
  margin: auto;
  padding: 0.3rem 0 0.3rem;

  svg,
  ${Image} {
    width: 1.3rem;
    margin: 0 0.15rem;
  }
`;

export const MainButton = styled.span<{ isActive: boolean }>`
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

  ${({ isActive }) =>
    isActive ? `box-shadow: 0 0 15px 0 rgb(${COLORS.WHITE_RGB}, 0.75)` : ""}
`;
