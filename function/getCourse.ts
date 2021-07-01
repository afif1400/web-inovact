
import { Handler, HandlerEvent } from "@netlify/functions";
const { query } = require("./utils/hasura");

const handler: Handler = async (event: HandlerEvent) => {
	const { courseId } = event.queryStringParameters;

	console.log(event.queryStringParameters);

	const response = await query({
		query: `query MyQuery {
      courseDetails_by_pk(id: ${courseId}) {
        catergory
        course_title
        date
        description
        duration
        id
        image
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
		body: JSON.stringify({ course: response.data.courseDetails_by_pk }),
	};
};

export { handler };
