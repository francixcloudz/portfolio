import { rgba } from "polished";
import styled from "styled-components";

export const Button = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 3;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
  text-align: center;

  .count {
    cursor: pointer;
    position: absolute;
    z-index: 1;
    top: -6px;
    right: -6px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.violet};
    font-family: ${({ theme }) => theme.fonts.FredokaOne};
    animation: ZOOM 2s 1s both infinite;
    animation-direction: alternate;
    ${({ theme }) => theme.animations.ZOOM}
  }
`;

export const Bell = styled.div`
  cursor: pointer;
  animation: BELL 1s 1s both infinite;
  ${({ theme }) => theme.animations.BELL}

  * {
    cursor: pointer;
    display: block;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.violet};
    box-shadow: 0px 0px 15px ${({ theme }) => theme.colors.violet};
  }

  .top {
    width: 6px;
    height: 6px;
    border-radius: 3px 3px 0 0;
  }

  .middle {
    width: 25px;
    height: 25px;
    margin-top: -1px;
    border-radius: 12.5px 12.5px 0 0;
  }

  .bottom {
    position: relative;
    z-index: 0;
    width: 32px;
    height: 2px;

    ::before,
    ::after {
      content: "";
      position: absolute;
      top: -4px;
    }

    ::before {
      left: 1px;
      border-bottom: 4px solid ${({ theme }) => theme.colors.violet};
      border-right: 0 solid transparent;
      border-left: 4px solid transparent;
    }

    :after {
      right: 1px;
      border-bottom: 4px solid ${({ theme }) => theme.colors.violet};
      border-right: 4px solid transparent;
      border-left: 0 solid transparent;
    }
  }

  .radius {
    width: 8px;
    height: 4px;
    margin-top: 2px;
    border-radius: 0 0 4px 4px;
    animation: radius 1s 2s both infinite;

    @keyframes radius {
      0% {
        transform: translateX(0);
      }
      10% {
        transform: translateX(6px);
      }
      20% {
        transform: translateX(0);
      }
      80% {
        transform: translateX(0);
      }
      90% {
        transform: translateX(-6px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`;

export const Message = styled.blockquote`
  max-width: 450px;
  filter: drop-shadow(-1px -1px 2px rgba(${({ theme }) => rgba(theme.colors.black, 0.1)}))
    drop-shadow(1px 2px 2px rgba(${({ theme }) => rgba(theme.colors.black, 0.15)}));
  padding: 20px;
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  text-align: left;
  font-weight: ${({ theme }) => theme.fonts.NunitoItalic.weights.Bold};
  font-style: italic;

  animation: fadeIn ease 0.8s;
  box-shadow: -1px -1px 8px rgba(${({ theme }) => rgba(theme.colors.black, 0.1)});
  margin: 0 auto;

  p {
    line-height: 1.4rem;
    margin-bottom: 0;
  }

  a {
    cursor: pointer;
    line-height: 1.4rem;
    color: ${({ theme }) => theme.colors.violet};
    font-weight: ${({ theme }) => theme.fonts.Nunito.weights.ExtraBold};
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.1) translateY(-200%);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0%);
    }
  }

  &::before {
    opacity: 0;
    border: 12.5px solid transparent;
    border-top: 12.5px solid ${({ theme }) => theme.colors.white};
    border-bottom: 0;
    height: 0;
    width: 0;
    border-top-width: 25px;
    content: "";
    display: block;
    position: absolute;
    left: 30%;
    top: -8px;
    transform-origin: center;
    transform: rotate(180deg) skew(-25deg) translateY(16.6666666667px);
    animation: fadeIn--Before 0.5s 0.5s ease forwards;

    @keyframes fadeIn--Before {
      0% {
        transform: rotate(180deg) skew(-25deg) translateY(16.6666666667px) translateY(-200%);
        opacity: 0;
      }
      100% {
        transform: rotate(180deg) skew(-25deg) translateY(16.6666666667px);
        opacity: 1;
      }
    }
  }
`;
