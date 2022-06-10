import mercadopago from "mercadopago";

const Handler = async (request, response) => {
  try {
    const preferences = request.body;
    const isSandbox = Boolean(Number(process.env.MERCADOPAGO_IS_SANDBOX));
    const accessToken = isSandbox
      ? process.env.MERCADOPAGO_ACCESS_TOKEN_TEST
      : process.env.MERCADOPAGO_ACCESS_TOKEN;
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

export default Handler;
