import styled from "styled-components";
import { COLORS } from "styles/constants";

export const Container = styled.div`
  svg {
    width: 100%;
    height: 100%;
  }

  .background {
    fill: none;
    stroke: transparent;
    stroke-width: 3;
  }
`;

export const ProgressPath = styled.path<{
  duration: number;
  delay: number;
  percentage: number;
}>`
  opacity: 0;
  fill: none;
  stroke-width: 1;
  stroke-linecap: round;
  animation: ${({ duration, delay }) => `progress ${duration}s ${delay}s ease-out forwards`};
  stroke: ${COLORS.PRIMARY};

  @keyframes progress {
    0% {
      opacity: 0;
      stroke-dasharray: 0 100;
    }
    100% {
      opacity: 1;
      stroke-dasharray: ${({ percentage }) => `${percentage} 100`};
    }
  }
`;
