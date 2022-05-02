import { useState } from "react";
import { Container, Box } from "./Tooltip.styled";
import { TooltipType } from "./Tooltip.types";

export const Tooltip: TooltipType = ({ children, text }) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Box show={show}>
        <p>{text}</p>
      </Box>
      <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
      </div>
    </Container>
  );
};
