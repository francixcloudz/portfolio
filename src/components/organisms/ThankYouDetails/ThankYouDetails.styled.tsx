import { rgba } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const QRCodeWrapper = styled.div`
  padding: 1rem;
  margin: auto;
  box-shadow: 0 0.2rem 1rem 0 ${({ theme }) => rgba(theme.colors.violet, 0.6)};
  border-radius: 1rem;
  padding: 2rem;
  background: ${({ theme }) => `
    radial-gradient(
      circle,
      transparent 20%,
      ${theme.colors.black} 20%,
      ${theme.colors.black} 80%,
      transparent 80%,
      transparent
    )
    0% 0% / 65px 65px,
    radial-gradient(
        circle,
        transparent 20%,
        ${theme.colors.black} 20%,
        ${theme.colors.black} 80%,
        transparent 80%,
        transparent
      )
      32.5px 32.5px / 65px 65px,
    linear-gradient(${theme.colors.violet} 2.6px, transparent 2.6px) 0px -1.3px / 32.5px 32.5px,
    linear-gradient(90deg, ${theme.colors.violet} 2.6px, ${theme.colors.black} 2.6px) -1.3px 0px / 32.5px 32.5px
  `};
`;

export const PaymentDetailsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
