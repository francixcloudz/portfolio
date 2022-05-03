import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;

  * {
    overflow: visible !important;
    width: inherit !important;
    height: inherit !important;
    border-radius: inherit !important;
    min-width: 100% !important;
    max-width: 100% !important;
    min-height: 100% !important;
    max-height: 100% !important;
  }
`;
