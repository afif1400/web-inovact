import { Handler, HandlerEvent } from "@netlify/functions";
const { query } = require("./utils/hasura");

const handler: Handler = async (event: HandlerEvent) => {
	console.log("get here");

	const response = await query({
		query: `query getAllInstructors {
            instructorDetails {
                description
                designation
                id
                image
                instructor_name
                mentored
                projects
              }
    }`,
	});

	if (response.errors) {
		console.log(response.errors);
	}

	return {
		statusCode: 200,
		body: JSON.stringify({ instructors: response.data.instructorDetails }),
	};
};

export { handler };
