// Assets
import type { ProjectType } from "data/portfolio";

export type Props = {
  type: ProjectType;
  setOpenDesignModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setDesignModalProject?: React.Dispatch<React.SetStateAction<string>>;
};
