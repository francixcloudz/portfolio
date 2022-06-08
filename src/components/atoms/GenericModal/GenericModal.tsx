import { ReactElement, ReactNode, forwardRef } from "react";
import ReactDOM from "react-dom";
import { Container, CloseIcon, Content, Overlay, Modal } from "./GenericModal.styled";
import { GenericModalVariants } from "./utils/data";

export interface GenericModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  variant: GenericModalVariants;
}

const GenericModal = forwardRef<HTMLDivElement, GenericModalProps>(
  (
    { children, isOpen, onClose, variant, ...rest }: GenericModalProps,
    ref,
  ): ReactElement | null => {
    if (!isOpen) return null;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const ModalVariant = Modal[variant];

    return ReactDOM.createPortal(
      <Container ref={ref} {...rest}>
        <Overlay onClick={onClose} />
        <ModalVariant isOpen={isOpen}>
          <Content>{children}</Content>
          <CloseIcon onClick={onClose}>x</CloseIcon>
        </ModalVariant>
      </Container>,
      document.body,
    );
  },
);

export { GenericModalVariants };

export default GenericModal;
