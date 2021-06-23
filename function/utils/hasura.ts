const fetchQuery = require("node-fetch");

async function query({ query, variables = {} }) {
	try {
		const result = await fetchQuery(
			process.env.HASURA_API ||
				"https://genuine-titmouse-12.hasura.app/v1/graphql",
			{
				method: "POST",
				headers: {
					"x-hasura-admin-secret":
						"gQ2BVZTkkxxBty4dTaT7wZDAfBplVi1f8Nl0ALUhy9pKwI97GaE3XL9uCJkdGelg",
				},
				body: JSON.stringify({ query, variables }),
			}
		).then((response) => response.json());
		return result;
	} catch (error) {
		console.log(error);
	}
}

exports.query = query;
