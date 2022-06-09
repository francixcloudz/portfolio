import faunadb from "faunadb";
import axiosInstance from "utils/axiosInstance";

module.exports = async (request, response) => {
  try {
    const secret = process.env.FAUNADB_SECRET_KEY || "not found";
    const { query } = faunadb;
    const client = new faunadb.Client({ secret });

    const { id } = request.body.data;
    const {
      data: { status },
    } = await axiosInstance.get(`https://api.mercadopago.com/v1/payments/${id}`);
    await client.query(
      query.Update(
        // extracts a single value from a document
        query.Select(
          ["ref"],
          // retrieving the first document from a Match result
          query.Get(
            // retrieving all matches
            query.Match("all_tickets_paymentId", id),
          ),
        ),
        {
          data: {
            paymentStatus: status,
          },
        },
      ),
    );
    response.status(200);
  } catch (error) {
    response.status(500).json(error);
  }
};
