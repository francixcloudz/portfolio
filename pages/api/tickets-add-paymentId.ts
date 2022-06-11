import faunadb from "faunadb";

const Handler = async (request, response) => {
  try {
    const secret = process.env.FAUNADB_SECRET_KEY || "not found";
    const { query } = faunadb;
    const client = new faunadb.Client({ secret });

    const { preferenceId, paymentId } = request.body;
    const ticketRef = await client.query(
      query.Select(
        ["ref"],
        // retrieving the first document from a Match result
        query.Get(
          // retrieving all matches
          query.Match("get_ticket_by_preferenceId", preferenceId),
        ),
      ),
    );
    const queryResponse = paymentId
      ? await client.query(
          query.Update(ticketRef, {
            data: {
              paymentId,
            },
          }),
        )
      : await client.query(query.Delete(ticketRef));
    response.status(200).json(queryResponse);
  } catch (error) {
    response.status(500).json(error);
  }
};

export default Handler;
