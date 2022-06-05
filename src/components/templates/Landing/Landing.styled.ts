import { rgba } from "polished";
import styled from "styled-components";
import ImageTemplate from "components/atoms/Image/Image";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.violet};
  width: 100vw;
  min-height: 100vh;

  h1,
  h2 {
    color: ${({ theme }) => theme.colors.violet};
  }
`;

export const Content = styled.div`
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.white} 21px, transparent 1%)
      center,
    linear-gradient(${({ theme }) => theme.colors.white} 21px, transparent 1%) center,
    ${({ theme }) => theme.colors.violet};
  padding-top: 20vh;
  background-size: 1px 1px;
  border-radius: 0 0 0 0;
  min-height: 100vh;
`;

export const Box = styled.div`
  margin: auto;
  max-width: 95%;
  width: 600px;
`;

export const CharacterWrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
`;

export const Character = styled(ImageTemplate)`
  display: block;
  width: 200px;
  height: 200px;
  margin: 30px auto;
  border-radius: 50%;
  box-shadow: 0 0 15px 0 ${({ theme }) => rgba(theme.colors.yellow, 0.5)};

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
    width: 40vw;
    height: 40vw;
  }
`;
