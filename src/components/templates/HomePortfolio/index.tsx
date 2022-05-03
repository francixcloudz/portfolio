import { useState, useRef } from "react";
import { Container, Content, Box, Title } from "./styled";
import { handleAnimations } from "./utils";
import { getPortfolio } from "./data";
import Projects from "./Projects";
import DesignModal from "components/organisms/DesignModal";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useRefSet, { RefSet } from "hooks/useRefSet";
import type { AllRefsGsap } from "types";

const Portfolio: React.FC = () => {
  const [openDesignModal, setOpenDesignModal] = useState(false);
  const [designModalProject, setDesignModalProject] = useState<string>("");

  const allRefs = useRef<AllRefsGsap>({});
  const ref = useRefSet(allRefs);

  useIsoLayoutEffect(() => handleAnimations({ refs: new RefSet(allRefs.current) }), []);

  return (
    <>
      <Container id="Portfolio">
        <Content ref={(node) => ref("Content", node)}>
          {getPortfolio(setOpenDesignModal, setDesignModalProject).map((porfolio) => (
            <Box key={porfolio.projects.type}>
              <Title {...porfolio.title} />
              <Projects {...porfolio.projects} />
            </Box>
          ))}
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
