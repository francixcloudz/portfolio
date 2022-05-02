import styled from "styled-components";
import { COLORS } from "styles/constants";

export const Container = styled.div`
  will-change: transform;
  animation: 1.4s linear rotation;
  animation-iteration-count: infinite;
  position: relative;
  height: 70px;
  width: 70px;
  margin: 10px auto 0;
`;

export const DotContainer = styled.div`
  position: absolute;
  height: 70px;
  width: 70px;

  &:nth-of-type(2) {
    transform: rotate(90deg);
  }

  &:nth-of-type(3) {
    transform: rotate(180deg);
  }

  &:nth-of-type(4) {
    transform: rotate(270deg);
  }
`;

export const Dot = styled.div`
  will-change: transform;
  animation: 1.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) pulseSize;
  animation-iteration-count: infinite;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: calc(10px / -2);
  margin-top: calc(10px / -2);
  height: 10px;
  width: 10px;
  border-radius: calc(80px + 20px);
  background-color: ${COLORS.PRIMARY};

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    8% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(470deg);
    }
  }

  @keyframes pulseSize {
    8% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(calc(70px / -2)) scale(0.6);
    }
    56% {
      transform: translateY(calc(70px / -2)) scale(0.6);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }
`;
