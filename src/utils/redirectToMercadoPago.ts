import colors from "styles/theme/data/colors";
import { PaymentDetailsMercadoPago } from "types/payment";
import getMercadoPagoSession from "utils/getMercadoPagoSession";

const redirectToMercadoPago = async (paymentDetails: PaymentDetailsMercadoPago) => {
  const sessionId = await getMercadoPagoSession(paymentDetails);
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://sdk.mercadopago.com/js/v2";
  script.addEventListener("load", () => {
    const publicKey = Number(process.env.NEXT_PUBLIC_MERCADOPAGO_IS_TESTING_ENV)
      ? process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY_TEST
      : process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY;
    // eslint-disable-next-line @typescript-eslint/dot-notation
    const mercadopago = new window["MercadoPago"](publicKey);
    mercadopago.checkout({
      preference: { id: sessionId, ...paymentDetails },
      theme: {
        elementsColor: colors.violet,
        headerColor: colors.violet,
      },
      autoOpen: true,
      target: "_blank",
    });
  });
  document.body.appendChild(script);
  // document.getElementsByTagName("head")[0].appendChild(script);
};

export default redirectToMercadoPago;
