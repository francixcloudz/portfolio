import { ApiPath } from "data/enum/Path";
import { Ticket } from "types/payment";
import axiosInstance from "utils/axiosInstance";

export enum PaymentStatus {
  Success = "Success",
  Failure = "Failure",
  Pending = "Pending",
}

interface CreateTicketsProps {
  tickets: Array<Ticket>;
  paymentId: string;
  paymentStatus: PaymentStatus;
}

const createTickets = async ({ tickets, paymentId, paymentStatus }: CreateTicketsProps) => {
  const response = await axiosInstance.post(ApiPath.CreateTicket, {
    body: { tickets, paymentId, paymentStatus },
  });
  return response;
};

export default createTickets;
