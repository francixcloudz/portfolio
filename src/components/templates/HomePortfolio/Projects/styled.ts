import styled from "styled-components";
import ImageTemplate from "components/atoms/Image";
import { COLORS, BREAKPOINTS } from "styles/theme";

export const Container = styled.div`
  display: block;
  margin: auto;
  max-width: 95%;
  width: 1500px;

  @media only screen and (min-width: ${BREAKPOINTS.TABLET}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Project = styled.div`
  cursor: n-resize;
  position: relative;
  margin: 20px auto;
  display: block;
  flex: 1;
  border-radius: 20px;
  box-shadow: 0 5px 10px -2.5px rgba(${COLORS.PRIMARY_RGB}, 0.5);
  max-width: 400px;
  max-height: 211px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${COLORS.WHITE};

  @media only screen and (min-width: ${BREAKPOINTS.MOBILE}px) {
    min-width: 400px;
  }

  @media only screen and (min-width: ${BREAKPOINTS.TABLET + 1}px) {
    margin: 20px;
  }
`;

export const Image = styled(ImageTemplate)`
  cursor: n-resize;
  background: white;
  max-width: 100%;
  position: relative;
  z-index: 1;

  * {
    cursor: n-resize;
  }

  & img:hover {
    margin-top: 225px;
    transform: translateY(-100%);
  }

  & [alt="Sliding Puzzle"],
  & [alt="Button Maker"],
  & [alt="Kanban App"],
  & [alt="Schrödinger's Cat"] {
    transition: linear 0s;
    cursor: default;
    :hover {
      margin-top: 0px;
      transform: translateY(0%);
    }
  }

  & [alt="Sistema SON"] {
    transition: linear 8s;
  }

  & [alt="InstaSorteos"],
  & [alt="Pharmacy App"],
  & [alt="Marca Propia"] {
    transition: linear 4.5s;
  }

  & [alt="WEBI"] {
    transition: linear 9.6s;
  }
`;
