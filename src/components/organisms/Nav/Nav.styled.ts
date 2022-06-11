import { rgba } from "polished";
import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  padding: 5vw;
  margin: 0 auto;
  left: 0;
  right: 0;
`;

export const Links = styled.div<{ isOpen: boolean }>`
  margin-top: 5px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
    display: none;
    position: absolute;
    background: ${({ theme }) => rgba(theme.colors.white, 0.95)};
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 0 10px 0 ${({ theme }) => rgba(theme.colors.yellow, 0.9)};
    top: 80px;
    max-width: 250px;
    width: 100%;
    right: 0;
    left: 0;
    margin: auto;
    z-index: 999;
    animation: FADE_IN_AND_POP ease 1000ms;
    ${({ theme }) => theme.animations.FADE_IN_AND_POP}
    ${({ isOpen }) =>
      isOpen &&
      css`
        display: block;
      `}
  }
`;

const Link = styled.a`
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 20px;
  background: transparent;
  max-width: fit-content;
  width: 100%;
  height: 100%;
  font-weight: ${({ theme }) => theme.fonts.Nunito.weights.Bold};
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.violet};
  margin: 0 auto;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
    display: block;
  }
`;

export const PortfolioLink = styled(Link)`
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.yellow};
    box-shadow: inset 0 -2px 10px 0 ${({ theme }) => rgba(theme.colors.yellow, 0.7)};
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.white} 21px, transparent 1%)
        center,
      linear-gradient(${({ theme }) => theme.colors.white} 21px, transparent 1%) center,
      ${({ theme }) => theme.colors.yellow};
    background-size: 22px 22px;
  }
`;

export const ContactLink = styled(Link)`
  border: 2px solid ${({ theme }) => theme.colors.violet};
  box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.violet};
  animation-delay: 5s;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.white} 21px, transparent 1%)
      center,
    linear-gradient(${({ theme }) => theme.colors.white} 21px, transparent 1%) center,
    ${({ theme }) => theme.colors.white};
  background-size: 22px 22px;
  animation: PULSING 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  ${({ theme }) => theme.animations.PULSING}

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    animation: none;
    box-shadow: 0 6px 10px -3px ${({ theme }) => rgba(theme.colors.violet, 0.5)};
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.violet} 21px, transparent 1%)
        center,
      linear-gradient(${({ theme }) => theme.colors.violet} 21px, transparent 1%) center,
      ${({ theme }) => theme.colors.white};
    background-size: 22px 22px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xsmall + 1}px) {
    margin: 0 0 0 20px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
    margin: 10px auto 0 auto;
  }
`;

export const Burger = styled.div<{ isOpen: boolean }>`
  width: 30px;
  height: 30px;
  position: relative;
  margin: 0;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 4.5px;
    width: 100%;
    background: ${({ theme }) => theme.colors.violet};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 9px;
    }

    &:nth-child(4) {
      top: 18px;
    }
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      span:nth-child(1) {
        top: 18px;
        width: 0%;
        left: 50%;
      }

      span:nth-child(2) {
        transform: rotate(45deg);
      }

      span:nth-child(3) {
        transform: rotate(-45deg);
      }

      span:nth-child(4) {
        top: 18px;
        width: 0%;
        left: 50%;
      }
    `}
`;
