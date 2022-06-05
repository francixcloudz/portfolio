import { rgba } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.white} 21px, transparent 1%)
      center,
    linear-gradient(${({ theme }) => theme.colors.white} 21px, transparent 1%) center,
    ${({ theme }) => theme.colors.violet};
  background-size: 22px 22px;
  margin: 0;
  width: 100vw;

  h2,
  h3,
  p {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.violet};
  padding: 5vh 0 15vh 0;
  border-radius: 0 0 20vw 20vw;
  margin: 0;
`;

export const Box = styled.div`
  margin: auto;
  max-width: 95%;
  width: 510px;
`;

export const Resume = styled.div`
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.yellow} 21px, transparent 1%)
      center,
    linear-gradient(${({ theme }) => theme.colors.yellow} 21px, transparent 1%) center,
    ${({ theme }) => theme.colors.violet};
  background-size: 22px 22px;
  display: flex;
  flex-direction: column;
  text-align: center;
  vertical-align: middle;
  box-shadow: 0 0 15px 0 ${({ theme }) => rgba(theme.colors.black, 0.3)};
  width: 18em;
  height: 18em;
  padding: 4vh;
  margin: 0 auto;
  animation: PULSE 0.4s ease infinite alternate;
  ${({ theme }) => theme.animations.PULSE}

  > .box {
    margin: auto;

    a {
      display: block;
      width: fit-content;
      margin: 0 auto;
      padding: 10px 30px;
      border-radius: 20px;
      font-weight: ${({ theme }) => theme.fonts.Nunito.weights.Bold};

      letter-spacing: 1px;
      color: ${({ theme }) => theme.colors.violet};
      border: 2px solid ${({ theme }) => theme.colors.violet};
      cursor: pointer;
      box-shadow: 0 6px 10px -3px ${({ theme }) => rgba(theme.colors.violet, 0.5)};
      background: linear-gradient(90deg, ${({ theme }) => theme.colors.yellow} 21px, transparent 1%)
          center,
        linear-gradient(${({ theme }) => theme.colors.yellow} 21px, transparent 1%) center,
        ${({ theme }) => theme.colors.yellow};
      background-size: 22px 22px;

      &:hover {
        color: white;
        background: linear-gradient(
              90deg,
              ${({ theme }) => theme.colors.violet} 21px,
              transparent 1%
            )
            center,
          linear-gradient(${({ theme }) => theme.colors.violet} 21px, transparent 1%) center,
          ${({ theme }) => theme.colors.white};
        background-size: 22px 22px;
      }
    }
  }
`;
