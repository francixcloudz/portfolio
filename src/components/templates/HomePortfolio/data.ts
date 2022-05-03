// Files
import type { GetPortfolio } from "./types";

// Assets
import myWork from "assets/images/emojis/My-work.png";
import moonShot from "assets/images/emojis/Moonshot.png";

export const getPortfolio: GetPortfolio = (setOpenDesignModal, setDesignModalProject) => [
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
