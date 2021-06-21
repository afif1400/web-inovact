import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import "./ratingstyle.css";
interface Props {
	rating: number;
}
const Rating: React.FC<Props> = ({ rating }) => {
	const totalRating = [] as any;
	for (let i = 0; i < 5; i++) {
		if (i < rating) {
			totalRating.push(
				<span className='star' key={`rating-key${i}`}>
					<AiTwotoneStar />
				</span>
			);
		} else {
			totalRating.push(
				<span className='star-o' key={`rating-key${i}`}>
					<AiTwotoneStar />
				</span>
			);
		}
	}

	return (
		<div className='rating'>
			<div>{totalRating}</div>
		</div>
	);
};

export default Rating;
