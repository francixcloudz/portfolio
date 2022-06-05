import { awsS3Url } from "data";
import mercadopago from "mercadopago";
import { NextApiRequest, NextApiResponse } from "next";
import mockCheckoutSessionOptions from "data/mocks/checkoutSessionOptions";

type Error = { statusCode: number; message: string };

module.exports = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const { quantity, unit_price } = request.body;
    const options = { ...mockCheckoutSessionOptions, quantity, unit_price };
    mercadopago.configure({
      access_token: process.env.NEXT_PUBLIC_MERCADOPAGO_ACCESS_TOKEN,
    });
    const session = await mercadopago.preferences.create(options);
    response.status(200).json(session);
  } catch (error) {
    response.status((error as Error).statusCode || 500).json({ error: (error as Error).message });
  }
};
