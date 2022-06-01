import { useRef } from "react";
import SectionTitle from "components/atoms/SectionTitle/SectionTitle";
import useIsoLayoutEffect from "hooks/useIsoLayoutEffect";
import useRefSet, { RefSet } from "hooks/useRefSet";
import { AllRefsGsap } from "types";
import emoji from "assets/images/emojis/Hello.png";
import { Container, Content, Box, Resume } from "./About.styled";
import handleAnimations from "./utils/handleAnimations";

const About: React.FC = () => {
  const allRefs = useRef<AllRefsGsap>({});
  const ref = useRefSet(allRefs);

  useIsoLayoutEffect(() => handleAnimations({ refs: new RefSet(allRefs.current) }), []);

  return (
    <Container>
      <Content ref={(node) => ref("Content", node)}>
        <Box ref={(node) => ref("Box", node)}>
          <SectionTitle
            title="Hey there! I'm Francisco"
            subtitle="Proactive, meticulous, and resourceful professional, eager to keep
            growing and learning"
            emoji={emoji}
            ref={(node) => ref("Title", node)}
            isWhite
          />
          <p ref={(node) => ref("Paragraph", node)}>
            This is the place where you can check out my work and discover that we can create
            something exciting together!
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
