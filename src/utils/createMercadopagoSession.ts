import { ApiPath } from "data/enum/Path";
import axiosInstance from "utils/axiosInstance";

export interface MercadopagoSessionResponse {
  preferenceId: string;
  paymentUrl: string;
}
const createMercadopagoSession = async (paymentDetails): Promise<MercadopagoSessionResponse> => {
  const {
    data: { response },
  } = await axiosInstance.post(ApiPath.MercadopagoSession, paymentDetails);
  return {
    preferenceId: response.id,
    paymentUrl: response.init_point,
  };
};

export default createMercadopagoSession;
