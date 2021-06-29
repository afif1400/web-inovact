import { makeStyles, createStyles } from "@material-ui/core/styles"

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


export default useStyles;