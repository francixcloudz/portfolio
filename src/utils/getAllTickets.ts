import { ApiPath } from "data/enum/Path";
import axiosInstance from "utils/axiosInstance";

const getAllTickets = async () => {
  const response = await axiosInstance.post(ApiPath.GetTickets);
  return response;
};

export default getAllTickets;
