import styled from "styled-components";
import { COLORS } from "styles/theme";
import { Variants } from "./utils/types";

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
