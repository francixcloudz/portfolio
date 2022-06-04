import animations from "./data/animations";
import breakpoints from "./data/breakpoints";
import colors from "./data/colors";
import fonts from "./data/fonts";

const theme = {
  colors,
  fonts,
  breakpoints,
  animations,
} as const;

export type ThemeType = typeof theme;

// Overwrite styled-components DefaultTheme
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}

export default theme;
