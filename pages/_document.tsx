import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { Fragment } from "react";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  public static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    try {
      const originalRenderPage = context.renderPage;
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(context);
      return {
        ...initialProps,
        styles: [
          <Fragment key="styles">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  public render = () => (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
