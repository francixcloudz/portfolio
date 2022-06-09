import mercadopago from "mercadopago";
import { NextApiRequest, NextApiResponse } from "next";
import { PaymentDetailsMercadopago } from "types/payment";

module.exports = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const preferences = request.body as PaymentDetailsMercadopago;
    const isSandbox = Boolean(Number(process.env.NEXT_PUBLIC_MERCADOPAGO_IS_TESTING_ENV));
    const accessToken = isSandbox
      ? process.env.NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN_TEST
      : process.env.NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN;
    mercadopago.configure({
      sandbox: isSandbox,
      access_token: accessToken,
    });
    const session = await mercadopago.preferences.create(preferences);
    response.status(200).json(session);
  } catch (error) {
    response.status(500).json(error);
  }
};
