import { Ticket } from "types/payment";
import { query, client, FaunaDatabaseResponseType } from "utils/fauna";

module.exports = async (request, response) => {
  const tickets = request.body.data as Array<Ticket>;
  try {
    const dbs: FaunaDatabaseResponseType = await client.query(
      query.Create(
        // iterate each item in result
        query.Collection("tickets"),
        {
          paymentStatus: "pending",
          data: tickets,
        },
      ),
    );
    response.status(200).json(dbs.data);
  } catch (error) {
    response.status(500).json({ error: (error as Error).message });
  }
};
