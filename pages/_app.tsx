import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import Head from "components/atoms/Head";
import ResetGlobalStyles from "styles/ResetGlobal";
import GeneralGlobalStyles from "styles/GeneralGlobal";
import * as theme from "styles/theme";

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
