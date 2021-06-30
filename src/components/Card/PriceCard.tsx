import React, { useState, useEffect } from "react";
import useStyles from "./../../styles/PriceCard";
import {
	Card,
	Grid,
	Typography,
	Box,
	CardActionArea,
	Divider,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import price from "./../../assets/img/rupee.png";
import time from "./../../assets/img/time.png";
import date from "./../../assets/img/date.png";
import enrolled from "./../../assets/img/avatar.png";
import instructor from "./../../assets/img/professor.png";
import PaymentRoute from "./../PaymentRoute";
import { courseDetails } from "./../data/data";
import axios from "axios";

const PriceCard: React.FC = () => {
	const classes = useStyles();
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8888/.netlify/functions/getCourses")
			.then((response: any) => {
				setCourses(response.data.courses);
			});
	}, []);

	let { id } = useParams<{ id: string }>();
	let d = parseInt(id);
	return (
		<div>
			{courses &&
				courses.map((card: any) => {
					if (card.id === d) {
						return (
							<Card className={classes.card} key={card.id}>
								<CardActionArea style={{ padding: "30px" }}>
									<Grid container direction='column'>
										<Grid item xs>
											<Box className={classes.priceGrid}>
												<Typography variant='subtitle1'>
													<img src={price} width='20' height='20' />
													Price
												</Typography>
												<Typography
													gutterBottom
													variant='h6'
													component='h4'
													className={classes.price}
												>
													<span>&#8377;</span>
													{courseDetails.price}
												</Typography>
											</Box>
										</Grid>
										<Divider style={{ paddingLeft: "30px" }} />

										<Grid item xs>
											<Box className={classes.priceGrid}>
												<Typography variant='subtitle1'>
													<img src={instructor} width='20' height='20' />
													Instructor
												</Typography>
												<Typography gutterBottom variant='h6' component='h4'>
													{courseDetails.instructor}
												</Typography>
											</Box>
										</Grid>
										<Divider style={{ paddingLeft: "30px" }} />

										<Grid item xs>
											<Box className={classes.priceGrid}>
												<Typography variant='subtitle1'>
													<img src={enrolled} width='20' height='20' />
													Enrolled
												</Typography>
												<Typography gutterBottom variant='h6' component='h4'>
													{courseDetails.enrolled}
												</Typography>
											</Box>
										</Grid>
										<Divider style={{ paddingLeft: "30px" }} />

										<Grid item xs>
											<Box className={classes.priceGrid}>
												<Typography variant='subtitle1'>
													<img src={time} width='20' height='20' />
													Duration
												</Typography>
												<Typography gutterBottom variant='h6' component='h4'>
													{courseDetails.duration}
												</Typography>
											</Box>
										</Grid>
										<Divider style={{ paddingLeft: "30px" }} />

										<Grid item xs>
											<Box className={classes.priceGrid}>
												<Typography variant='subtitle1'>
													<img src={date} width='20' height='20' />
													Date
												</Typography>
												<Typography gutterBottom variant='h6' component='h4'>
													{courseDetails.date}
												</Typography>
											</Box>
										</Grid>

										<Grid item xs>
											<Box
												className={classes.button}
												style={{ alignItems: "center" }}
											>
												<PaymentRoute id={d} />
											</Box>
										</Grid>
									</Grid>
								</CardActionArea>
							</Card>
						);
					} else {
						return null;
					}
				})}
		</div>
	);
};

export default PriceCard;
