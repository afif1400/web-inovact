import React, { useState ,useEffect} from "react";
import { Box, Typography, Button } from "@material-ui/core";
import Rating from "../Rating/Rating";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import axios from "axios";

export default function CarouselComponent() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex: number, e: any) => {
		setIndex(selectedIndex);
	};
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8888/.netlify/functions/getCourses")
			.then((response: any) => {
				 console.log(response.data.courses);
				setCourses(response.data.courses);
			});
	}, []);

	return (
		<Carousel
			activeIndex={index}
			onSelect={handleSelect}
			className='carousel-stuff'
		>
			{courses &&
				courses.map((card: any) => {
					return (
					<Carousel.Item className='carousels' key={card.id}>
						<img
							src={card.image}
							alt={card.course_title}
							style={{
								width: "100%",
							}}
						/>
						<Carousel.Caption className='captions'>
							<div className='content'>
								<Typography className='title' variant='h4'>
									{card.course_title}
								</Typography>
								<Typography paragraph className='description d-none d-md-block'>
									{card.description}
								</Typography>
								<Box>
									<Rating rating={4} />
									<Button
										className='buttonlarge'
										variant='contained'
										color='secondary'
										size='large'
									>
										Get Course
									</Button>
									<Button
										className='button'
										variant='contained'
										color='secondary'
										size='small'
									>
										Get Course
									</Button>
								</Box>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
}
