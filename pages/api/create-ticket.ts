import { Ticket } from "types/payment";
import { CreateTicketResponse } from "utils/createTicket";
import { query, client } from "utils/fauna";

module.exports = async (request, response) => {
  const tickets = request.body as Array<Ticket>;
  try {
    const dbs = await client.query(
      query.Create(query.Collection("tickets"), {
        data: {
          paymentStatus: "pending",
          tickets,
        },
      }),
    );
    response.status(200).json(dbs);
  } catch (error) {
    response.status(500).json(error);
  }
};
