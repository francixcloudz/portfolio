// Assets
import buttonmaker from "./demos/buttonmaker.png";
import slidingpuzzle from "./demos/slidingpuzzle.png";
import kanbanapp from "./demos/kanbanapp.png";
import sistemason from "./ventures/sistemason/home.png";
import instasorteos from "./ventures/instasorteos/home.png";
import somoswebi from "./ventures/somoswebi/home.png";
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
export type ProjectType = "demos" | "portfolio" | "ventures";
export type Project = {
  type: ProjectType;
  config: "github" | "working" | "design";
  title: string;
  description: string;
  img: string;
  website?: string;
  github?: string;
  stack?: Array<(key: string) => JSX.Element>;
};

export const projects: Array<Project> = [
  {
    type: "demos",
    config: "github",
    title: "Sliding Puzzle",
    description: "Test your brain skills with the 4x4 sliding puzzle game",
    img: slidingpuzzle,
    website: "https://slidingpuzzle.vercel.app",
    github: "https://github.com/franarrigoni/sliding-puzzle",
    stack: [HTML, CSS, TS],
  },
  {
    type: "demos",
    config: "github",
    title: "Button Maker",
    description: "Design attractive buttons by generating their CSS code",
    img: buttonmaker,
    website: "https://button-maker.vercel.app",
    github: "https://github.com/franarrigoni/button-maker",
    stack: [HTML, CSS_MODULES, SASS, TS, REACT, REDUX],
  },
  {
    type: "demos",
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
  // {
  //   type: "portfolio",
  //   config: "github",
  //   title: "Vademecum",
  //   description:
  //     "Enhance workflow between pharmacists and doctors from Argentina",
  //   img: sistemason,
  //   website: "https://farmaceuticos-asociados.web.app",
  //   github: "https://github.com/franarrigoni/farmaceuticosasociados",
  // },
  // {
  //   type: "portfolio",
  //   config: "github",
  //   title: "Marca Propia",
  //   description: "bla",
  //   img: sistemason,
  //   website: "https://marcapropia.org/farmaceuticosasociados",
  //   github: "https://github.com/franarrigoni/marcapropia",
  // },
  // {
  //   type: "portfolio",
  //   config: "github",
  //   title: "bla",
  //   description: "bla",
  //   img: sistemason,
  //   website: "https://button-maker.vercel.app",
  //   github: "https://github.com/franarrigoni/kanban-app",
  // },
  {
    type: "ventures",
    config: "design",
    title: "Sistema SON",
    description:
      "Nutritional solutions for a quick incorporation and learning of healthy and balanced nutritional habits",
    img: sistemason,
  },
  {
    type: "ventures",
    config: "design",
    title: "InstaSorteos",
    description:
      "The best, cheapest, simplest, and unlimited tool for entrepreneurs looking to grow their audience with giveaways on Instagram",
    img: instasorteos,
  },
  {
    type: "ventures",
    config: "design",
    title: "WEBI",
    description:
      "Web development agency “all-in” to allow entrepreneurs to focus time on what really matters: their business and their customers",
    img: somoswebi,
  },
];
