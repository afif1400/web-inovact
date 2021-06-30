import React, { useState } from "react";
import { Button } from "@material-ui/core";
import logo from "../assets/img/logo.png";
import axios from "axios";

function loadScript(src: string) {
	return new Promise((resolve) => {
		const script = document.createElement("script");
		script.src = src;
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			resolve(false);
		};
		document.body.appendChild(script);
	});
}
const button = {
	width: "300px",
	display: "block",
};

const __DEV__ = document.domain === "localhost";

interface idType {
	id: number;
}

const PaymentRoute = ({ id }: idType) => {
	const [name, setName] = useState("Afif");

	async function displayRazorpay() {
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		);

		if (!res) {
			alert("Razorpay SDK failed to load. Are you online?");
			return;
		}

		const { data } = await axios.get(
			`http://localhost:8888/.netlify/functions/pay?courseId=${id}`
		);
		// console.log(data);

		const options = {
			key: __DEV__ ? "rzp_test_7AvAkPKH4CvzCV" : process.env.RAZORPAY_KEY,
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: data.course_name,
			description: "This is the course description",
			image: logo,
			handler: function (response: any) {
				alert(response.razorpay_payment_id);
				alert(response.razorpay_order_id);
				alert(response.razorpay_signature);
			},
			prefill: {
				name,
				email: "sdfdsjfh2@ndsfdf.com",
				phone_number: "9899999999",
			},
		};

		const _window = window as any;
		const paymentObject = new _window.Razorpay(options);
		paymentObject.open();
	}

	return (
		<div>
			<Button
				variant='contained'
				size='large'
				onClick={() => displayRazorpay()}
				color='primary'
				style={button}
			>
				Register Now
			</Button>
		</div>
	);
};

export default PaymentRoute;
