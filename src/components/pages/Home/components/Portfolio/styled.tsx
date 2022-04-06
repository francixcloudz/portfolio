// Dependencies
import styled from "styled-components";

// Assets
import { COLORS } from "assets/styles/constants";

export const Container = styled.div`
  background: ${COLORS.PRIMARY};

  > .content {
    background: linear-gradient(90deg, ${COLORS.WHITE} 21px, transparent 1%)
        center,
      linear-gradient(${COLORS.WHITE} 21px, transparent 1%) center,
      ${COLORS.PRIMARY};
    background-size: 22px 22px;
    border-radius: 0 0 10vw 10vw;
    padding: 20vh 0;

    > .box {
      margin: auto;
      max-width: 95%;
      width: 600px;
    }

    > *:not(:last-child) {
      margin-bottom: 10vh;
    }
  }
`;
