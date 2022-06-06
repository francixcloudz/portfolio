import { ApiPath } from "data/enum/Path";
import { PaymentDetailsMercadoPago } from "types/payment";
import axiosInstance from "utils/axiosInstance";

export interface MercadoPagoSession {
  id: string;
}

const getMercadoPagoSession = async (
  paymentDetails: PaymentDetailsMercadoPago,
): Promise<MercadoPagoSession> => {
  const {
    data: { response },
  } = await axiosInstance.post<{ response: MercadoPagoSession }>(
    ApiPath.GetCheckoutSession,
    paymentDetails,
  );
  return {
    id: response.id,
  };
};

export default getMercadoPagoSession;
