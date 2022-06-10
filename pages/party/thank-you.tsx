import { ReactElement } from "react";
import MetaData from "components/atoms/MetaData/MetaData";
import PageContainer from "components/atoms/PageContainer/PageContainer";
import ThankYouPage from "components/templates/ThankYouPage/ThankYouPage";
import favicon from "assets/images/brand/OneShot/favicon.ico";
import logo192 from "assets/images/brand/OneShot/logo192.png";
import logo512 from "assets/images/brand/OneShot/logo512.png";

const metaData = {
  title: "[ONE]SHOT 👁 Private Event",
  description: "Crazy nights make the best memories.",
  faviconSrc: favicon.src,
  logo192Src: logo192.src,
  logo512Src: logo512.src,
  url: "",
};

const PartyThankYou = (): ReactElement => (
  <>
    <MetaData {...metaData} />
    <PageContainer>
      <ThankYouPage />
    </PageContainer>
  </>
);

export default PartyThankYou;
