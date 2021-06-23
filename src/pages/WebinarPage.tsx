import React from "react";
import PopularCourses from "./../components/Home/UpcomingLiveCourses";
import PopularInstructor from "./../components/Home/PopularInstructor";
import NavigationBar from "./../components/Elements/Navbar";
import Carousel from "./../components/Elements/Carousel/Carousel";
import Footer from "../components/Elements/Footer.tsx/Footer";
import { Divider } from "@material-ui/core";
import Testimonials from "./../components/Home/Testimonials";
import PreviousLiveCourses from "./../components/Home/PreviousLiveCourses";
import { Container } from "@material-ui/core";

export default function WebinarPage() {
	return (
		<div
			style={{
				// backgroundColor: "#eee",
				backgroundImage:
					"linear-gradient(45deg, #1e5799 0%,#dce4e8 38%,#dce4e8 70%,#7db9e8 100%)",
			}}
		>
			<Container maxWidth='lg'>
				<NavigationBar />
				<Carousel />
				<PopularCourses />
				<Divider style={{ margin: "40px" }} />
				<PreviousLiveCourses />
				<Divider style={{ margin: "40px" }} />
				<PopularInstructor />
				<Testimonials />
			</Container>
			<Footer />
		</div>
	);
}
