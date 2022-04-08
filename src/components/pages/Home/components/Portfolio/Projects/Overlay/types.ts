// Assets
import type { Project } from "assets/constants/portfolio";

export type Props = {
  project: Project;
  setOpenDesignModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setDesignModalProject?: React.Dispatch<React.SetStateAction<string>>;
};
