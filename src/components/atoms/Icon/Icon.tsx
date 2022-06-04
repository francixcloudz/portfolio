/* eslint-disable @typescript-eslint/naming-convention */
import ChevronLeft from "./svg/ChevronLeft.svg";
import ChevronRight from "./svg/ChevronRight.svg";
import Close from "./svg/Close.svg";
import OneShot from "./svg/OneShot.svg";

const Icon = {
  Close,
  OneShot,
  ChevronLeft,
  ChevronRight,
};

export type IconType = keyof typeof Icon;

export default Icon;
