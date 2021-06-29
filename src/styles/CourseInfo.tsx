import { makeStyles, createStyles,Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		marginTop: "70px",
		padding: "30px",
	},
	image: {
		width: 200,
		height: 200,
	},
	imagePop: {
		width: 100,
		height: 128,
	},
	demo: {},
	title: {
		margin: theme.spacing(4, 0, 2),
	},
	img: {
		margin: "0px",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%",
	},
	grid: {
		borderRight: "2px solid #DCDCDC",
	},

	price: {
		color: "green",
		fontWeight: 550,
	},
	button: {
		"&hover": {
			backgroundColor: "#020652",
			color: "#FFA500",
		},
	},
	grid1: {
		marginTop: "20px",
		display: "block",
		"@media screen and (max-width: 600px)": {
			display: "none",
		},
	},
	mainImg: {
		width: "100%",
		height: "500px",
		"@media screen and (max-width: 600px)": {
			height: "auto",
		},
	},
	tab: {
		marginLeft: "-100px",
		backgroundColor: "white",
		boxShadow: "none",
		"@media screen and (max-width: 600px)": {
			width: "300px",
			marginLeft: "40px",
		},
	},
}));


export default useStyles;