// Dependencies
import { useState } from "react";

// Styled
import { Container } from "./styled";

// Children
import Projects from "./Projects";

// Components
import DesignModal from "components/general/DesignModal";

// Assets
import myWork from "assets/media/emojis/My-work.png";
import moonShot from "assets/media/emojis/Moonshot.png";

const Portfolio: React.FC = () => {
  const [openDesignModal, setOpenDesignModal] = useState(false);
  const [designModalProject, setDesignModalProject] = useState<string>("");

  return (
    <>
      <Container>
        <div className="content">
          <div>
            <div className="box">
              <h2>
                Portfolio <img src={myWork} width="30" alt="my-work" />
              </h2>
              <p>Here are a some demos I've worked on to test my tech skills</p>
            </div>
            <Projects type="demos" />
          </div>

          <div>
            <div className="box">
              <h2>
                Projects <img src={myWork} width="30" alt="my-work" />
              </h2>
              <p>Here are a few projects I've worked on</p>
            </div>
            <Projects type="projects" />
          </div>

          <div>
            <div className="box">
              <h2>
                Ventures <img src={moonShot} width="30" alt="moonshot" />
              </h2>
              <p>
                One of the things I enjoy most in life is the creative process
                of creating solutions to problems I identify with
              </p>
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
