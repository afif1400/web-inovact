import { Handler, HandlerEvent } from "@netlify/functions";
const { query } = require("./utils/hasura");

const handler: Handler = async (event: HandlerEvent) => {
	console.log("get here");

	const response = await query({
		query: `query getAllCourses {
      courseDetails {
        course_title
        date
        description
        duration
        id
        image
        instructor_id
        level
        price
        outcome
        time
      }
    }`,
	});

	if (response.errors) {
		console.log(response.errors);
	}

	return {
		statusCode: 200,
		body: JSON.stringify({ courses: response.data.courseDetails }),
	};
};

export { handler };
