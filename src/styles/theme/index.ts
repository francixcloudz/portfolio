// TODO: Update to match global theme

export const COLORS = {
  WHITE: "#ffffff",
  BLACK: "#000000",
  PRIMARY: "#4117ab",
  YELLOW: "#fbb72d",
  WHITE_RGB: "255, 255, 255",
  BLACK_RGB: "0, 0, 0",
  PRIMARY_RGB: "65, 23, 171",
  YELLOW_RGB: "251, 183, 45",
};

export const FONT_FAMILY = {
  PRIMARY: '"Fredoka One", cursive',
};

export const BREAKPOINTS = {
  MOBILE: 600,
  TABLET: 800,
};

export const ANIMATIONS = {
  ZOOM: `@keyframes ZOOM {
      0% {
          opacity: 0;
          transform: scale(0);
      }
      100% {
          opacity: 1;
          transform: scale(1);
      }
  }`,
  BELL: `@keyframes BELL {
    0% {
      transform: rotate(0);
    }
    10% {
      transform: rotate(30deg);
    }
    20% {
      transform: rotate(0);
    }
    80% {
      transform: rotate(0);
    }
    90% {
      transform: rotate(-30deg);
    }
    100% {
      transform: rotate(0);
    }
  }`,
  PULSE: `@keyframes PULSE {
    0% {
      transform: scale(1);
      border-radius: 50%;
    }
    100% {
      transform: scale(1.03);
      border-radius: 48%;
    }
  }`,
  PULSING: `@keyframes PULSING {
    to {
      box-shadow: 0 0 0 30px rgba(${COLORS.BLACK_RGB}, 0);
    }
  }`,
  FADE_IN: `@keyframes FADE_IN {
    0% {
      opacity: 0;
      transform: scale(0.9) translateY(-100%);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0%);
    }
  }`,
  FADE_IN_TOP: `@keyframes FADE_IN_TOP {
    0% {
      opacity: 0;
      top: -50%;
    }
    20% {
      opacity: 1;
      top: 0;
    }
    100% {
      opacity: 1;
      top: 0;
    }
  }`,
  EASE_IN: `@keyframes EASE_IN {
    0% {
      opacity: 0;
      transform: translateX(-15%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }`,
  EASE_IN_BOTTOM: `@keyframes EASE_IN_BOTTOM {
    0% {
      opacity: 0;
      transform: translate(-50%, 50%);
    }
    100% {
      opacity: 1;
      transform: translateY(-50%, 0%);
    }
  }`,
  FADE_OUT: `@keyframes FADE_OUT {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      z-index: -1;
    }
  }`,
};
