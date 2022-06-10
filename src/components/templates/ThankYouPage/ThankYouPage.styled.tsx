import styled from "styled-components";
import Image from "components/atoms/Image/Image";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OneShotLogo = styled(Image)`
  margin: auto;
  width: 15rem;
  height: 15rem;
`;
