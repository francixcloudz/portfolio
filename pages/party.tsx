import { ReactElement } from "react";
import Head from "components/atoms/Head/Head";
import PageContainer from "components/atoms/PageContainer/PageContainer";
import Loading from "components/organisms/Loading/Loading";
import OneShotEvent from "components/templates/OneShotEvent/OneShotEvent";
import favicon from "assets/images/brand/OneShot/favicon.ico";
import logo192 from "assets/images/brand/OneShot/logo192.png";
import logo512 from "assets/images/brand/OneShot/logo512.png";

const metaData = {
  title: "[ONE]SHOT 👁 Private Event",
  description: "Crazy nights make the best memories.",
  faviconSrc: favicon.src,
  logo192Src: logo192.src,
  logo512Src: logo512.src,
};

const Party = (): ReactElement => (
  <Loading delay={2000}>
    <Head {...metaData} />
    <PageContainer>
      <OneShotEvent />
    </PageContainer>
  </Loading>
);

export default Party;
