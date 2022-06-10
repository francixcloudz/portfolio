import faunadb from "faunadb";
import fetch from "node-fetch";

interface PaymentDetails {
  status: string;
}

module.exports = async (request, response) => {
  try {
    const secret = process.env.FAUNADB_SECRET_KEY || "not found";
    const { query } = faunadb;
    const client = new faunadb.Client({ secret });

    const { id } = request.body.data;
    console.log("request.body", request.body);
    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN || "";
    const paymentDetails = await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
      headers: { Authorization: accessToken },
    });
    console.log("paymentDetails", paymentDetails);
    const parsedPaymentDetails = (await paymentDetails.json()) as PaymentDetails;
    console.log("parsedPaymentDetails", parsedPaymentDetails);
    const { status } = parsedPaymentDetails;
    const queryResponse = await client.query(
      query.Update(
        // extracts a single value from a document
        query.Select(
          ["ref"],
          // retrieving the first document from a Match result
          query.Get(
            // retrieving all matches
            query.Match("get_ticket_by_paymentId", id),
          ),
        ),
        {
          data: {
            paymentStatus: status,
          },
        },
      ),
    );
    console.log("queryResponse", queryResponse);
    response.status(200).json(queryResponse);
  } catch (error) {
    response.status(500).json(error);
  }
};
