// Dependencies
import styled from "styled-components";

// Assets
import { COLORS, ANIMATIONS } from "assets/styles/constants";

export const Container = styled.div`
  background: linear-gradient(90deg, ${COLORS.WHITE} 21px, transparent 1%)
      center,
    linear-gradient(${COLORS.WHITE} 21px, transparent 1%) center,
    ${COLORS.PRIMARY};
  background-size: 22px 22px;
  margin: 0;

  h2,
  h3,
  p {
    color: ${COLORS.WHITE};
  }
`;

export const Content = styled.div`
  background: ${COLORS.PRIMARY};
  padding: 20vh 0;
  border-radius: 0 0 15vw 15vw;
  margin: 0;
`;

export const Box = styled.div`
  margin: auto;
  max-width: 95%;
  width: 510px;
`;

export const Resume = styled.div`
  background: linear-gradient(90deg, ${COLORS.YELLOW} 21px, transparent 1%)
      center,
    linear-gradient(${COLORS.YELLOW} 21px, transparent 1%) center,
    ${COLORS.PRIMARY};
  background-size: 22px 22px;
  display: flex;
  flex-direction: column;
  text-align: center;
  vertical-align: middle;
  box-shadow: 0 0 15px 0 rgba(${COLORS.BLACK_RGB}, 0.3);
  width: 18em;
  height: 18em;
  padding: 4vh;
  margin: 0 auto;
  animation: PULSE 0.4s ease infinite alternate;
  ${ANIMATIONS.PULSE}

  > .box {
    margin: auto;

    a {
      display: block;
      width: fit-content;
      margin: 0 auto;
      padding: 10px 30px;
      border-radius: 20px;
      font-weight: 700;
      letter-spacing: 1px;
      color: ${COLORS.PRIMARY};
      border: 2px solid ${COLORS.PRIMARY};
      cursor: pointer;
      box-shadow: 0 6px 10px -3px rgba(${COLORS.PRIMARY_RGB}, 0.5);
      background: linear-gradient(90deg, ${COLORS.YELLOW} 21px, transparent 1%)
          center,
        linear-gradient(${COLORS.YELLOW} 21px, transparent 1%) center,
        ${COLORS.YELLOW};
      background-size: 22px 22px;

      &:hover {
        color: white;
        background: linear-gradient(
              90deg,
              ${COLORS.PRIMARY} 21px,
              transparent 1%
            )
            center,
          linear-gradient(${COLORS.PRIMARY} 21px, transparent 1%) center,
          ${COLORS.WHITE};
        background-size: 22px 22px;
      }
    }
  }
`;
