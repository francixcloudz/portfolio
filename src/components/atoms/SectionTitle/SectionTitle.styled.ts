import styled from "styled-components";
import ImageTemplate from "components/atoms/Image/Image";

export const Container = styled.div<{ isWhite?: boolean }>`
  .title,
  .subtitle {
    color: ${({ isWhite, theme }) => (isWhite ? theme.colors.white : theme.colors.violet)};
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
