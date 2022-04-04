// Styled
import { Container, Resume } from "./styled";

// Assets
import hello from "assets/media/emojis/Hello.png";

const About: React.FC = () => {
  return (
    <Container>
      <div className="content">
        <div className="box">
          <h2>
            Hey there! I'm Francisco <img src={hello} width="30" alt="hello" />
          </h2>
          <p>
            Proactive, meticulous, and resourceful professional, eager to keep
            growing and learning
          </p>
          <p>
            This is the place where you can check out my work and discover that
            we can create something exciting together!
          </p>
          <Resume>
            <div className="box">
              <h3>¡Breaking News!</h3>
              <p>Currently seeking job opportunities in IT</p>
              <a
                href="https://arrigoni.s3.sa-east-1.amazonaws.com/Francisco+Arrigoni+-+Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume / CV
              </a>
            </div>
          </Resume>
        </div>
      </div>
    </Container>
  );
};

export default About;
