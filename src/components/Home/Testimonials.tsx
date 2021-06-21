import React from 'react';
import {Typography,Box,Container} from '@material-ui/core';
import Testimonials from './../Testimonials/Testimonials';
export default function PopularCourses() {
    return (
        <div>
            <Box >
                <Box style={{display:"flex",justifyContent:"space-between"}}>
                    <Typography  variant="h5" style={{display:"flex",justifyContent:'left', alignItems:'left',marginLeft:'55px',marginTop:'30px',color:'black',marginBottom:'0px'}}>
                      Our<span style={{fontWeight:600}}>&nbsp;Testimonials</span> 
                    </Typography> 
                </Box>
            
            </Box>
        <Container style={{marginLeft:'5px'}}>
            <Testimonials />
        </Container>
  
</div>
    )
}
