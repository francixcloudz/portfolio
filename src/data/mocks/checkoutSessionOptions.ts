import { awsS3Url } from "data";

const mockCheckoutSessionOptions = {
  statement_descriptor: "[ONE]CORP",
  items: [
    {
      id: "[ONE]SHOT Pass",
      title: "[ONE]SHOT Pass",
      currency_id: "ARS",
      picture_url: `${awsS3Url}/OneShot.png`,
      description: "Pass to [ONE]SHOT Private Event",
      category_id: "tickets",
      quantity: 0,
      unit_price: 0,
    },
  ],
  binary_mode: true,
  auto_return: "approved",
  back_urls: {
    success: "https://www.success.com",
    failure: "http://www.failure.com",
    pending: "http://www.pending.com",
  },
  payment_methods: {
    installments: 1,
  },
};

export default mockCheckoutSessionOptions;
