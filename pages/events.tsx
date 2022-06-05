import { ReactElement } from "react";
import Head from "components/atoms/Head/Head";
import PageContainer from "components/atoms/PageContainer/PageContainer";
import Loading from "components/organisms/Loading/Loading";
import OneShotEvent from "components/templates/OneShotEvent/OneShotEvent";

const metaData = {
  title: "[ONE]SHOT ⚡ Private Event",
  description: "[ONE]CORP Te invita a una noche especial",
};

const Events = (): ReactElement => (
  <Loading delay={0}>
    <Head {...metaData} />
    <PageContainer>
      <OneShotEvent />
    </PageContainer>
  </Loading>
);

export default Events;
