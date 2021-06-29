import React, { useState, useEffect } from "react";
import useStyles from './../../styles/InstructorCard';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  CardActionArea,
  Container} from '@material-ui/core';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 6,
    slidesToSlide: 4, 
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 6,
    slidesToSlide: 3, 
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 4,
    slidesToSlide: 2, 
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 2,
    slidesToSlide: 1, 
  },
};
const RenderInstructorCard:React.FC =()=> {
  const classes = useStyles();
  const [instructors,setInstructors]=useState([]);

  useEffect(() => {
        axios
        .get("http://localhost:8888/.netlify/functions/getInstructors")
        .then((response: any) => {
            setInstructors(response.data.instructors);
        });
          
  }, []);

  return (
   <Container className={classes.root}>
 <Carousel
    additionalTransfrom={0}
    arrows={false}
    centerMode={false}
    containerClass="carousel-container"
    draggable
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={4000}
    focusOnSelect={false}
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside
    renderDotsOutside={false}
    responsive={responsive}
    showDots={false}
    slidesToSlide={1}
     >
        
            {instructors &&
				instructors.map((card: any) => {
              return(
                <Card className={classes.card}> 
                <CardActionArea>
              <div className={classes.circle}>
                <img alt="person" src={card.image} className={classes.cover} />
              </div>
                    <CardContent className={classes.cardcontent}>
                     <Box  className={classes.CHcontent} >
                          <Typography className={classes.name}>{card.instructor_name}</Typography>
                          <Typography className={classes.name} color="textSecondary">{card.mentored} Mentored</Typography>
                          <Button variant="outlined" size="small" color="secondary" className={classes.button}>Know More</Button> 
                     </Box>
                   </CardContent>  
                </CardActionArea>
              </Card>
      );
    })}

</Carousel>
   </Container>
   
  );
}

export default RenderInstructorCard;