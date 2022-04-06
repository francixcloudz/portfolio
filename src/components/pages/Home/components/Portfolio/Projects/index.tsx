// Styled
import { Container, Project } from "./styled";

// Children
import Overlay from "./Overlay";

// Assets
import { projects, ProjectType } from "assets/portfolio";

type Props = {
  type: ProjectType;
  setOpenDesignModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setDesignModalProject?: React.Dispatch<React.SetStateAction<string>>;
};

const Component: React.FC<Props> = ({
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

export default Component;
