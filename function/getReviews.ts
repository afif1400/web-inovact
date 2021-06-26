import { Handler, HandlerEvent } from "@netlify/functions";
const { query } = require("./utils/hasura");

const handler: Handler = async (event: HandlerEvent) => {

	const response = await query({
		query: `query getAllReviews {
            reviews {
                course_id
                id
                rating
                review
                reviewTitle
                user_name
              }
    }`,
	});

	if (response.errors) {
		console.log(response.errors);
	}

	return {
		statusCode: 200,
		body: JSON.stringify({ courses: response.data.review }),
	};
};

export { handler };
