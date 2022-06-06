import mercadopago from "mercadopago";
import { NextApiRequest, NextApiResponse } from "next";
import { PaymentDetailsMercadoPago } from "types/payment";
import { MercadoPagoSession } from "utils/getMercadoPagoSession";

type Error = { statusCode: number; message: string };

module.exports = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    mercadopago.configure({
      access_token: process.env.NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN,
    });
    const session = await mercadopago.preferences.create({
      ...(request.body as PaymentDetailsMercadoPago),
    });
    response.status(200).json(session as MercadoPagoSession);
  } catch (error) {
    response.status((error as Error).statusCode || 500).json({ error: (error as Error).message });
  }
};
