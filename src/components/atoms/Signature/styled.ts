// Dependencies
import styled from "styled-components";

// Components
import ImageComponent from "components/templates/Image";

// Assets
import { COLORS } from "assets/styles/constants";

export const Image = styled(ImageComponent)``;

export const Container = styled.div`
  a {
    cursor: pointer;
    display: block;
    position: absolute;
    bottom: 0;
    width: 50px;
    left: 0;
    right: 0;
    margin: 0 auto 15px;
  }

  p {
    cursor: pointer;
    font-family: "Nunito", sans-serif;
    color: ${COLORS.WHITE};
    font-weight: 700;
    font-size: 8px;
    margin-bottom: 5px;
  }

  .lenses {
    cursor: pointer;
    display: block;
    width: 100%;
    transition: transform 0.5s;
  }

  .smile {
    cursor: pointer;
    width: 15%;
    margin: 0 auto;
    display: block;
    opacity: 0;
    transition: opacity 0.5s;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &:hover {
    .lenses {
      transform: translateY(-3px);
    }
    & .smile {
      opacity: 1;
    }
  }
`;
