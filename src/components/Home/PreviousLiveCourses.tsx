import React from 'react';
import PreviousCard from './../Card/PreviousCourseCard';
import {Typography,Box,Container} from '@material-ui/core';
export default function PopularCourses() {
    return (
        <div>
            <Box >
                <Box style={{display:"flex",justifyContent:"space-between"}}>
                    <Typography  variant="h5" style={{display:"flex",justifyContent:'left', alignItems:'left',marginLeft:'55px',marginTop:'10px',color:'black',marginBottom:'20px'}}>
                    Previous<span style={{fontWeight:600}}>&nbsp;Live Courses</span> 
                    </Typography> 
                </Box>
            </Box>

            <Container style={{marginLeft:'5px'}}>
                <PreviousCard />
            </Container>
  
</div>
    )
}
