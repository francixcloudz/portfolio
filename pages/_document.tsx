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
import { AllFontsData } from "styles/theme/data/fonts";

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
        {AllFontsData.map(({ fontName, variantName }) => (
          <link
            key={`${fontName}/${variantName}`}
            href={`/fonts/${fontName}/${variantName}.ttf`}
            as="font"
            type="font/ttf"
          />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
