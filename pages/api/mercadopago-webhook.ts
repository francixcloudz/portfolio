import faunadb from "faunadb";
import fetch from "node-fetch";

interface PaymentDetails {
  status: string;
}

const Handler = async (request, response) => {
  try {
    const secret = process.env.FAUNADB_SECRET_KEY || "not found";
    const { query } = faunadb;
    const client = new faunadb.Client({ secret });

    // const { id } = request.body.data;
    const id = "23075451553";
    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN || "";
    const paymentDetails = await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const { status } = (await paymentDetails.json()) as PaymentDetails;
    const queryResponse = await client.query(
      query.Update(
        // extracts a single value from a document
        query.Select(
          ["ref"],
          // retrieving the first document from a Match result
          query.Get(
            // retrieving all matches
            query.Match("get_ticket_by_paymentId", "23075451553"),
          ),
        ),
        {
          data: {
            paymentStatus: status,
          },
        },
      ),
    );
    response.status(200).json(queryResponse);
  } catch (error) {
    response.status(500).json(error);
  }
};

export default Handler;
