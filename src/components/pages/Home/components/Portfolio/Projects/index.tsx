// Styled
import { Container, Project, Image } from "./styled";

// Children
import Overlay from "./Overlay";

// Files
import type { Props } from "./types";

// Assets
import { projects } from "assets/constants/portfolio";

const Projects: React.FC<Props> = ({
  type,
  setOpenDesignModal,
  setDesignModalProject,
}) => {
  return (
    <Container>
      {projects
        .filter(({ type: projectType }) => projectType === type)
        .map((project) => (
          <Project key={project.title}>
            <Image src={project.img} alt={project.title} />
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
