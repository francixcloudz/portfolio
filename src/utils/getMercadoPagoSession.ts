import { ApiPath } from "data/enum/Path";
import { PaymentDetailsMercadoPago } from "types/payment";
import axiosInstance from "utils/axiosInstance";

export interface MercadoPagoSession {
  id: string;
  paymentUrl: string;
}

const getMercadoPagoSession = async (
  paymentDetails: PaymentDetailsMercadoPago,
): Promise<MercadoPagoSession> => {
  const {
    data: { response },
  } = await axiosInstance.post(ApiPath.GetCheckoutSession, paymentDetails);
  return {
    id: response.id,
    paymentUrl: response.init_point,
  };
};

export default getMercadoPagoSession;
