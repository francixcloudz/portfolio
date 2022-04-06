// Dependencies
import styled from "styled-components";

export const Container = styled.div<{ loading: boolean }>`
  ${({ loading }) =>
    loading
      ? { overflow: "hidden", height: "100vh" }
      : { overflow: "auto", height: "auto" }}
`;

export const App = styled.div<{ loading: boolean }>`
  ${({ loading }) => (loading ? { opacity: "0" } : { opacity: "1" })}
`;
