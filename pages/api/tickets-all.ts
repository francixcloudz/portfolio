import faunadb from "faunadb";

module.exports = async (request, response) => {
  try {
    const secret = process.env.FAUNADB_SECRET_KEY || "not found";
    const { query } = faunadb;
    const client = new faunadb.Client({ secret });

    const dbs = await client.query(
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
    response.status(200).json(dbs);
  } catch (error) {
    response.status(500).json(error);
  }
};
