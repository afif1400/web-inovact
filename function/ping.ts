import { Handler } from "@netlify/functions";

const handler: Handler = () => {
	return {
		statusCode: 200,
		body: JSON.stringify("pong"),
	};
};

export { handler };
