import styled from "styled-components";
import { ANIMATIONS, COLORS } from "styles/theme";

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  width: fit-content;
  margin: auto;
  display: inline-block;

  div {
    &:hover {
      transform: translateY(-7.5%);
    }
  }
`;

export const Box = styled.div`
  position: absolute;
  width: max-content;
  background: rgba(${COLORS.BLACK_RGB}, 0.9);
  color: ${COLORS.WHITE};
  padding: 7.5px;
  border-radius: 5px;
  bottom: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  display: ${(props: { show: boolean }) => (props.show ? "block" : "none")};
  animation: ${(props: { show: boolean }) =>
    props.show ? "EASE_IN_BOTTOM 0.5s ease forwards" : "none"};
  ${ANIMATIONS.EASE_IN_BOTTOM}

  p {
    display: block;
  }

  div {
    width: fit-content;
    height: fit-content;

    &:hover {
      transform: translateY(-3px);
    }
  }

  ::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 7.5px;
    border-width: 7.5px;
    border-style: solid;
    border-color: rgba(${COLORS.BLACK_RGB}, 0.7) transparent transparent transparent;
  }
`;
