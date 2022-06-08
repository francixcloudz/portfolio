import { ReactElement, useState } from "react";
import Head from "components/atoms/Head/Head";
import PageContainer from "components/atoms/PageContainer/PageContainer";
import Loading from "components/organisms/Loading/Loading";
import About from "components/templates/About/About";
import Contact from "components/templates/Contact/Contact";
import Landing from "components/templates/Landing/Landing";
import Portfolio from "components/templates/Portfolio/Portfolio";
import useCurrentPath from "hooks/useCurrentPath";
import useRedirection from "hooks/useRedirection";
import favicon from "assets/images/brand/favicon.ico";
import logo192 from "assets/images/brand/logo192.png";
import logo512 from "assets/images/brand/logo512.png";

const metaData = {
  title: "Francisco Arrigoni ⚡ Sr. Frontend Engineer",
  description:
    "The place where you can check out my work and discover that we can create something exciting together!",
  faviconSrc: favicon.src,
  logo192Src: logo192.src,
  logo512Src: logo512.src,
};

const Home = (): ReactElement => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Loading
      delay={6000}
      onLoadCallback={() => {
        useRedirection(useCurrentPath());
      }}
      onCompleteCallback={() => {
        setTimeout(() => setIsLoaded(true), 3000);
      }}
    >
      <Head {...metaData} />
      <PageContainer>
        <Landing />
        {isLoaded && (
          <>
            <About />
            <Portfolio />
            <Contact />
          </>
        )}
      </PageContainer>
    </Loading>
  );
};

export default Home;
