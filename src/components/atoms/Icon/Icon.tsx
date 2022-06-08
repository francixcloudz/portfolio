/* eslint-disable @typescript-eslint/naming-convention */
import Close from "./svg/Close.svg";
import Info from "./svg/Info.svg";
import Lock from "./svg/Lock.svg";
import OneShot from "./svg/OneShot.svg";

const Icon = {
  Close,
  OneShot,
  Lock,
  Info,
};

export type IconType = keyof typeof Icon;

export default Icon;
