import ReactDOM from "react-dom";
import instasorteos from "data/portfolio/ventures/instasorteos";
import sistemason from "data/portfolio/ventures/sistemason";
import somoswebi from "data/portfolio/ventures/somoswebi";
import { Container, Close, PageList, Image } from "./DesignModal.styled";

interface DesignModalProps {
  openDesignModal: boolean;
  setOpenDesignModal: React.Dispatch<React.SetStateAction<boolean>>;
  designModalProject: string;
}

const DesignModal = ({
  openDesignModal,
  setOpenDesignModal,
  designModalProject,
}: DesignModalProps) => {
  const handleData = (project) => {
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
    <Container data-state={openDesignModal}>
      <div className="overlay" onClick={() => setOpenDesignModal(false)} aria-hidden="true" />
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
                <Image src={project.img} alt={project.title} />
              </div>
            </div>
          ))}
        </PageList>
      </div>
    </Container>,
    document.body,
  );
};

export default DesignModal;
