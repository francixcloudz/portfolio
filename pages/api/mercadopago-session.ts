import mercadopago from "mercadopago";
import { NextApiRequest, NextApiResponse } from "next";
import { PaymentDetailsMercadoPago } from "types/payment";

module.exports = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const preferences = request.body as PaymentDetailsMercadoPago;
    const accessToken = Number(process.env.NEXT_PUBLIC_MERCADOPAGO_IS_TESTING_ENV)
      ? process.env.NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN_TEST
      : process.env.NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN;
    mercadopago.configure({
      access_token: accessToken,
    });
    const session = await mercadopago.preferences.create(preferences);
    response.status(200).json(session);
  } catch (error) {
    response.status(500).json(error);
  }
};
