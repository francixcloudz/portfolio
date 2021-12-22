// Styled
import { Container, Character } from "./styled";

// Components
import Nav from "components/layouts/Nav";
import Notification from "components/general/Notification";

// Assets
import character from "assets/media/character.png";
import characterHover from "assets/media/character_hover.png";

const Landing: React.FC = () => {
  const handleHey = (event, type?: string) => {
    // eslint-disable-next-line no-param-reassign
    if (type === "hover") event.currentTarget.src = characterHover;
    // eslint-disable-next-line no-param-reassign
    else event.currentTarget.src = character;
  };

  return (
    <Container id="Landing">
      <Nav />
      <div className="content">
        <div className="box">
          <h1>Francisco Arrigoni</h1>
          <h2>Sr. Frontend Developer</h2>
          <Character>
            <img
              src={character}
              alt="character"
              onMouseOver={(event) => handleHey(event, "hover")}
              onMouseOut={(event) => handleHey(event)}
            />
            <Notification />
          </Character>
        </div>
      </div>
    </Container>
  );
};

export default Landing;
