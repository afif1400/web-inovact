import React, { useState, useEffect } from "react";
import { makeStyles ,createStyles} from '@material-ui/core/styles';
import {Card,CardContent,
  Typography,Box,Button, CardActionArea,Container} from '@material-ui/core';

import {instructorDetails} from './../data/data';

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import axios from "axios";
const useStyles = makeStyles((theme) =>
  createStyles({
    card:{
      maxWidth: 200,
      marginLeft:20,
      marginTop:30,
      borderRadius:'15px',
      marginBottom:'20px',
      boxShadow: "0 3px 10px -12px rgba(0,0,0,0.9)",
      [theme.breakpoints.down('sm')]: {
        marginLeft:10,
      },
    },
  root: {
   padding:0,
  
  },
  cardcontent:{
    padding:'5px',
    margin:5,
    justifyContent:'left',
  },
  name: {
    marginBottom: 5,
    marginLeft:10,
    textAlign:'left'
  },
  circle:{
    position: 'relative',
    width: '200px',
    height: '120px',
    backgroundColor: '#020652',
   
  },
  cover: {
    width:'120px',
    height:'120px',
    position: 'absolute',
    bottom:" -18px",
    right: '25%',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderColor:' white',
    borderWidth: '5px',
    '@media screen and (max-width: 600px)': {
      width: '100px',
      height: '100px',
      right: '40%',
    },
  },
  CHcontent:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
    marginBottom:10,
  },
  button:{
    marginTop:5,
    marginBottom:10,
      },

}));


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
const RenderMentorCard:React.FC =()=> {
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

export default RenderMentorCard;