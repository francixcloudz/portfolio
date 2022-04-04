// Dependencies
import { useState } from "react";

// Styled
import { Container, Character } from "./styled";

// Components
import Nav from "components/layouts/Nav";
import Notification from "components/general/Notification";

// Assets
import image from "assets/media/character.png";
import smileImage from "assets/media/character_smile.png";

const Landing: React.FC = () => {
  const [isSmileImage, setIsSmileImage] = useState(false);

  return (
    <Container>
      <Nav />
      <div className="content">
        <div className="box">
          <h1>Francisco Arrigoni</h1>
          <h2>Sr. Frontend Engineer</h2>
          <Character>
            <img
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
  );
};

export default Landing;
