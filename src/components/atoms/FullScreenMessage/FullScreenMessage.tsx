import { ReactNode, forwardRef } from "react";
import { createPortal } from "react-dom";
import { Container } from "./FullScreenMessage.styled";

interface FullScreenMessageProps {
  children: ReactNode;
}

const FullScreenMessage = forwardRef<HTMLDivElement, FullScreenMessageProps>(
  ({ children, ...rest }, ref) =>
    createPortal(
      <Container ref={ref} {...rest}>
        {children}
      </Container>,
      document.body,
    ),
);

export default FullScreenMessage;
