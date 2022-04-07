// Styled
import { Container, Overlay, Box, Content, Close } from "./styled";

// Components
import Icons from "components/atoms/Icon";

const Modal: React.FC<{
  children: React.ReactNode;
  id?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  fitContent?: boolean;
  overflow?: boolean;
}> = ({ children, id, open, setOpen, fitContent, overflow }) => {
  return !open ? null : (
    <Container id={id}>
      <Overlay onClick={() => setOpen(false)} />
      <Box data-state={open} fitContent={fitContent} overflow={overflow}>
        <Close onClick={() => setOpen(false)}>
          <Icons.Close />
        </Close>
        <Content>{children}</Content>
      </Box>
    </Container>
  );
};

export default Modal;
