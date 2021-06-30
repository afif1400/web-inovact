import { courseDetails } from "./../src/components/data/data";
import { Handler, HandlerEvent } from "@netlify/functions";
import Razorpay from "razorpay";
import shortid from "shortid";
const { query } = require("./utils/hasura");

const handler: Handler = async (event: HandlerEvent): Promise<any> => {
	const { courseId } = event.queryStringParameters;

	// console.log(courseId, event.queryStringParameters);

	const data = await query({
		query: `query getCourse {
      courseDetails_by_pk (id: ${courseId}) {
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

	let razorpay = new Razorpay({
		key_id: "rzp_test_7AvAkPKH4CvzCV",
		key_secret: "fIkvWqyfV3i8z4AoUcFPZvqg",
	});

	const courseDetails = data.data.courseDetails_by_pk;
	const price = parseInt(courseDetails.price);
	const currency = "INR";
	const response = await razorpay.orders.create({
		amount: price * 100,
		currency,
		receipt: shortid.generate(),
	});
	const responseData = {
		currency: response.currency,
		amount: response.amount,
		id: response.id,
		course_name: courseDetails.course_title,
	};
	return {
		statusCode: 200,
		body: JSON.stringify(responseData),
	};
};

export { handler };
