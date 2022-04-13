// Dependencies
import { useState, useRef } from "react";

// Files
import { Container, Content, Box, Title } from "./styled";
import { handleAnimations } from "./utils";
import { getPortfolio } from "./data";
import Projects from "./Projects";

// Components
import DesignModal from "components/organisms/DesignModal";

// Assets
import useIsoLayoutEffect from "assets/hooks/useIsoLayoutEffect";
import useRefSet, { RefSet } from "assets/hooks/useRefSet";
import type { AllRefsGsap } from "assets/types";

const Portfolio: React.FC = () => {
  const [openDesignModal, setOpenDesignModal] = useState(false);
  const [designModalProject, setDesignModalProject] = useState<string>("");

  const allRefs = useRef<AllRefsGsap>({});
  const ref = useRefSet(allRefs);

  useIsoLayoutEffect(
    () => handleAnimations({ refs: new RefSet(allRefs.current) }),
    []
  );

  return (
    <>
      <Container id="Portfolio">
        <Content ref={(node) => ref("Content", node)}>
          {getPortfolio(setOpenDesignModal, setDesignModalProject).map(
            (porfolio) => (
              <Box key={porfolio.projects.type}>
                <Title {...porfolio.title} />
                <Projects {...porfolio.projects} />
              </Box>
            )
          )}
        </Content>
      </Container>
      <DesignModal
        openDesignModal={openDesignModal}
        setOpenDesignModal={setOpenDesignModal}
        designModalProject={designModalProject}
      />
    </>
  );
};

export default Portfolio;
