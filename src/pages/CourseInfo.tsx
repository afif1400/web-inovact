import CourseInformation from './../components/CourseInfo/CourseInfo';
import NavigationBar from './../components/Elements/Navbar';
import Related from './../components/RelatedCourse';
import Footer from '../components/Elements/Footer.tsx/Footer'
const CourseInfoPage=()=>{
return(
    <div >
        <NavigationBar />
        <CourseInformation />
        <Related />
        <Footer />
        </div>
)
}
export default CourseInfoPage