import NextHead from "next/head";
import { ReactElement } from "react";
import favicon from "assets/images/brand/favicon.ico";
import logo192 from "assets/images/brand/logo192.png";
import logo512 from "assets/images/brand/logo512.png";

const Head = (): ReactElement => (
  <NextHead>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

    <title>Francisco Arrigoni ⚡ Sr. Frontend Engineer</title>
    <meta name="theme-color" content="#ffffff" />
    <meta
      name="description"
      content="The place where you can check out my work and discover that we can create something exciting together!"
    />
    <link rel="icon" href={favicon.src} />
    <link rel="apple-touch-icon" href={logo192.src} />

    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow" />
    <meta name="google" content="nositelinkssearchbox" />
    <meta name="referrer" content="no-referrer" />

    <meta property="fb:app_id" content="Francisco Arrigoni ⚡ Sr. Frontend Engineer" />
    <meta property="og:url" content="https://arrigoni.in/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Francisco Arrigoni ⚡ Sr. Frontend Engineer" />
    <meta property="og:image" content={logo512.src} />
    <meta property="og:image:alt" content="Francisco Arrigoni ⚡ Sr. Frontend Engineer" />
    <meta
      property="og:description"
      content="The place where you can check out my work and discover that we can create something exciting together!"
    />
    <meta property="og:site_name" content="Francisco Arrigoni ⚡ Sr. Frontend Engineer" />
    <meta property="og:locale" content="en_US" />
    <meta property="article:author" content="Francisco Arrigoni" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@franarrigoni_" />
    <meta name="twitter:creator" content="@franarrigoni_" />
    <meta name="twitter:url" content="https://arrigoni.in/" />
    <meta name="twitter:title" content="Francisco Arrigoni ⚡ Sr. Frontend Engineer" />
    <meta
      name="twitter:description"
      content="The place where you can check out my work and discover that we can create something exciting together!"
    />
    <meta name="twitter:image" content={logo512.src} />
    <meta name="twitter:image:alt" content="Francisco Arrigoni ⚡ Sr. Frontend Engineer" />
  </NextHead>
);

export default Head;
