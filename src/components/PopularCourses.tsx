import React from 'react';
import RenderWebinarCard from './Card/WebinarCard';
import {Typography,Box,Container} from '@material-ui/core';
export default function PopularCourses() {
    return (
        <div>
            <Box >
                <Box style={{display:"flex",justifyContent:"space-between"}}>
                    <Typography  variant="h5" style={{display:"flex",justifyContent:'left', alignItems:'left',marginLeft:'55px',marginTop:'60px',color:'black',marginBottom:'20px'}}>
                    Popular<span style={{fontWeight:600}}>&nbsp;Courses</span> 
                    </Typography> 
                </Box>
            
            </Box>
<Box>
    <RenderWebinarCard />
</Box>
    
  
</div>
    )
}
