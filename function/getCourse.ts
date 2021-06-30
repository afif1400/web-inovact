import { Handler, HandlerEvent } from "@netlify/functions";
const { query } = require("./utils/hasura");

const handler: Handler = async (event: HandlerEvent) => {
	
	const response = await query({
		query: `query getCourse {
            courseDetails_by_pk(id: 1) {
              catergory
              course_title
              date
              description
              duration
              instructor_id
              level
              outcome
              price
              time
            }
          }
          `,
	});

	if (response.errors) {
		console.log(response.errors);
	}

	return {
		statusCode: 200,
		body: JSON.stringify({ course: response.data.courseDetails }),
	};
};

export { handler };