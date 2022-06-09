import { ApiPath } from "data/enum/Path";
import { Ticket } from "types/payment";
import axiosInstance from "utils/axiosInstance";

interface CreateTicketsProps {
  tickets: Array<Ticket>;
  paymentId: string;
}

const createTickets = async ({ tickets, paymentId }: CreateTicketsProps) => {
  const response = await axiosInstance.post(ApiPath.CreateTickets, {
    body: { tickets, paymentId },
  });
  return response;
};

export default createTickets;
