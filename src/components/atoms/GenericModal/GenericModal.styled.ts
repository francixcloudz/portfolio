import { rgba } from "polished";
import styled, { css } from "styled-components";
import GenericButton from "components/atoms/GenericButton/GenericButton";
import { GenericModalVariants } from "./utils/data";

export const Container = styled.div`
  z-index: 9;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

export const CloseIcon = styled(GenericButton)`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: ${({ theme }) => rgba(theme.colors.white, 1)};
  background: ${({ theme }) => rgba(theme.colors.violet, 1)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.FredokaOne.family};

  :hover {
    box-shadow: 0 5px 15px -2.5px ${({ theme }) => rgba(theme.colors.violet, 0.3)};
  }
`;

export const Modal = {
  [GenericModalVariants.Center]: styled.div<{ isOpen: boolean }>`
    z-index: 10;
    background: #ffffff;
    box-shadow: 0px 40px 56px -24px rgba(22, 32, 57, 0.16);
    border-radius: 0.5rem;
    width: 90%;
    height: fit-content;
    padding: 2rem;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    max-width: fit-content;
    max-height: fit-content;
    overflow: overlay;
    ${({ isOpen }) =>
      isOpen &&
      css`
        animation: fadeInTop 1s linear forwards;
      `};

    @keyframes fadeInTop {
      0%,
      10%,
      20%,
      30%,
      40%,
      100% {
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      0% {
        top: -15%;
        opacity: 0;
      }
      10% {
        top: 0;
        opacity: 1;
        transform: translate3d(0, 10%, 0);
      }
      20% {
        transform: translate3d(0, -5%, 0);
      }
      30% {
        transform: translate3d(0, 2.5%, 0);
      }
      40% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: none;
        top: 0;
        opacity: 1;
      }
    }
  `,
  [GenericModalVariants.Right]: styled.div<{ isOpen: boolean }>`
    z-index: 10;
    background: #fffbe6;
    height: 100vh;
    width: 100%;
    padding: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    margin: auto;
    max-width: 100%;

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.large}px) {
      max-width: 910px;
      ${CloseIcon} {
        left: -10%;
      }
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
        animation: fadeInRight 1s linear forwards;
      `};

    @keyframes fadeInRight {
      0% {
        opacity: 0;
        right: -25%;
      }
      20% {
        opacity: 1;
        right: 0;
      }
      100% {
        opacity: 1;
        right: 0;
      }
    } ;
  `,
};

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
