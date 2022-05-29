import styled from "styled-components";
import ImageTemplate from "components/atoms/Image/Image";
import { BREAKPOINTS, COLORS } from "styles/theme";

export const Container = styled.div`
  background: ${COLORS.PRIMARY};
  width: 100vw;
  min-height: 100vh;

  h1,
  h2 {
    color: ${COLORS.PRIMARY};
  }
`;

export const Content = styled.div`
  background: linear-gradient(90deg, ${COLORS.WHITE} 21px, transparent 1%) center,
    linear-gradient(${COLORS.WHITE} 21px, transparent 1%) center, ${COLORS.PRIMARY};
  padding-top: 20vh;
  background-size: 1px 1px;
  border-radius: 0 0 0 0;
  min-height: 100vh;
`;

export const Box = styled.div`
  margin: auto;
  max-width: 95%;
  width: 600px;
`;

export const CharacterWrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
`;

export const Character = styled(ImageTemplate)`
  display: block;
  width: 200px;
  height: 200px;
  margin: 30px auto;
  border-radius: 50%;
  box-shadow: 0 0 15px 0 rgba(${COLORS.YELLOW_RGB}, 0.5);

  @media only screen and (max-width: ${BREAKPOINTS.MOBILE}px) {
    width: 40vw;
    height: 40vw;
  }
`;
