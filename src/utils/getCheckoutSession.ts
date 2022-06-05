import { AxiosResponse } from "axios";
import axiosInstance  from "utils/axiosInstance";
import { ApiPath } from "data/enum/Path";
import { SessionResponse } from "types/animations";

interface GetCheckoutSessionOptions {
  value: number;
  currency: string;
  merchantAccount: string;
  reference: string;
  returnUrl: string;
}

const getCheckoutSession = ({
  value,
  currency,
  merchantAccount,
  reference,
  returnUrl,
  locale,
}: GetCheckoutSessionOptions): Promise<AxiosResponse<SessionResponse>> => {

  const MercadoPago = 
  
  const valueWithDecimals = value % 1 !== 0 ? value : value * 100; // Most currencies expects 2 decimals: https://docs.adyen.com/development-resources/currency-codes
  return axiosInstance.post<SessionResponse>(ApiPath.GetCheckoutSession, {
    amount: {
      currency,
      value: valueWithDecimals,
    },
    merchantAccount,
    shopperLocale: LocaleCode[locale],
    reference,
    returnUrl,
  });
};

export default getCheckoutSession;