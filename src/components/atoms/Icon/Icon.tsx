/* eslint-disable @typescript-eslint/naming-convention */
import Close from "./svg/Close.svg";
import OneShot from "./svg/OneShot.svg";

const Icon = {
  Close,
  OneShot,
};

export type IconType = keyof typeof Icon;

export default Icon;
