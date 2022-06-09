import { query, client, FaunaDatabaseResponseType } from "utils/fauna";

module.exports = async (request, response) => {
  const { paymentStatus, users } = request.body;
  try {
    const dbs: FaunaDatabaseResponseType = await client.query(
      query.Create(
        // iterate each item in result
        query.Collection("tickets"),
        {
          data: {
            paymentStatus,
            users,
          },
        },
      ),
    );
    // ok
    response.status(200).json(dbs.data);
  } catch (error) {
    response.status(500).json({ error: (error as Error).message });
  }
};
