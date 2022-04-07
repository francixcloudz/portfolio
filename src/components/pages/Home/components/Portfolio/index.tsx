// Dependencies
import { useState } from "react";

// Styled
import { Container } from "./styled";

// Children
import Projects from "./Projects";

// Components
import Title from "components/atoms/Title";
import DesignModal from "components/organisms/DesignModal";

// Assets
import myWork from "assets/media/emojis/My-work.png";
import moonShot from "assets/media/emojis/Moonshot.png";

const Portfolio: React.FC = () => {
  const [openDesignModal, setOpenDesignModal] = useState(false);
  const [designModalProject, setDesignModalProject] = useState<string>("");

  return (
    <>
      <Container id="Portfolio">
        <div className="content">
          <div>
            <div className="box">
              <Title
                title="Portfolio"
                subtitle="Here are a some demos I've worked on to test my tech skills"
                emoji={myWork}
                variant="dark"
              />
            </div>
            <Projects type="demos" />
          </div>

          <div>
            <div className="box">
              <Title
                title="Projects"
                subtitle="Here are a few projects I've worked on"
                emoji={myWork}
                variant="dark"
              />
            </div>
            <Projects type="projects" />
          </div>

          <div>
            <div className="box">
              <Title
                title="Ventures"
                subtitle="One of the things I enjoy most in life is the creative process
                of creating solutions to problems I identify with"
                emoji={moonShot}
                variant="dark"
              />
            </div>
            <Projects
              type="ventures"
              setOpenDesignModal={setOpenDesignModal}
              setDesignModalProject={setDesignModalProject}
            />
          </div>
        </div>
      </Container>
      <DesignModal
        openDesignModal={openDesignModal}
        setOpenDesignModal={setOpenDesignModal}
        designModalProject={designModalProject}
      />
    </>
  );
};

export default Portfolio;
