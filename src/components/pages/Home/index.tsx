// Dependencies
import { useState } from "react";

// Styled
import { Container, Character } from "./styled";

// Inner
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

// Components
import Signature from "components/atoms/Signature";
import Nav from "components/organisms/Nav";
import Notification from "components/molecules/Notification";

// Assets
import image from "assets/media/character.png";
import smileImage from "assets/media/character_smile.png";

type Props = {
  portraitRef: React.RefObject<HTMLImageElement>;
};

const Component: React.FC<Props> = ({ portraitRef }) => {
  const [isSmileImage, setIsSmileImage] = useState(true);

  return (
    <>
      <Container>
        <Nav />
        <div className="content">
          <div className="box">
            <h1>Francisco Arrigoni</h1>
            <h2>Sr. Frontend Engineer</h2>
            <Character>
              <img
                ref={portraitRef}
                src={isSmileImage ? smileImage : image}
                alt="character"
                onMouseOver={() => setIsSmileImage(true)}
                onMouseOut={() => setIsSmileImage(false)}
              />
              <Notification onClick={setIsSmileImage} />
            </Character>
          </div>
        </div>
      </Container>
      <About />
      <Portfolio />
      <Contact />
      <Signature />
    </>
  );
};

export default Component;
