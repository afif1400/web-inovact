import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Avatar,
	Typography,
	Box,
	Button,
	CardActionArea,
	Chip,
	Divider,
	Container,
} from "@material-ui/core";
import { webinarDetails } from "../data/data";
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

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			padding: 0,
		},
		avatar: {
			display: "inline-block",
			border: "2px solid white",
			"&:not(:first-of-type)": {
				marginLeft: "-10px",
			},
		},
		card: {
			maxWidth: 500,
			boxShadow: "0 8px 10px -12px rgba(0,0,0,1)",
			marginTop: 20,
			marginRight: 20,
			borderRadius: "15px",
			backgroundColor: "rgba(255,255,255,0.3)",
			// background: "transparent",
			[theme.breakpoints.down("sm")]: {
				marginLeft: 20,
			},
		},
		cardcontent: {
			padding: "5px",
			margin: 5,
			marginBottom: 0,
			justifyContent: "left",
		},
		name: {
			margin: 3,
			fontWeight: 520,
			textAlign: "left",
		},
		cover: {},
		carouselWrapper: {
			".carousel-container": {
				width: "100%",
				maxWidth: "100%",
				marginRight: "10px",

				".react-multi-carousel-item": {
					transition: "all 0.25s",
				},
				".react-multi-carousel-item--active:nth-of-type(4n)": {
					opacity: "0.5",
					"@media screen and (max-width: 1200px)": {
						opacity: 1,
					},
				},
			},
		},
		CHcontent: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			margin: 0,
			marginBottom: 5,
		},
		learn: {
			display: "block",
			color: "#020652",
			padding: "5px",
			width: "100%",
			textDecoration: "none",
			"&:hover": {
				// backgroundColor: "#020652",
				// color: "#FFA500",
				borderRadius: "5px",
				textDecoration: "underline",
			},
		},

		price: {
			color: "green",
			fontWeight: 550,
		},
		avatars: {},
		level: {
			background: "rgba(255,160,0,0.3)",
		},
		footer: {
			padding: "5px",
			justifyContent: "center",
			alignItems: "center",
			display: "flex",
			flexDirection: "column",
		},
		divider: {},
		link: {
			textDecoration: "none",
			color: "#FFA500",
			"&:hover": {
				textDecoration: "none",
			},
		},
	})
);

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
				// console.log(response.data.courses);
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
									<Link to={`/course${card.id}`} className={classes.link}>
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
