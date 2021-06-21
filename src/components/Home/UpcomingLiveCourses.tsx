import React from 'react';
import RenderWebinarCard from './../Card/CourseCard';
import {Typography,Box,Container} from '@material-ui/core';
export default function PopularCourses() {
    return (
        <div>
            <Box >
                <Box style={{display:"flex",justifyContent:"space-between"}}>
                    <Typography  variant="h5" style={{display:"flex",justifyContent:'left', alignItems:'left',marginLeft:'55px',marginTop:'60px',color:'black',marginBottom:'20px'}}>
                    Upcoming<span style={{fontWeight:600}}>&nbsp;Live Courses</span> 
                    </Typography> 
                </Box>
            
            </Box>
<Container style={{marginLeft:'5px'}}>
        <RenderWebinarCard />
</Container>
  
</div>
    )
}
