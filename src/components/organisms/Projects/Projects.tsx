import { ForwardedRef, forwardRef, ReactElement } from "react";
import ProjectCard from "components/molecules/ProjectCard/ProjectCard";
import { projects, ProjectType } from "data/portfolio";
import { Container, Project, Image } from "./Projects.styled";

export interface ProjectsProps {
  type: ProjectType;
  setOpenDesignModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setDesignModalProject?: React.Dispatch<React.SetStateAction<string>>;
}

// TODO: Enhance component & Overlay

const Projects = forwardRef(
  (
    { type, setOpenDesignModal, setDesignModalProject }: ProjectsProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement | null => (
    <Container ref={ref}>
      {projects
        .filter(({ type: projectType }) => projectType === type)
        .map((project) => (
          <Project key={project.title}>
            <Image src={project.img} alt={project.title} />
            <ProjectCard
              project={project}
              setOpenDesignModal={setOpenDesignModal}
              setDesignModalProject={setDesignModalProject}
            />
          </Project>
        ))}
    </Container>
  ),
);

export default Projects;
