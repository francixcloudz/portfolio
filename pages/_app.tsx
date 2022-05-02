import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import Head from "components/templates/Head";
import ResetGlobalStyles from "components/templates/Styled/ResetGlobalStyle";
import GeneralGlobalStyles from "components/templates/Styled/GeneralGlobalStyle";

// TODO: pass assets/styles/constants to theme object
const theme = {
  colors: {
    primary: "#4117ab",
  },
};

function MyApp({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <ResetGlobalStyles />
      <GeneralGlobalStyles />
      <Head />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
