import styled from "styled-components";
import type { Variants } from "./Title.types";
import { COLORS } from "styles/constants";

export const Container = styled.div<{ variant: Variants }>`
  .title,
  .subtitle {
    color: ${({ variant }) => {
      if (variant === "white") return COLORS.WHITE;
      if (variant === "black") return COLORS.BLACK;
      if (variant === "principal") return COLORS.PRIMARY;
      return "";
    }};
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .emoji {
    margin-left: 15px;
  }
`;
