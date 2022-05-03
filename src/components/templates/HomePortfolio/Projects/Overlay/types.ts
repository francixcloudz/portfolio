// Assets
import type { Project } from "data/portfolio";

export type Props = {
  project: Project;
  setOpenDesignModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setDesignModalProject?: React.Dispatch<React.SetStateAction<string>>;
};
