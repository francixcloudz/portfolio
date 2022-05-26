import { ReactElement } from "react";
import PageContainer from "components/atoms/PageContainer/PageContainer";
import About from "components/templates/About/About";
import Contact from "components/templates/Contact/Contact";
import Landing from "components/templates/Landing/Landing";
import Portfolio from "components/templates/Portfolio/Portfolio";

const Index = (): ReactElement => (
  <PageContainer>
    <Landing />
    <About />
    <Portfolio />
    <Contact />
  </PageContainer>
);

export default Index;
