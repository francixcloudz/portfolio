// Dependencies
import { useState } from "react";

// Files
import { Container, Box } from "./styled";

type Props = {
  children: React.ReactNode;
  text: string;
};

const Tooltip: React.FC<Props> = ({ children, text }) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Box show={show}>
        <p>{text}</p>
      </Box>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </Container>
  );
};

export default Tooltip;
