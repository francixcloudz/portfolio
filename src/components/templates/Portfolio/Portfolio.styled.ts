import styled from "styled-components";
import SectionTitle from "components/atoms/SectionTitle/SectionTitle";
import { COLORS } from "styles/theme";

export const Container = styled.div`
  background: ${COLORS.PRIMARY};
  width: 100vw;
`;

export const Box = styled.div`
  margin: auto;
`;

export const Content = styled.div`
  background: linear-gradient(90deg, ${COLORS.WHITE} 21px, transparent 1%) center,
    linear-gradient(${COLORS.WHITE} 21px, transparent 1%) center, ${COLORS.PRIMARY};
  background-size: 22px 22px;
  border-radius: 0 0 20vw 20vw;
  padding: 20vh 0 20vh 0;

  > ${Box}:not(:last-child) {
    margin-bottom: 10vh;
  }
`;

export const Title = styled(SectionTitle)`
  max-width: 95%;
  width: 600px;
`;
