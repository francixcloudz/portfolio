// Dependencies
import styled from "styled-components";

// Assets
import { COLORS } from "assets/styles/constants";

export const Container = styled.div<{ variant: string }>`
  h2,
  p {
    color: ${({ variant }) => {
      if (variant === "white") return COLORS.WHITE;
      if (variant === "dark") return COLORS.BLACK;
      return "";
    }};
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  h2 {
    margin-right: 15px;
  }
`;
