import faunadb from "faunadb";

module.exports = async (request, response) => {
  try {
    const secret = process.env.FAUNADB_SECRET_KEY || "not found";
    const { query } = faunadb;
    const client = new faunadb.Client({ secret });

    const { preferenceId, ...ticketsNewData } = request.body;
    await client.query(
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
    response.status(200);
  } catch (error) {
    response.status(500).json(error);
  }
};
