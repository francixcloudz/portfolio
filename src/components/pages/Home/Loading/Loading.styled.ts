import styled from "styled-components";
import { COLORS } from "styles/theme";

export const Container = styled.div<{ isLoading: boolean }>`
  min-height: 100vh;
  background: ${COLORS.WHITE};
  ${({ isLoading }) => `overflow: ${isLoading ? "hidden" : "auto"}`};
`;

export const AppWrapper = styled.div<{ isLoading: boolean }>`
  ${({ isLoading }) => (isLoading ? `opacity: 0` : `opacity: 1`)};
`;
