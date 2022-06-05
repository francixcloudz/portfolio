import { ReactElement, useState } from "react";
import Tooltip from "components/molecules/Tooltip/Tooltip";
import { Project } from "data/portfolio";
import designIcon from "assets/images/icons/design.png";
import githubIcon from "assets/images/icons/github.png";
import tabIcon from "assets/images/icons/tab.png";
import workingIcon from "assets/images/icons/working.png";
import { Container, Content, MainButton, Stack, Image } from "./ProjectCard.styled";

interface ProjectCardProps {
  project: Project;
  setOpenDesignModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setDesignModalProject?: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectCard = ({
  project,
  setOpenDesignModal,
  setDesignModalProject,
}: ProjectCardProps): ReactElement => {
  const [isActive, setIsActive] = useState(false);
  const { config, title, description, website, github, stack } = project;

  return (
    <Container isActive={isActive}>
      <MainButton onClick={() => setIsActive(!isActive)} isActive={isActive}>
        {isActive ? "x" : "?"}
      </MainButton>
      <Content>
        <div className="box">
          <h3>{title}</h3>
          <div>
            <p>{description}</p>
            {stack && <Stack>{stack.map((icon, index) => icon(`${title}-${index}`))}</Stack>}
            {config === "github" && (
              <>
                <Tooltip text="Visit the live version!">
                  <a href={website} target="_blank" rel="noreferrer">
                    <Image src={tabIcon} alt="website" className="button" />
                  </a>
                </Tooltip>
                <Tooltip text="Explore the repo!">
                  <a href={github} target="_blank" rel="noreferrer">
                    <Image src={githubIcon} alt="github" className="button" />
                  </a>
                </Tooltip>
              </>
            )}
            {config === "working" && (
              <div className="working">
                <Image src={workingIcon} alt="working" />
                <p>Actually working on it</p>
              </div>
            )}
            {config === "design" && (
              <Tooltip text="Take a look at the designs!">
                <Image
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
      </Content>
    </Container>
  );
};

export default ProjectCard;
