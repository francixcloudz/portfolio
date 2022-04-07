// Styled
import { Container, Project, Image } from "./styled";

// Children
import Overlay from "./Overlay";

// Assets
import { projects, ProjectType } from "assets/portfolio";

type Props = {
  type: ProjectType;
  setOpenDesignModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setDesignModalProject?: React.Dispatch<React.SetStateAction<string>>;
};

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
