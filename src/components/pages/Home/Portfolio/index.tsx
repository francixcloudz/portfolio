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
import type { ProjectsName } from "assets/components/Portfolio";

const Portfolio: React.FC = () => {
  const [openDesignModal, setOpenDesignModal] = useState(false);
  const [designModalProject, setDesignModalProject] =
    useState<ProjectsName>("");

  return (
    <>
      <Container id="Portfolio">
        <div className="content">
          <div className="box">
            <h2>
              Portfolio <img src={myWork} width="30" alt="my-work" />
            </h2>
            <p>Here are a few projects I've worked on</p>
          </div>
          <Projects type="portfolio" />
          <div className="box projects">
            <h2>
              Projects <img src={moonShot} width="30" alt="moonshot" />
            </h2>
            <p>
              One of the things I enjoy most in life is the creative process of
              creating solutions to problems I identify with
            </p>
          </div>
          <Projects
            type="projects"
            setOpenDesignModal={setOpenDesignModal}
            setDesignModalProject={setDesignModalProject}
          />
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
