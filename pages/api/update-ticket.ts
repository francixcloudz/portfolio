import { query, client, FaunaDatabaseResponseType } from "utils/fauna";

module.exports = async (request, response) => {
  const formData = request.body.data;
  try {
    const dbs: FaunaDatabaseResponseType = await client.query(
      query.Update(
        // extracts a single value from a document
        query.Select(
          ["ref"],
          // retrieving the first document from a Match result
          query.Get(
            // retrieving all matches
            query.Match("all_companies_email", formData.email),
          ),
        ),
        {
          data: {
            id: formData.id,
            email: formData.email,
            name: formData.name,
            phone: formData.phone,
          },
        },
      ),
    );
    // ok
    response.status(200).json(dbs.data);
  } catch (error) {
    // something went wrong
    response.status(500).json({ error: (error as Error).message });
  }
};
