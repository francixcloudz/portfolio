import { rgba } from "polished";
import styled from "styled-components";
import ImageTemplate from "components/atoms/Image/Image";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.violet};
  padding: 10vh 2.5% 20vh;
`;

export const FormWrapper = styled.div`
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.yellow} 21px, transparent 1%)
      center,
    linear-gradient(${({ theme }) => theme.colors.yellow} 21px, transparent 1%) center,
    ${({ theme }) => theme.colors.violet};
  background-size: 22px 22px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 5px 15px 0 rgba(${({ theme }) => rgba(theme.colors.black, 0.5)});
  max-width: 600px;
  padding: 3rem;
  margin: 0 auto;
  border-radius: 20px;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  input {
    width: 48%;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
      width: 100%;
    }
  }

  textarea {
    width: 100%;
  }

  input,
  textarea {
    cursor: pointer;
    border-radius: 0.5rem;
    font-weight: ${({ theme }) => theme.fonts.Nunito.weights.Bold};

    padding: 1rem;
    color: ${({ theme }) => theme.colors.black};
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.white} 11px, transparent 1%)
        center,
      linear-gradient(${({ theme }) => theme.colors.white} 11px, transparent 1%) center,
      ${({ theme }) => theme.colors.white};
    background-size: 12px 12px;
    box-shadow: 0 2.5px 10px -2.5px rgba(${({ theme }) => rgba(theme.colors.black, 0.15)});

    &:hover,
    &:focus {
      background: linear-gradient(90deg, ${({ theme }) => theme.colors.white} 11px, transparent 1%)
          center,
        linear-gradient(${({ theme }) => theme.colors.white} 11px, transparent 1%) center,
        ${({ theme }) => theme.colors.violet};
      background-size: 12px 12px;
      box-shadow: 0 5px 15px -2.5px rgba(${({ theme }) => rgba(theme.colors.black, 0.3)});
    }
  }
`;

export const Error = styled.p`
  margin: auto;
  padding-bottom: 1rem;
  text-shadow: 0 0.1rem 0.1rem rgba(${({ theme }) => rgba(theme.colors.black)};, 0.2);
`;

export const Submit = styled.input`
  cursor: pointer;
  display: block;
  width: 100%;
  margin: 10px auto 0;
  padding: 10px 30px;
  border-radius: 10px;
  background: transparent;
  font-weight: ${({ theme }) => theme.fonts.Nunito.weights.Bold};

  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.violet} !important;
  border: 2px solid ${({ theme }) => theme.colors.violet};
  box-shadow: 0 6px 10px -3px rgba(65, 23, 171, 0.5);
  text-transform: uppercase;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.yellow} 21px, transparent 1%)
      center,
    linear-gradient(${({ theme }) => theme.colors.yellow} 21px, transparent 1%) center,
    ${({ theme }) => theme.colors.yellow};
  background-size: 22px 22px;
  height: 70px;

  &:hover {
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.violet} 21px, transparent 1%)
        center,
      linear-gradient(${({ theme }) => theme.colors.violet} 21px, transparent 1%) center,
      ${({ theme }) => theme.colors.white};
    background-size: 22px 22px;
  }
`;

export const SocialIcons = styled.div`
  width: fit-content;
  margin: 20px auto 0 auto;
  display: flex;
`;

export const SocialIcon = styled(ImageTemplate)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.yellow};
  width: 25px;
  margin: 0 10px;

  * {
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
