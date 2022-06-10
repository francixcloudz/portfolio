import { ApiPath } from "data/enum/Path";
import { PaymentDetailsMercadopago } from "types/payment";
import axiosInstance from "utils/axiosInstance";

export interface MercadopagoSessionResponse {
  preferenceId: string;
  paymentUrl: string;
}
const getMercadopagoSession = async (
  paymentDetails: PaymentDetailsMercadopago,
): Promise<MercadopagoSessionResponse> => {
  const {
    data: { response },
  } = await axiosInstance.post(ApiPath.MercadopagoSession, paymentDetails);
  return {
    preferenceId: response.id,
    paymentUrl: response.init_point,
  };
};

export default getMercadopagoSession;
