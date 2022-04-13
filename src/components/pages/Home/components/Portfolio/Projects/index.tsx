// Dependencies
import { forwardRef } from "react";

// Files
import { Container, Project, Image } from "./styled";
import Overlay from "./Overlay";
import type { Props } from "./types";

// Assets
import { projects } from "assets/constants/portfolio";

const Projects: React.FC<Props & React.RefAttributes<HTMLDivElement>> =
  forwardRef(({ type, setOpenDesignModal, setDesignModalProject }, ref) => {
    return (
      <Container ref={ref}>
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
  });

export default Projects;
