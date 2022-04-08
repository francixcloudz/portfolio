// Dependencies
import type { StaticImageData } from "next/image";

// Assets
import buttonmaker from "./demos/buttonmaker.png";
import slidingpuzzle from "./demos/slidingpuzzle.png";
import kanbanapp from "./demos/kanbanapp.png";
import pharmacyapp from "./projects/pharmacyapp.png";
import marcapropia from "./projects/marcapropia.png";
import globalgamejam from "./projects/globalgamejam.png";
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
  NEXT,
  MONGODB,
  FAUNDADB,
  GOOGLE,
  STYLED_COMPONENTS,
  CSHARP,
  UNITY,
  GSAP,
} from "./icons";

export type ProjectType = "demos" | "projects" | "ventures";
export type Project = {
  type: ProjectType;
  config: "github" | "working" | "design";
  title: string;
  description: string;
  img: StaticImageData;
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
    github: "https://github.com/franciscloudz/portfolio",
    stack: [HTML, CSS, TS],
  },
  {
    type: "demos",
    config: "github",
    title: "Button Maker",
    description: "Design attractive buttons by generating their CSS code",
    img: buttonmaker,
    website: "https://button-maker.vercel.app",
    github: "https://github.com/franciscloudz/button-maker",
    stack: [HTML, CSS_MODULES, SASS, TS, REACT, REDUX],
  },
  {
    type: "demos",
    config: "working",
    title: "Kanban App",
    description:
      "Boost productivity by organizing your workflow in a practical and visual way",
    img: kanbanapp,
    github: "https://github.com/franciscloudz/portfolio",
    stack: [
      HTML,
      STYLED_COMPONENTS,
      TS,
      REACT,
      REDUX,
      NODEJS,
      EXPRESS,
      MONGODB,
    ],
  },

  {
    type: "projects",
    config: "github",
    title: "Pharmacy App",
    description:
      "Enhance workflow between pharmacists and doctors from Argentina",
    img: pharmacyapp,
    website: "https://farmaceuticos-asociados.web.app",
    github: "https://github.com/franciscloudz/portfolio",
    stack: [HTML, CSS_MODULES, TS, REACT, REDUX, GOOGLE],
  },
  {
    type: "projects",
    config: "github",
    title: "Marca Propia",
    description:
      "Unifies the product communication strategy of multiple pharmacies around Argentina",
    img: marcapropia,
    website: "https://marcapropia.org/farmaceuticosasociados",
    github: "https://github.com/franciscloudz/portfolio",
    stack: [HTML, CSS_MODULES, GSAP, TS, NEXT, REACT, REDUX, GOOGLE, FAUNDADB],
  },
  {
    type: "projects",
    config: "github",
    title: "Schrödinger's Cat",
    description:
      "A game we launched to participate in the biggest gaming hackathon in the world, the GlobalGameJam!",
    img: globalgamejam,
    website:
      "https://globalgamejam.org/2022/games/bardo-decide-fate-schr%C3%B6dingers-cat-6",
    github: "https://github.com/franciscloudz/portfolio",
    stack: [UNITY, CSHARP],
  },

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
