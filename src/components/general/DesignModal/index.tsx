// Dependencies
import ReactDOM from "react-dom";

// Styled
import { Container, Close, PageList } from "./styled";

// Assets
import { data as sistemason } from "assets/components/Portfolio/projects/sistemason";
import { data as instasorteos } from "assets/components/Portfolio/projects/instasorteos";
import { data as somoswebi } from "assets/components/Portfolio/projects/somoswebi";
import type { ProjectsName } from "assets/components/Portfolio";

const DesignModal: React.FC<{
  openDesignModal: boolean;
  setOpenDesignModal: React.Dispatch<React.SetStateAction<boolean>>;
  designModalProject: ProjectsName;
}> = ({ openDesignModal, setOpenDesignModal, designModalProject }) => {
  const handleData = (project: ProjectsName) => {
    switch (project) {
      case "Sistema SON":
        return sistemason;
      case "InstaSorteos":
        return instasorteos;
      case "WEBI":
        return somoswebi;
      default:
        return [];
    }
  };

  if (!openDesignModal) return null;
  return ReactDOM.createPortal(
    <Container id="DesignModal" data-state={openDesignModal}>
      <div className="overlay" onClick={() => setOpenDesignModal(false)}></div>
      <div className="modal">
        <Close onClick={() => setOpenDesignModal(false)}>x</Close>
        <h2>{designModalProject}</h2>
        <PageList>
          {handleData(designModalProject).map((project) => (
            <div className="wrapper" key={project.title}>
              <div className="page">
                <p>
                  <span>i</span>
                  {project.title}
                </p>
                <img src={project.img} alt={project.title} />
              </div>
            </div>
          ))}
        </PageList>
      </div>
    </Container>,
    document.body
  );
};

export default DesignModal;
