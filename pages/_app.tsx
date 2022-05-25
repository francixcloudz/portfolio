import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "components/atoms/Head/Head";
import useSmoothScroll from "hooks/useSmoothScroll";
import GeneralGlobalStyles from "styles/GeneralGlobal";
import ResetGlobalStyles from "styles/ResetGlobal";
import * as theme from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  useSmoothScroll();
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
