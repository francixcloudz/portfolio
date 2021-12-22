// Children
import Landing from "components/pages/Home/Landing";
import About from "components/pages/Home/About";
import Portfolio from "components/pages/Home/Portfolio";
import Contact from "components/pages/Home/Contact";
import Signature from "components/general/Signature";

const Home: React.FC = () => {
  return (
    <div id="Home">
      <Landing />
      <About />
      <Portfolio />
      <Contact />
      <Signature />
    </div>
  );
};

export default Home;
