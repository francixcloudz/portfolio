import styled from "styled-components";
import GenericButton from "components/atoms/GenericButton/GenericButton";

export const FormContainer = styled.form`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

export const AddTicketButton = styled(GenericButton)``;

export const SubmitButton = styled(GenericButton)``;

export const DeleteTicketButton = styled(GenericButton)`
  width: 30px;
`;

export const TicketWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TicketDetails = styled.div``;

export const NameInput = styled.input``;

export const DniInput = styled.input``;
