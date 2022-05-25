import type { ReactElement, ReactNode } from "react";
import { Container } from "./PageContainer.styles";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer = ({ children, ...props }: PageContainerProps): ReactElement => (
  <Container {...props}>{children}</Container>
);

export default PageContainer;
