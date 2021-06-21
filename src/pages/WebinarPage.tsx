import React from 'react'
import PopularCourses from './../components/Home/UpcomingLiveCourses';
import PopularInstructor from './../components/Home/PopularInstructor';
import NavigationBar from './../components/Elements/Navbar';
import Carousel from './../components/Elements/Carousel/Carousel';
import Footer from '../components/Elements/Footer.tsx/Footer'
import {Divider} from '@material-ui/core';
import Testimonials from './../components/Home/Testimonials';
import PreviousLiveCourses from './../components/Home/PreviousLiveCourses'

export default function WebinarPage() {
    return (
       <div style={{backgroundColor: '#0093E9',
        backgroundImage: 'linear-gradient(45deg, #1e5799 0%,#dce4e8 38%,#f2cdd7 69%,#fff 69%,#fff 70%,#dce4e8 70%,#fff 72%,#7db9e8 100%)'}}>
            <NavigationBar />
            <Carousel />
            <PopularCourses />
            <Divider style={{margin:'40px'}}/>
            <PreviousLiveCourses />
            <Divider style={{margin:'40px'}}/>
            <PopularInstructor />
             <Testimonials />
            <Footer />
        </div>
    )
}
