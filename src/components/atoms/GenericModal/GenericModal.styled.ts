import styled from "styled-components";
import { GenericModalVariants } from "./utils/data";

export const Container = styled.div`
  z-index: 9;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

export const Close = styled.span`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #001955;
  border: solid rgba(0, 25, 85, 0.15);
  background: #ffffff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Modal = {
  [GenericModalVariants.Center]: styled.div<{ isOpen: boolean }>`
    z-index: 10;
    background: #ffffff;
    box-shadow: 0px 40px 56px -24px rgba(22, 32, 57, 0.16);
    border-radius: 4px;
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
    ${({ isOpen }) => (isOpen ? `animation: fadeInTop 1s linear forwards` : "")};

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
      ${Close} {
        left: -10%;
      }
    }
    ${({ isOpen }) => (isOpen ? `animation: fadeInRight 1s linear forwards` : "")};

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
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
