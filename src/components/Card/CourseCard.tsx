import React, { useState, useEffect } from "react";
import useStyles from './../../styles/CourseCard';

import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Box,
	Chip,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import axios from "axios";

const colors = [["red"], ["#ffa500"], ["green"]];
const beginner = {
	color: `${colors[2]}`,
	borderColor: `${colors[2]}`,
};
const intermediate = {
	color: `${colors[1]}`,
	borderColor: `${colors[1]}`,
};
const advance = {
	color: `${colors[0]}`,
	borderColor: `${colors[0]}`,
};

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1619 },
		items: 3,
		slidesToSlide: 4,
	},
	laptop: {
		breakpoint: { max: 1619, min: 1024 },
		items: 3,
		slidesToSlide: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 640 },
		items: 2,
		slidesToSlide: 2,
	},
	mobile: {
		breakpoint: { max: 639, min: 0 },
		items: 1,
		slidesToSlide: 1,
	},
};
const CourseCard: React.FC = () => {
	const classes = useStyles();
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		// debugger;
		axios
			.get("http://localhost:8888/.netlify/functions/getCourses")
			.then((response: any) => {
				 console.log(response.data.courses);
				setCourses(response.data.courses);
			});
	}, []);

	return (
		<Carousel
			additionalTransfrom={0}
			arrows={false}
			centerMode={false}
			containerClass='carousel-container'
			draggable
			infinite={true}
			// autoPlay={true}
			autoPlaySpeed={4000}
			focusOnSelect={false}
			keyBoardControl
			minimumTouchDrag={80}
			renderButtonGroupOutside
			renderDotsOutside={false}
			responsive={responsive}
			showDots={false}
			slidesToSlide={1}
		>
			{courses &&
				courses.map((card: any) => {
					return (
						<Card className={classes.card} key={card.id}>
							<CardMedia
								component='img'
								className={classes.cover}
								alt='user Image'
								image='https://images.unsplash.com/photo-1494599948593-3dafe8338d71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViaW5hcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
								title='User Image'
							/>

							<CardContent className={classes.cardcontent}>
								<Box className={classes.CHcontent}>
									{(() => {
										console.log(card.level);
										switch (card.level) {
											case "beginner":
												return (
													<Chip
														size='small'
														label={card.level}
														clickable
														style={beginner}
														variant='outlined'
													/>
												);

											case "intermediate":
												return (
													<Chip
														size='small'
														label={card.level}
														clickable
														style={intermediate}
														variant='outlined'
													/>
												);

											case "Advance":
												return (
													<Chip
														size='small'
														label={card.level}
														clickable
														style={advance}
														variant='outlined'
													/>
												);

											default:
												return null;
										}
									})()}

									<Typography
										gutterBottom
										variant='h6'
										component='h4'
										className={classes.price}
									>
										<span>&#8377;</span>
										{card.price}
									</Typography>
								</Box>
								<Box>
									<Typography
										gutterBottom
										variant='h5'
										component='h2'
										className={classes.name}
									>
										{card.course_title}
									</Typography>
								</Box>
							</CardContent>
							<CardActions className={classes.footer}>
								<Box className={classes.avatars}>
									{card.date} &#8739; {card.time}
								</Box>
								<Box>
									<Link to={`/${card.id}`} className={classes.link}>
										<Typography className={classes.learn} variant='h6'>
											Learn More
										</Typography>
									</Link>
								</Box>
							</CardActions>
						</Card>
					);
				})}
		</Carousel>
	);
};

export default CourseCard;