import { rgba } from "polished";
import styled from "styled-components";
import GenericButton from "components/atoms/GenericButton/GenericButton";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Button = styled(GenericButton)`
  cursor: pointer;
  border-radius: 0.5rem;
  background: transparent;
  width: 100%;
  height: 100%;
  letter-spacing: 1px;
`;

export const AddTicketButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.violet};
  font-weight: ${({ theme }) => theme.fonts.Nunito.weights.Bold};
`;

export const SubmitButton = styled(Button)`
  font-family: ${({ theme }) => theme.fonts.FredokaOne.family};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.violet} 21px, transparent 1%)
      center,
    linear-gradient(${({ theme }) => theme.colors.violet} 21px, transparent 1%) center,
    ${({ theme }) => theme.colors.white};
  background-size: 22px 22px;
  padding: 1rem;

  :hover {
    box-shadow: 0 0.5rem 1rem -0.2rem ${({ theme }) => rgba(theme.colors.violet, 0.8)};
  }
`;

export const DeleteTicketButton = styled(GenericButton)`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  position: absolute;
  top: 0;
  right: 0;
  color: ${({ theme }) => rgba(theme.colors.white, 1)};
  background: ${({ theme }) => rgba(theme.colors.violet, 1)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.FredokaOne.family};

  :hover {
    box-shadow: 0 5px 15px -2.5px ${({ theme }) => rgba(theme.colors.violet, 0.3)};
  }
`;

export const TicketsWrapper = styled.div`
  width: 100%;
  overflow: auto;
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
    linear-gradient(${theme.colors.violet_darkest} 2.6px, transparent 2.6px) 0px -1.3px / 32.5px 32.5px,
    linear-gradient(90deg, ${theme.colors.violet_darkest} 2.6px, ${theme.colors.black} 2.6px) -1.3px 0px / 32.5px 32.5px
  `};
  max-width: 700px;
  max-height: 25.2rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    flex: 1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => rgba(theme.colors.violet, 0.4)};

    :hover {
      background-color: ${({ theme }) => rgba(theme.colors.violet, 0.5)};
    }
  }

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const TicketItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: inset 0 -0.2rem 1rem 0 ${({ theme }) => rgba(theme.colors.violet, 0.3)};
  background: ${({ theme }) => rgba(theme.colors.violet_darker, 0.5)};
`;

export const TicketDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Input = styled.input`
  cursor: pointer;
  border-radius: 0.25rem;
  font-weight: ${({ theme }) => theme.fonts.Nunito.weights.Bold};
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.violet_darker};
  color: ${({ theme }) => theme.colors.white};
  background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.violet_darker} 11px,
        transparent 1%
      )
      center,
    linear-gradient(${({ theme }) => theme.colors.violet_darker} 11px, transparent 1%) center,
    ${({ theme }) => theme.colors.violet_darker};
  background-size: 12px 12px;
  box-shadow: 0 2.5px 10px -2.5px ${({ theme }) => rgba(theme.colors.violet, 0.15)};

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.violet};
    background: linear-gradient(
          90deg,
          ${({ theme }) => theme.colors.violet_darker} 11px,
          transparent 1%
        )
        center,
      linear-gradient(${({ theme }) => theme.colors.violet_darker} 11px, transparent 1%) center,
      ${({ theme }) => theme.colors.violet};
    background-size: 12px 12px;
    box-shadow: 0 5px 15px -2.5px ${({ theme }) => rgba(theme.colors.violet, 0.3)};
  }
`;

export const NameInput = styled(Input)``;

export const DniInput = styled(Input)``;

export const TotalPrice = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.Nunito.weights.ExtraBold};
`;
