import { SectionTitleProps } from "components/atoms/SectionTitle/SectionTitle";
import { ProjectsProps } from "components/organisms/Projects/Projects";
import moonShot from "assets/images/emojis/Moonshot.png";
import myWork from "assets/images/emojis/My-work.png";

export type Portfolio = Array<{
  title: SectionTitleProps;
  projects: ProjectsProps;
}>;

const getPortfolio: (
  setOpenDesignModal?: React.Dispatch<React.SetStateAction<boolean>>,
  setDesignModalProject?: React.Dispatch<React.SetStateAction<string>>,
) => Portfolio = (setOpenDesignModal, setDesignModalProject) => [
  {
    projects: { type: "demos" },
    title: {
      title: "Portfolio",
      subtitle: "Here are a some demos I've worked on to test my tech skills",
      emoji: myWork,
      variant: "black",
    },
  },
  {
    projects: { type: "projects" },
    title: {
      title: "Projects",
      subtitle: "Here are a few projects I've worked on",
      emoji: myWork,
      variant: "black",
    },
  },
  {
    projects: { type: "ventures", setOpenDesignModal, setDesignModalProject },
    title: {
      title: "Ventures",
      subtitle:
        "One of the things I enjoy most in life is the creative process of creating solutions to problems I identify with",
      emoji: moonShot,
      variant: "black",
    },
  },
];

export default getPortfolio;
