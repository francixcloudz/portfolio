import { ReactElement, ReactNode } from "react";
import ReactDOM from "react-dom";
import { Container, Close, Content, Overlay, Modal } from "./GenericModal.styled";
import { GenericModalVariants } from "./utils/data";

export interface GenericModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  variant: GenericModalVariants;
}

const GenericModal = ({
  children,
  isOpen,
  onClose,
  variant,
}: GenericModalProps): ReactElement | null => {
  if (!isOpen) return null;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const ModalVariant = Modal[variant];

  return ReactDOM.createPortal(
    <Container>
      <Overlay onClick={onClose} />
      <ModalVariant isOpen={isOpen}>
        <Content>{children}</Content>
        <Close onClick={onClose}>x</Close>
      </ModalVariant>
    </Container>,
    document.body,
  );
};

export { GenericModalVariants };

export default GenericModal;
