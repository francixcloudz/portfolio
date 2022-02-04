// Styled
import { Container, Project } from "./styled";

// Children
import Overlay from "./Overlay";

// Assets
import { projects, ProjectType } from "assets/components/Portfolio";

const Projects: React.FC<{
  type: ProjectType;
  setOpenDesignModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setDesignModalProject?: React.Dispatch<React.SetStateAction<string>>;
}> = ({ type, setOpenDesignModal, setDesignModalProject }) => {
  return (
    <Container id="Projects">
      {projects
        .filter(({ type: projectType }) => projectType === type)
        .map((project) => (
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
