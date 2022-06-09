import Head from "next/head";
import { ReactElement } from "react";

interface MetaDataProps {
  title: string;
  description: string;
  faviconSrc: string;
  logo192Src: string;
  logo512Src: string;
  url: string;
}
const MetaData = ({
  title,
  description,
  faviconSrc,
  logo192Src,
  logo512Src,
  url,
}: MetaDataProps): ReactElement => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

    <title>{title}</title>
    <meta name="theme-color" content="#ffffff" />
    <meta name="description" content={description} />
    <link rel="icon" href={faviconSrc} />
    <link rel="apple-touch-icon" href={logo192Src} />

    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow" />
    <meta name="google" content="nositelinkssearchbox" />
    <meta name="referrer" content="no-referrer" />

    <meta property="fb:app_id" content={title} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:image" content={logo512Src} />
    <meta property="og:image:alt" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content={title} />
    <meta property="og:locale" content="en_US" />
    <meta property="article:author" content="Francisco Arrigoni" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@franarrigoni_" />
    <meta name="twitter:creator" content="@franarrigoni_" />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={logo512Src} />
    <meta name="twitter:image:alt" content={title} />
  </Head>
);

export default MetaData;
