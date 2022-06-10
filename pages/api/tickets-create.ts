import faunadb from "faunadb";

module.exports = async (request, response) => {
  try {
    const secret = process.env.FAUNADB_SECRET_KEY || "not found";
    const { query } = faunadb;
    const client = new faunadb.Client({ secret });

    const { tickets, preferenceId } = request.body;
    const queryResponse = await client.query(
      query.Create(query.Collection("tickets"), {
        data: {
          tickets,
          preferenceId,
          paymentId: "null",
          paymentStatus: "null",
        },
      }),
    );
    response.status(200).json(queryResponse);
  } catch (error) {
    response.status(500).json(error);
  }
};
