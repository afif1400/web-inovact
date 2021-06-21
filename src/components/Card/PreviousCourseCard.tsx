import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Rating from "./../Elements/Rating/Rating";
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
import { webinarDetails } from "./../data/data";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
			boxShadow: "0 8px 10px -12px rgba(0,0,0,0.3)",
			marginTop: 20,
			marginLeft: 20,
			borderRadius: "15px",
			// backgroundColor:'rgba(255,255,255,0.3)',
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
		link: {
			textDecoration: "none",
			color: "#FFA500",
			"&:hover": {
				textDecoration: "none",
			},
		},
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
		instructor: {
			marginLeft: "10px",
			"@media screen and (max-width: 1200px)": {
				margin: "5px",
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
			marginLeft: "40px",
			width: "100%",
			paddingX: "10px",
			"&:hover": {
				backgroundColor: "#020652",
				color: "#FFA500",
				border: "1px solid transparent",
				borderRadius: "5px",
			},
			"@media screen and (max-width: 1200px)": {
				marginLeft: "0px",
			},
		},
		price: {
			color: "green",
			fontWeight: 550,
		},
		avatars: {
			display: "flex",
			flexDirection: "row",
			"@media screen and (max-width: 1200px)": {
				padding: "5px",
			},
		},
		level: {
			background: "rgba(255,160,0,0.3)",
		},
		footer: {
			padding: "10px",
			paddingBottom: "0px",
			justifyContent: "left",
			alignItems: "left",
			display: "flex",
			flexDirection: "row",
		},
		divider: {},
		rat: {
			display: "block",
			"@media screen and (max-width: 1200px)": {
				display: "none",
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
		items: 3,
		slidesToSlide: 2,
	},
	mobile: {
		breakpoint: { max: 639, min: 0 },
		items: 1,
		slidesToSlide: 1,
	},
};

const RenderMentorCard: React.FC = () => {
	const classes = useStyles();
	return (
		<Carousel
			additionalTransfrom={0}
			arrows={false}
			centerMode={false}
			containerClass='carousel-container'
			draggable
			infinite={true}
			autoPlay={true}
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
			{webinarDetails.map((card) => {
				return (
					<Card className={classes.card}>
						<>
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

											case "advance":
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
										{card.name}
									</Typography>
								</Box>
							</CardContent>
						</>

						<CardActions className={classes.footer}>
							<Box className={classes.avatars}>
								<Box>
									<Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
								</Box>

								<Box className={classes.instructor}>
									<Typography variant='h6'>Jane Doe</Typography>
									<div className={classes.rat}>
										<Rating rating={4} />
									</div>
								</Box>
							</Box>

							<Link to={`/course${card.id}`} className={classes.link}>
								<Typography className={classes.learn} variant='h6'>
									Learn More
								</Typography>
							</Link>
						</CardActions>
					</Card>
				);
			})}
		</Carousel>
	);
};

export default RenderMentorCard;
