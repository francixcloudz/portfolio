import colors from "styles/theme/data/colors";
import { PaymentDetailsMercadoPago } from "types/payment";

const redirectToMercadoPago = (paymentDetails: PaymentDetailsMercadoPago) => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://sdk.mercadopago.com/js/v2";
  script.addEventListener("load", () => {
    const publicKey = Number(process.env.NEXT_PUBLIC_MERCADOPAGO_IS_TESTING_ENV)
      ? process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY_TEST
      : process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY;
    // eslint-disable-next-line @typescript-eslint/dot-notation
    const mercadopago = new window["MercadoPago"](publicKey, {
      locale: "es-AR",
    });
    mercadopago.checkout({
      preference: { ...paymentDetails },
      theme: {
        elementsColor: colors.violet,
        headerColor: colors.violet,
      },
      autoOpen: true,
    });
  });
  document.getElementsByTagName("head")[0].appendChild(script);
};

export default redirectToMercadoPago;
