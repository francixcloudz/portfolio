import styled from "styled-components";
import ImageTemplate from "components/atoms/Image/Image";
import { COLORS } from "styles/theme";

export const Container = styled.div<{ isWhite?: boolean }>`
  .title,
  .subtitle {
    color: ${({ isWhite }) => (isWhite ? COLORS.WHITE : COLORS.PRIMARY)};
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

export const Emoji = styled(ImageTemplate)`
  width: 30px;
`;
