import faunadb from "faunadb";

const Handler = async (request, response) => {
  try {
    const secret = process.env.FAUNADB_SECRET_KEY || "not found";
    const { query } = faunadb;
    const client = new faunadb.Client({ secret });

    const { preferenceId, ...ticketsNewData } = request.body;
    const queryResponse = await client.query(
      query.Update(
        // extracts a single value from a document
        query.Select(
          ["ref"],
          // retrieving the first document from a Match result
          query.Get(
            // retrieving all matches
            query.Match("get_ticket_by_preferenceId", preferenceId),
          ),
        ),
        {
          data: {
            ...ticketsNewData,
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
