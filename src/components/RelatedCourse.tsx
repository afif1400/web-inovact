import React from 'react';
import RenderWebinarCard from './Card/CourseCard';
import {Typography,Box,Container} from '@material-ui/core';
export default function PopularCourses() {
    return (
     <Box style={{backgroundColor:'rgba(196, 175, 224,0.5)',marginTop:'40px',padding:'40px',width:'100%', paddingBottom:'100px'}}>

          
                <Box style={{display:"flex",justifyContent:"space-between"}}>
                    <Typography  variant="h5" style={{fontWeight:600,display:"flex",justifyContent:'left', alignItems:'left',marginLeft:'55px',marginTop:'40px',color:'black',marginBottom:'20px'}}>
                    Related Courses You may like
                    </Typography> 
                </Box>
            
          
        <Container style={{marginLeft:'10px'}}>
             <RenderWebinarCard />
        </Container>
</Box>
    )
}
