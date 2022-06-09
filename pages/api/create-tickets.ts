import { query, client } from "utils/fauna";

module.exports = async (request, response) => {
  const { tickets, paymentId } = request.body;
  try {
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
