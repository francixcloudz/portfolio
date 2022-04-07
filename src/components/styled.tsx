// Dependencies
import styled from "styled-components";

export const Container = styled.div<{ loading: number }>`
  ${({ loading }) =>
    !!loading
      ? `overflow: hidden; height: 100vh`
      : `overflow: auto; height: auto`};
`;

export const AppWrapper = styled.div<{ loading: number }>`
  ${({ loading }) => (!!loading ? `opacity: 0` : `opacity: 1`)};
`;
