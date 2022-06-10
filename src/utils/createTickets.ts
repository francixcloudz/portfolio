import { ApiPath } from "data/enum/Path";
import { Ticket } from "types/payment";
import axiosInstance from "utils/axiosInstance";

interface CreateTicketsProps {
  preferenceId: string;
  tickets: Array<Ticket>;
}

const createTickets = async (newTicket: CreateTicketsProps) => {
  const response = await axiosInstance.post(ApiPath.CreateTickets, newTicket);
  return response;
};

export default createTickets;
