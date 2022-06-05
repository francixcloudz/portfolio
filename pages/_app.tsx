import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import useSmoothScroll from "hooks/useSmoothScroll";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme/default";

function MyApp({ Component, pageProps }: AppProps) {
  useSmoothScroll();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
