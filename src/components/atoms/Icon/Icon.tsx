/* eslint-disable @typescript-eslint/naming-convention */
import Info from "./svg/Info.svg";
import Lock from "./svg/Lock.svg";

const Icon = {
  Lock,
  Info,
};

export type IconType = keyof typeof Icon;

export default Icon;
