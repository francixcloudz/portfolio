import { query, client, FaunaDatabaseResponseType } from "utils/fauna";

module.exports = async (request, response) => {
  try {
    const dbs: FaunaDatabaseResponseType = await client.query(
      query.Map(
        // iterate each item in result
        query.Paginate(
          // make paginatable
          query.Match(
            // query index
            query.Index("all_tickets"), // specify source
          ),
        ),
        (ref) => query.Get(ref), // lookup each result by its reference
      ),
    );
    response.status(200).json(dbs.data);
  } catch (error) {
    response.status(500).json(error);
  }
};
