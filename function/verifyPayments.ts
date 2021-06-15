import { Handler, HandlerEvent } from "@netlify/functions";
import crypto from "crypto";

const handler: Handler = (event: HandlerEvent) => {
	// do a validation

	const SECRET = "inovact";

	const shasum = crypto.createHmac("sha256", SECRET);
	shasum.update(event.body);
	const digest = shasum.digest("hex");

	if (digest === event.headers["x-razorpay-signature"]) {
		console.log("request is legit");
	}

	return {
		statusCode: 200,
		body: JSON.stringify({ status: "ok" }),
	};
};

export { handler };
