import { ReactElement } from "react";

interface DesignModalProps {
  openDesignModal: boolean;
  setOpenDesignModal: React.Dispatch<React.SetStateAction<boolean>>;
  designModalProject: string;
}

export type DesignModalType = (props: DesignModalProps) => ReactElement | null;
