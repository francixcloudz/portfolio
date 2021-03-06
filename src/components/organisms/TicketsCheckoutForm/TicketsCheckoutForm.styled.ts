import { rgba } from "polished";
import styled, { css } from "styled-components";
import FullScreenMessage from "components/atoms/FullScreenMessage/FullScreenMessage";
import GenericButton from "components/atoms/GenericButton/GenericButton";
import GenericModal from "components/atoms/GenericModal/GenericModal";
import Icon from "components/atoms/Icon/Icon";
import InlineLoader from "components/atoms/InlineLoader/InlineLoader";

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
  align-items: center;
  width: 100%;
  max-width: 450px;

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Button = styled(GenericButton)`
  cursor: pointer;
  border-radius: 0.5rem;
  background: transparent;
  width: 100%;
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
  padding: 1rem 3rem;

  :hover {
    box-shadow: 0 0.5rem 1rem -0.2rem ${({ theme }) => rgba(theme.colors.violet, 0.8)};
  }
`;

export const DeleteTicketButton = styled(GenericButton)`
  display: block;
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
  position: relative;
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
  width: 100%;
  max-width: 700px;
  height: 25.2rem;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    height: auto;
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

export const TagsWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
`;

const TagBannerStyle = css`
  color: ${({ theme }) => theme.colors.violet};
  background: ${({ theme }) => rgba(theme.colors.violet, 0.3)};
  border: 1px solid ${({ theme }) => theme.colors.violet_darker};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.fonts.Nunito.weights.Bold};
`;

export const InfoButton = styled.div`
  cursor: pointer;
  ${TagBannerStyle}

  * {
    cursor: pointer;
  }
`;

export const LockBanner = styled.div`
  ${TagBannerStyle}
`;

const TagIconStyle = css`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  fill: ${({ theme }) => theme.colors.violet};
`;

export const InfoIcon = styled(Icon.Info)`
  ${TagIconStyle}
`;

export const LockIcon = styled(Icon.Lock)`
  ${TagIconStyle}
`;

export const InfoModal = styled(GenericModal)`
  > *:nth-child(1) {
    background: ${({ theme }) => rgba(theme.colors.violet_darkest, 0.7)};
  }
  > *:nth-child(2) {
    padding: 2rem;
    box-shadow: 0 0 2rem 0 ${({ theme }) => rgba(theme.colors.black, 0.5)};

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
  }
`;

export const DetailsTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.FredokaOne.family};
  font-size: 1.3rem;

  margin-top: 2rem;
`;

export const DetailsContent = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.Nunito.weights.Bold};
  font-size: 1rem;
`;

export const StyledInlineLoader = styled(InlineLoader)``;

export const StyledFullScreenMessage = styled(FullScreenMessage)`
  > * {
    max-width: ${({ theme }) => theme.breakpoints.xxsmall}px;
  }
`;

export const StyledPayButton = styled(SubmitButton)`
  width: fit-content;
`;

export const DisabledOverlay = styled.div`
  font-family: ${({ theme }) => theme.fonts.FredokaOne.family};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => rgba(theme.colors.black, 0.6)};
`;
