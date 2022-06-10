import QRCode from "react-qr-code";
import styled from "styled-components";
import Image from "components/atoms/Image/Image";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BrandWrapper = styled.div``;

export const OneShotLogo = styled(Image)`
  width: 7.5rem;
  height: 7.5rem;
`;

export const QRCodeWrapper = styled.div`
  padding: 1rem;
  margin: auto;
  background: ${({ theme }) => theme.colors.violet};
`;

export const StyledQRCode = styled(QRCode)`
  margin: 2rem;
`;

export const PaymentDetailsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
