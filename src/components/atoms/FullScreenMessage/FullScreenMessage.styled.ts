import { rgba } from "polished";
import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 2vw;
  background: ${({ theme }) => rgba(theme.colors.black, 0.9)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: FADE_IN 1s linear forwards;
  ${({ theme }) => theme.animations.FADE_IN}
`;
