import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "components/atoms/Head/Head";
import useSmoothScroll from "hooks/useSmoothScroll";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme/default";

function MyApp({ Component, pageProps }: AppProps) {
  useSmoothScroll();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
