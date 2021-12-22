// Styled
import { Container, Project } from "./styled";

// Children
import Overlay from "./Overlay";

// Assets
import { portfolio, projects, ProjectsName } from "assets/components/Portfolio";

const Projects: React.FC<{
  type: string;
  setOpenDesignModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setDesignModalProject?: React.Dispatch<React.SetStateAction<ProjectsName>>;
}> = ({ type, setOpenDesignModal, setDesignModalProject }) => {
  return (
    <Container id="Projects">
      {(type === "portfolio" ? portfolio : projects).map((project) => (
        <Project key={project.title} id={project.title}>
          <img src={project.img} alt={project.title} />
          <Overlay
            project={project}
            setOpenDesignModal={setOpenDesignModal}
            setDesignModalProject={setDesignModalProject}
          />
        </Project>
      ))}
    </Container>
  );
};

export default Projects;
