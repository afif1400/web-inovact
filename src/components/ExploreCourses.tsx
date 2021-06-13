import React from 'react';
import RenderExploreCard from './Card/ExploreCard';
import {Grid,Typography,Box,Container} from '@material-ui/core';



export default function ExploreCourses() {
    return (
        <div>
                            <Box >
                                <Box style={{display:"flex",justifyContent:"space-between"}}>
                                    <Typography  variant="h5" style={{display:"flex",justifyContent:'left', alignItems:'left',marginLeft:'55px',marginTop:'20px',color:'black',marginBottom:'20px',}}>
                                    <span style={{fontWeight:600}}> Explore  </span> 
                                    </Typography> 
                                    
                                </Box>
                            </Box>
            <RenderExploreCard />
</div>
    )
}
