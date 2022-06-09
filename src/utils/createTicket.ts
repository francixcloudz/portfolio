import { AxiosResponse } from "axios";
import { ApiPath } from "data/enum/Path";
import { Ticket } from "types/payment";
import axiosInstance from "utils/axiosInstance";

export interface CreateTicketResponse {
  ref: {
    "@ref": {
      id: string;
    };
  };
}

const createTicket = async (
  tickets: Array<Ticket>,
): Promise<AxiosResponse<CreateTicketResponse>> => {
  const response = (await axiosInstance.post(ApiPath.CreateTicket, {
    body: tickets,
  })) as AxiosResponse<CreateTicketResponse>;
  return response;
};

export default createTicket;
