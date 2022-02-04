// Dependencies
import { useRef } from "react";

// Styled
import { Container, MainButton, Stack } from "./styled";

// Components
import Tooltip from "components/general/Tooltip";

// Assets
import githubIcon from "assets/media/icons/github.png";
import tabIcon from "assets/media/icons/tab.png";
import workingIcon from "assets/media/icons/working.png";
import designIcon from "assets/media/icons/design.png";
import type { Project } from "assets/components/Portfolio";

const Overlay: React.FC<{
  project: Project;
  setOpenDesignModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setDesignModalProject?: React.Dispatch<React.SetStateAction<string>>;
}> = ({ project, setOpenDesignModal, setDesignModalProject }) => {
  const { config, title, description, website, github, stack } = project;
  const overlay = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLDivElement>(null);

  const handleOverlay = () => {
    if (overlay.current !== null && button.current !== null) {
      button.current.classList.toggle("active");
      overlay.current.classList.toggle("active");
      if (overlay.current.classList.contains("active")) {
        button.current.innerHTML = "x";
      } else {
        button.current.innerHTML = "?";
      }
    }
  };

  return (
    <Container id="Overlay" ref={overlay}>
      <MainButton ref={button} onClick={handleOverlay}>
        ?
      </MainButton>
      <div className="content">
        <div className="box">
          <h3>{title}</h3>
          <div>
            <p>{description}</p>
            {stack && (
              <Stack>
                {stack.map((icon, index) => icon(`${title}-${index}`))}
              </Stack>
            )}
            {config === "github" && (
              <>
                <Tooltip text="Visit the live version!">
                  <a href={website} target="_blank" rel="noreferrer">
                    <img src={tabIcon} alt="website" className="button" />
                  </a>
                </Tooltip>
                <Tooltip text="Explore the repo!">
                  <a href={github} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="github" className="button" />
                  </a>
                </Tooltip>
              </>
            )}
            {config === "working" && (
              <p className="working">
                <img src={workingIcon} alt="working" />
                Actually working on it
              </p>
            )}
            {config === "design" && (
              <Tooltip text="Take a look at the designs!">
                <img
                  src={designIcon}
                  alt="design"
                  className="button"
                  onClick={() => {
                    if (setDesignModalProject && setOpenDesignModal) {
                      setDesignModalProject(title);
                      setOpenDesignModal(true);
                    }
                  }}
                />
              </Tooltip>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Overlay;
