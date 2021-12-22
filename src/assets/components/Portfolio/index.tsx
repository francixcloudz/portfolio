// Assets
import buttonmaker from "./buttonmaker.png";
import slidingpuzzle from "./slidingpuzzle.png";
import kanbanapp from "./kanbanapp.png";
import sistemason from "./projects/sistemason/home.png";
import instasorteos from "./projects/instasorteos/home.png";
import somoswebi from "./projects/somoswebi/home.png";
import {
  HTML,
  CSS,
  CSS_MODULES,
  SASS,
  TS,
  REACT,
  REDUX,
  NODEJS,
  EXPRESS,
  NEXTJS,
  MONGODB,
} from "./icons";

// Constants
export type ProjectsName = "Sistema SON" | "InstaSorteos" | "WEBI" | string;
export type Project = {
  config: "github" | "working" | "design";
  title: ProjectsName;
  description: string;
  img: string;
};
export type Portfolio = Project & {
  config: "github" | "working" | "design";
  title: string;
  description: string;
  img: string;
  website?: string;
  github?: string;
  stack?: Array<(key: string) => JSX.Element>;
};

export const portfolio: Array<Portfolio> = [
  {
    config: "github",
    title: "Sliding Puzzle",
    description: "Test your brain skills with the 4x4 sliding puzzle game",
    img: slidingpuzzle,
    website: "https://slidingpuzzle.vercel.app",
    github: "https://github.com/franarrigoni/sliding-puzzle",
    stack: [HTML, CSS, TS],
  },
  {
    config: "github",
    title: "Button Maker",
    description: "Design attractive buttons by generating their CSS code",
    img: buttonmaker,
    website: "https://button-maker.vercel.app",
    github: "https://github.com/franarrigoni/button-maker",
    stack: [HTML, CSS_MODULES, SASS, TS, REACT, REDUX],
  },
  {
    config: "working",
    title: "Kanban App",
    description:
      "Boost productivity by organizing your workflow in a practical and visual way",
    img: kanbanapp,
    github: "https://github.com/franarrigoni/kanban-app",
    stack: [
      HTML,
      CSS_MODULES,
      TS,
      REACT,
      REDUX,
      NODEJS,
      EXPRESS,
      NEXTJS,
      MONGODB,
    ],
  },
];

export const projects: Array<Project> = [
  {
    config: "design",
    title: "Sistema SON",
    description:
      "Nutritional solutions for a quick incorporation and learning of healthy and balanced nutritional habits",
    img: sistemason,
  },
  {
    config: "design",
    title: "InstaSorteos",
    description:
      "The best, cheapest, simplest, and unlimited tool for entrepreneurs looking to grow their audience with giveaways on Instagram",
    img: instasorteos,
  },
  {
    config: "design",
    title: "WEBI",
    description:
      "Web development agency “all-in” to allow entrepreneurs to focus time on what really matters: their business and their customers",
    img: somoswebi,
  },
];
