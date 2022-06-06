import { PaymentDetailsMercadoPago } from "types/payment";
import getMercadoPagoSession from "utils/getMercadoPagoSession";

export type OpenCheckoutPage = (paymentDetails: PaymentDetailsMercadoPago) => Promise<void>;

interface UseMercadoPago {
  initSDK: (onLoadCallback: () => void) => void;
  openCheckoutPage: OpenCheckoutPage;
}

const useMercadoPago = (): UseMercadoPago => {
  const initSDK = (onLoadCallback: () => void) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.addEventListener("load", () => onLoadCallback());
    document.body.appendChild(script);
  };

  const openCheckoutPage = async (paymentDetails: PaymentDetailsMercadoPago) => {
    const { id } = await getMercadoPagoSession(paymentDetails);
    // eslint-disable-next-line @typescript-eslint/dot-notation
    const mercadopago = new window["MercadoPago"](process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY, {
      locale: "es-AR",
    });
    mercadopago.checkout({
      preference: {
        id,
      },
      autoOpen: true,
    });
  };
  return { initSDK, openCheckoutPage };
};

export default useMercadoPago;
