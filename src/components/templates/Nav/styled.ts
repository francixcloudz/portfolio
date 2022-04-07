// Dependencies
import styled from "styled-components";

// Components
import ImageComponent from "components/templates/Image";

// Assets
import { ANIMATIONS, BREAKPOINTS, COLORS } from "assets/styles/constants";

export const Image = styled(ImageComponent)``;

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

export const Logo = styled.a`
  cursor: pointer;
  background: ${COLORS.WHITE};
  width: 100px;
  position: relative;

  @media only screen and (max-width: ${BREAKPOINTS.TABLET}px) {
    width: 80px;
  }

  ${Image}.lenses {
    cursor: pointer;
    display: block;
    width: 100%;
    transition: transform 0.5s;
  }

  ${Image}.smile {
    cursor: pointer;
    width: 15%;
    margin: 0 auto;
    display: block;
    opacity: 0;
    transition: opacity 0.5s;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &:hover {
    .lenses {
      transform: translateY(-5px);
    }
    .smile {
      opacity: 1;
    }
  }
`;

export const Links = styled.div`
  @media only screen and (min-width: ${BREAKPOINTS.MOBILE + 1}px) {
    display: block;
  }

  margin-top: 5px;

  a {
    cursor: pointer;
    padding: 10px 30px;
    border-radius: 20px;
    background: transparent;
    max-width: fit-content;
    width: 100%;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: ${COLORS.PRIMARY};
    margin: 0 auto;
  }

  .portfolio {
    border: 2px solid transparent;

    &:hover {
      border: 2px solid ${COLORS.YELLOW};
      color: ${COLORS.YELLOW};
      box-shadow: inset 0 -2px 10px 0 rgba(${COLORS.YELLOW_RGB}, 0.7);
      background: linear-gradient(90deg, ${COLORS.WHITE} 21px, transparent 1%)
          center,
        linear-gradient(${COLORS.WHITE} 21px, transparent 1%) center,
        ${COLORS.YELLOW};
      background-size: 22px 22px;
    }
  }

  .contact {
    border: 2px solid ${COLORS.PRIMARY};
    box-shadow: 0 0 0 0 ${COLORS.PRIMARY};
    animation-delay: 5s;
    background: linear-gradient(90deg, ${COLORS.WHITE} 21px, transparent 1%)
        center,
      linear-gradient(${COLORS.WHITE} 21px, transparent 1%) center,
      ${COLORS.WHITE};
    background-size: 22px 22px;
    animation: PULSING 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    ${ANIMATIONS.PULSING}

    &:hover {
      color: ${COLORS.WHITE};
      animation: none;
      box-shadow: 0 6px 10px -3px rgba(${COLORS.PRIMARY_RGB}, 0.5);
      background: linear-gradient(90deg, ${COLORS.PRIMARY} 21px, transparent 1%)
          center,
        linear-gradient(${COLORS.PRIMARY} 21px, transparent 1%) center,
        ${COLORS.WHITE};
      background-size: 22px 22px;
    }

    @media only screen and (min-width: ${BREAKPOINTS.MOBILE + 1}px) {
      margin: 0 0 0 20px;
    }
  }

  @media only screen and (max-width: ${BREAKPOINTS.MOBILE}px) {
    display: none;
    position: absolute;
    background: rgba(${COLORS.WHITE_RGB}, 0.95);
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 0 10px 0 rgba(${COLORS.YELLOW_RGB}, 0.9);
    top: 80px;
    max-width: 250px;
    width: 100%;
    right: 0;
    left: 0;
    margin: auto;
    z-index: 999;
    animation: FADE_IN ease 1000ms;
    ${ANIMATIONS.FADE_IN}

    &.active {
      display: block;
    }

    a {
      display: block;
    }

    .contact {
      margin: 10px auto 0 auto;
    }
  }
`;

export const Burger = styled.div`
  @media only screen and (min-width: ${BREAKPOINTS.MOBILE + 1}px) {
    display: none;
  }

  width: 30px;
  height: 30px;
  position: relative;
  margin: 0 auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 4.5px;
    width: 100%;
    background: ${COLORS.PRIMARY};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
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

  &.open {
    span:nth-child(1) {
      top: 18px;
      width: 0%;
      left: 50%;
    }

    span:nth-child(2) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    span:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    span:nth-child(4) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
  }
`;
