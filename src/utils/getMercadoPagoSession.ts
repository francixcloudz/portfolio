import { ApiPath } from "data/enum/Path";
import { PaymentDetailsMercadopago } from "types/payment";
import axiosInstance from "utils/axiosInstance";

export interface MercadopagoSession {
  paymentId: string;
  paymentUrl: string;
}

const getMercadopagoSession = async (
  paymentDetails: PaymentDetailsMercadopago,
): Promise<MercadopagoSession> => {
  const {
    data: { response },
  } = await axiosInstance.post(ApiPath.MercadopagoSession, paymentDetails);
  return {
    paymentId: response.id,
    paymentUrl: response.init_point,
  };
};

export default getMercadopagoSession;
