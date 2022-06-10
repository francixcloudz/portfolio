import { ApiPath } from "data/enum/Path";
import axiosInstance from "utils/axiosInstance";

interface UpdateTicketsProps {
  preferenceId: string;
  paymentId: string;
}

const updateTickets = async (updatedTicket: UpdateTicketsProps) => {
  const response = await axiosInstance.post(ApiPath.UpdateTickets, updatedTicket);
  return response;
};

export default updateTickets;
