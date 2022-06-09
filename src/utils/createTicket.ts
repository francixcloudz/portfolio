import { ApiPath } from "data/enum/Path";
import { Ticket } from "types/payment";
import axiosInstance from "utils/axiosInstance";

const createTicket = async (data: Array<Ticket>) => {
  const response = await axiosInstance.post(ApiPath.CreateTicket, {
    body: JSON.stringify({ data }),
  });
  return response;
};

export default createTicket;
