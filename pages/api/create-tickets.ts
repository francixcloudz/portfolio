import faunadb from "faunadb";

module.exports = async (request, response) => {
  try {
    const secret = process.env.FAUNADB_SECRET_KEY || "not found";
    const { query } = faunadb;
    const client = new faunadb.Client({ secret });

    const { tickets, paymentId } = request.body;
    const dbs = await client.query(
      query.Create(query.Collection("tickets"), {
        data: {
          tickets,
          paymentId,
          paymentStatus: "null",
        },
      }),
    );
    console.log(dbs);
    response.status(200).json(dbs);
  } catch (error) {
    response.status(500).json(error);
  }
};
