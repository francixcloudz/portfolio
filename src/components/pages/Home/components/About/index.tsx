// Dependencies
import { useRef } from "react";

// Files
import { Container, Content, Box, Resume } from "./styled";
import { handleAnimations } from "./utils";

// Components
import Title from "components/atoms/Title";

// Assets
import useIsoLayoutEffect from "assets/hooks/useIsoLayoutEffect";
import useRefSet, { RefSet } from "assets/hooks/useRefSet";
import emoji from "assets/media/emojis/Hello.png";
import type { AllRefsGsap } from "assets/types";

const About: React.FC = () => {
  const allRefs = useRef<AllRefsGsap>({});
  const ref = useRefSet(allRefs);

  useIsoLayoutEffect(
    () => handleAnimations({ refs: new RefSet(allRefs.current) }),
    []
  );

  return (
    <Container>
      <Content ref={(node) => ref("Content", node)}>
        <Box ref={(node) => ref("Box", node)}>
          <Title
            title="Hey there! I'm Francisco"
            subtitle="Proactive, meticulous, and resourceful professional, eager to keep
            growing and learning"
            emoji={emoji}
            variant="white"
            ref={(node) => ref("Title", node)}
          />
          <p ref={(node) => ref("Paragraph", node)}>
            This is the place where you can check out my work and discover that
            we can create something exciting together!
          </p>
          <Resume ref={(node) => ref("Resume", node)}>
            <div className="box">
              <h3>¡Breaking News!</h3>
              <p>Currently seeking job opportunities in IT</p>
              <a
                href="https://arrigoni.s3.sa-east-1.amazonaws.com/Francisco+Arrigoni+-+Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume / CV
              </a>
            </div>
          </Resume>
        </Box>
      </Content>
    </Container>
  );
};

export default About;
