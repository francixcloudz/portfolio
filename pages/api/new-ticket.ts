import { query, client, FaunaDatabaseResponseType } from "utils/fauna";

module.exports = async (request, response) => {
  const formData = request.body.data;
  try {
    const dbs: FaunaDatabaseResponseType = await client.query(
      query.Create(
        // iterate each item in result
        query.Collection("companies"),
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
