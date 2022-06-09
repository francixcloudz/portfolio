import { PaymentDetailsMercadoPago } from "types/payment";
import getMercadoPagoSession from "utils/getMercadoPagoSession";

export type OpenCheckoutPage = (paymentDetails: PaymentDetailsMercadoPago) => Promise<void>;

type InitSDK = (onLoadCallback: () => void) => void;

interface UseMercadoPago {
  initSDK: InitSDK;
  openCheckoutPage: OpenCheckoutPage;
}

const useMercadoPago = (): UseMercadoPago => {
  const initSDK: InitSDK = (onLoadCallback) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.addEventListener("load", () => onLoadCallback());
    document.body.appendChild(script);
  };

  const openCheckoutPage: OpenCheckoutPage = async (paymentDetails) => {
    const id = await getMercadoPagoSession(paymentDetails);
    const publicKey = Number(process.env.NEXT_PUBLIC_MERCADOPAGO_IS_TESTING_ENV)
      ? process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY_TEST
      : process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY;
    // eslint-disable-next-line @typescript-eslint/dot-notation
    const mercadopago = new window["MercadoPago"](publicKey, {
      locale: "es-AR",
    });
    mercadopago.checkout({
      preference: { id, ...paymentDetails },
    });
  };

  return { initSDK, openCheckoutPage };
};

export default useMercadoPago;
