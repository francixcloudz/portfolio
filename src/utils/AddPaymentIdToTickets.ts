import { ApiPath } from "data/enum/Path";
import axiosInstance from "utils/axiosInstance";

interface AddPaymentIdToTicketsProps {
  preferenceId: string;
  paymentId: string;
}

const addPaymentIdToTickets = async (updatedTicket: AddPaymentIdToTicketsProps) => {
  const response = await axiosInstance.post(ApiPath.AddPaymentIdToTickets, updatedTicket);
  return response;
};

export default addPaymentIdToTickets;
