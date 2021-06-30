import React, { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import useStyles from "./../../styles/CourseInfo";
import AppBar from "@material-ui/core/AppBar";
import logo from "./../../assets/img/right.png";
import Rating from "./../Elements/Rating/Rating";
import PriceCard from "./../Card/PriceCard";
import info from "./../../assets/img/product.png";
import { useParams } from "react-router-dom";
import { curriculumDetails } from "./../data/data";
import axios from "axios";
import {
	Container,
	ListItem,
	ListItemAvatar,
	IconButton,
	List,
	ListItemText,
	ListItemIcon,
	ListItemSecondaryAction,
	ButtonBase,
	Button,
	Grid,
	Typography,
	Tab,
	Tabs,
	Box,
	Divider,
} from "@material-ui/core";

import PaymentRoute from "./../PaymentRoute";
interface TabPanelProps {
	children?: React.ReactNode;
	dir?: string;
	index: any;
	value: any;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: any) {
	return {
		id: `scrollable-auto-tab-${index}`,
		"aria-controls": `scrollable-auto-tabpanel-${index}`,
	};
}

const CourseInfo = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = React.useState(0);
	const [courses, setCourses] = useState([]);
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8888/.netlify/functions/getCourses")
			.then((response: any) => {
				// console.log(response.data.courses);
				setCourses(response.data.courses);
			});

		axios
			.get("http://localhost:8888/.netlify/functions/getReviews")
			.then((response: any) => {
				setReviews(response.data.reviews);
			});
	}, []);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index: number) => {
		setValue(index);
	};

	let { id } = useParams<{ id: string }>();
	let d = parseInt(id);
	return (
		<div>
			{courses &&
				courses.map((card: any) => {
					if (card.id === d) {
						return (
							<Container>
								<Grid
									container
									direction='row'
									spacing={3}
									className={classes.container}
								>
									<Grid item xs={12} md={8}>
										<Box>
											<Typography variant='h4' color='primary'>
												{card.course_title}
											</Typography>
											<Box>
												<Grid container spacing={2} className={classes.grid1}>
													<Grid item xs container direction='row' spacing={2}>
														<Grid item xs className={classes.grid}>
															<Typography gutterBottom variant='h6'>
																Instructor
															</Typography>
															<Typography variant='body2' gutterBottom>
																"Jane Doe"
															</Typography>
														</Grid>
														<Grid
															item
															xs
															className={classes.grid}
															style={{ paddingLeft: "40px" }}
														>
															<Typography gutterBottom variant='h6'>
																Catergory
															</Typography>
															<Typography gutterBottom variant='body2'>
																{card.category}
															</Typography>
														</Grid>
														<Grid item xs style={{ paddingLeft: "40px" }}>
															<Typography gutterBottom variant='h6'>
																Price
															</Typography>
															<Typography gutterBottom variant='body2'>
																<span>&#8377;</span>
																{card.price}
															</Typography>
														</Grid>
														<Grid item xs>
															<PaymentRoute id={d} />
														</Grid>
													</Grid>
												</Grid>
												<Box style={{ marginTop: "20px" }}>
													<img
														src={card.image}
														className={classes.mainImg}
														alt='detail'
													/>
												</Box>
											</Box>
										</Box>

										<AppBar
											position='static'
											color='default'
											style={{ backgroundColor: "white", boxShadow: "none" }}
										>
											<Tabs
												value={value}
												onChange={handleChange}
												indicatorColor='primary'
												textColor='primary'
												variant='scrollable'
												scrollButtons='auto'
												aria-label='scrollable auto tabs example'
												className={classes.tab}
											>
												<Tab label='Overview' {...a11yProps(0)} />
												<Tab label='Curriculum' {...a11yProps(1)} />
												<Tab label='Instructor' {...a11yProps(2)} />
												<Tab label='Review' {...a11yProps(3)} />
											</Tabs>
										</AppBar>

										<SwipeableViews
											axis={theme.direction === "rtl" ? "x-reverse" : "x"}
											index={value}
											onChangeIndex={handleChangeIndex}
										>
											<TabPanel value={value} index={0} dir={theme.direction}>
												<Box>
													<Typography variant='h6' color='primary'>
														Overview
													</Typography>
													<Typography paragraph>{card.description}</Typography>
													<Typography variant='h6' color='primary'>
														What will you learn?
													</Typography>

													<ListItem>
														<ListItemIcon>
															<img
																src={logo}
																width='30'
																height='30'
																alt='outcome'
															/>
														</ListItemIcon>
														<ListItemText primary={card.outcome} />
													</ListItem>
												</Box>
											</TabPanel>

											<TabPanel value={value} index={1} dir={theme.direction}>
												<Grid item xs={12}>
													<Typography variant='h6' className={classes.title}>
														Curriculum of the course
													</Typography>
													<div className={classes.demo}>
														<List>
															{curriculumDetails.map((item) => (
																<ListItem>
																	<ListItemAvatar>
																		<img
																			src={info}
																			width='40'
																			height='40'
																			alt=''
																		/>
																	</ListItemAvatar>
																	<ListItemText primary={item.lesson} />
																	<ListItemSecondaryAction>
																		<IconButton edge='end' aria-label='delete'>
																			<Button
																				size='small'
																				variant='contained'
																				color='primary'
																			>
																				{item.duration}min
																			</Button>
																		</IconButton>
																	</ListItemSecondaryAction>
																</ListItem>
															))}
														</List>
													</div>
												</Grid>
											</TabPanel>

											<TabPanel value={value} index={2} dir={theme.direction}>
												<Grid container spacing={2}>
													<Grid item>
														<ButtonBase className={classes.image}>
															<img
																className={classes.img}
																alt='complex'
																src='https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
															/>
														</ButtonBase>
													</Grid>

													<Grid
														item
														xs={12}
														sm
														container
														style={{ padding: "30px" }}
													>
														<Grid
															item
															xs
															container
															direction='column'
															spacing={2}
														>
															<Grid item xs style={{ paddingTop: "30px" }}>
																<Typography gutterBottom variant='h6'>
																	Jane Doe
																</Typography>
																<Typography variant='body2' gutterBottom>
																	Web developer
																</Typography>
																<Typography paragraph color='textSecondary'>
																	Jone Smit is a celebrated photographer,
																	author, and writer who brings passion to
																	everything he does.
																</Typography>
																<Button>Learn More</Button>
															</Grid>
														</Grid>
													</Grid>
												</Grid>
											</TabPanel>

											<TabPanel value={value} index={3} dir={theme.direction}>
												{reviews &&
													reviews.map((item: any) => {
														return (
															<Grid container spacing={2}>
																<Grid item>
																	<ButtonBase className={classes.image}>
																		<img
																			className={classes.img}
																			alt='complex'
																			src='https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
																		/>
																	</ButtonBase>
																</Grid>

																<Grid item xs={12} sm container>
																	<Grid
																		item
																		xs
																		container
																		direction='column'
																		spacing={2}
																		style={{ paddingTop: "30px" }}
																	>
																		<Grid item xs>
																			<Typography
																				gutterBottom
																				variant='subtitle1'
																			>
																				{item.user_name}
																			</Typography>
																			<Rating rating={4} />
																			<Typography variant='body2'>
																				{item.review}
																			</Typography>
																		</Grid>
																	</Grid>
																</Grid>
															</Grid>
														);
													})}
											</TabPanel>
										</SwipeableViews>
									</Grid>

									<Grid item xs={12} md={4} style={{ padding: "30px" }}>
										<Grid item container direction='column' spacing={2}>
											<PriceCard />
										</Grid>
										<Grid
											item
											container
											direction='column'
											spacing={2}
											style={{ padding: "30px", marginTop: "30px" }}
										>
											<Typography variant='h5' style={{ fontWeight: 600 }}>
												Popular Live Courses
											</Typography>
											<Grid container spacing={2}>
												<Grid item>
													<ButtonBase className={classes.imagePop}>
														<img
															className={classes.img}
															alt='complex'
															src='https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
														/>
													</ButtonBase>
												</Grid>

												<Grid
													item
													xs={12}
													sm
													container
													style={{ paddingTop: "30px" }}
												>
													<Grid
														item
														xs
														container
														direction='column'
														spacing={2}
													>
														<Grid item xs>
															<Typography
																gutterBottom
																variant='h6'
																style={{ fontSize: "18px" }}
															>
																{card.course_title}
															</Typography>
														</Grid>
													</Grid>

													<Grid item>
														<Typography variant='subtitle1'>
															<span>&#8377;</span>
															{card.price}
														</Typography>
													</Grid>
												</Grid>
											</Grid>

											<Divider style={{ paddingLeft: "30px" }} />
											<Grid container spacing={2}>
												<Grid item>
													<ButtonBase className={classes.imagePop}>
														<img
															className={classes.img}
															alt='complex'
															src='https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
														/>
													</ButtonBase>
												</Grid>

												<Grid
													item
													xs={12}
													sm
													container
													style={{ paddingTop: "30px" }}
												>
													<Grid
														item
														xs
														container
														direction='column'
														spacing={2}
													>
														<Grid item xs>
															<Typography
																gutterBottom
																variant='h6'
																style={{ fontSize: "18px" }}
															>
																React – The Complete Guide
															</Typography>
														</Grid>
													</Grid>

													<Grid item>
														<Typography variant='subtitle1'>
															<span>&#8377;</span>19.00
														</Typography>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Container>
						);
					} else {
						return null;
					}
				})}
		</div>
	);
};
export default CourseInfo;
