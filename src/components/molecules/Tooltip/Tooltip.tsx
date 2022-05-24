import { ReactNode, useState } from "react";
import { Container, Box } from "./Tooltip.styled";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip = ({ children, text }: TooltipProps) => {
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

export default Tooltip;
