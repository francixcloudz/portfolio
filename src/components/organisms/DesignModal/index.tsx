// Dependencies
import ReactDOM from "react-dom";

// Styled
import { Container, Close, PageList, Image } from "./styled";

// Assets
import { data as sistemason } from "assets/portfolio/ventures/sistemason";
import { data as instasorteos } from "assets/portfolio/ventures/instasorteos";
import { data as somoswebi } from "assets/portfolio/ventures/somoswebi";

type Props = {
  openDesignModal: boolean;
  setOpenDesignModal: React.Dispatch<React.SetStateAction<boolean>>;
  designModalProject: string;
};

const DesignModal: React.FC<Props> = ({
  openDesignModal,
  setOpenDesignModal,
  designModalProject,
}) => {
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
                <Image src={project.img} alt={project.title} />
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
