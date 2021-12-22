// Dependencies
import { useState } from "react";

// Styled
import { Container, Box } from "./styled";

const Tooltip = ({ children, text }) => {
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
