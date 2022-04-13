// Files
import type { Props as ProjectsProps } from "./Projects/types";

// Components
import type { Props as TitleProps } from "components/atoms/Title/types";

// Assets
import type { RefSet } from "assets/hooks/useRefSet";

export type GetTimeline = (props: { refs: RefSet }) => gsap.core.Timeline;

export type HandleAnimations = (props: { refs: RefSet }) => void;

export type Portfolio = Array<{
  title: TitleProps;
  projects: ProjectsProps;
}>;

export type GetPortfolio = (
  setOpenDesignModal?: React.Dispatch<React.SetStateAction<boolean>>,
  setDesignModalProject?: React.Dispatch<React.SetStateAction<string>>
) => Portfolio;
