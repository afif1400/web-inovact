import { Handler, HandlerEvent } from "@netlify/functions";
import Razorpay from "razorpay";
import shortid from "shortid";

const handler: Handler = async (event: HandlerEvent): Promise<any> => {
	let razorpay = new Razorpay({
		key_id: "rzp_test_7AvAkPKH4CvzCV",
		key_secret: "fIkvWqyfV3i8z4AoUcFPZvqg",
	});

	const amount = 79;
	const currency = "INR";

	const response = await razorpay.orders.create({
		amount: (amount * 100).toString(),
		currency,
		receipt: shortid.generate(),
	});
	const data = {
		currency: response.currency,
		amount: response.amount,
		id: response.id,
		course_name: "ML and AI",
	};
	return {
		statusCode: 200,
		body: JSON.stringify(data),
	};
};

export { handler };
