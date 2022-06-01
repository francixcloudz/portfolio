import { ReactElement } from "react";
import PageContainer from "components/atoms/PageContainer/PageContainer";
import Loading from "components/organisms/Loading/Loading";
import OneShotEvent from "components/templates/OneShotEvent/OneShotEvent";

const Events = (): ReactElement => (
  <Loading delay={0}>
    <PageContainer>
      <OneShotEvent />
    </PageContainer>
  </Loading>
);

export default Events;
