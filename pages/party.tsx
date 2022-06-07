import { ReactElement } from "react";
import Head from "components/atoms/Head/Head";
import PageContainer from "components/atoms/PageContainer/PageContainer";
import Loading from "components/organisms/Loading/Loading";
import OneShotEvent from "components/templates/OneShotEvent/OneShotEvent";

const metaData = {
  title: "[ONE]SHOT 👁 Private Event",
  description: "[ONE]SHOT 👁 Private Event",
};

const Party = (): ReactElement => (
  <Loading delay={1500}>
    <Head {...metaData} />
    <PageContainer>
      <OneShotEvent />
    </PageContainer>
  </Loading>
);

export default Party;
