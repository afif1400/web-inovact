import React,{useState} from 'react';
import { makeStyles ,createStyles} from '@material-ui/core/styles';

import {Card,Container,CardMedia,CardContent,CardActions,Avatar,
  Typography,Box,Button, CardActionArea,Chip,Divider,Grid} from '@material-ui/core';
import {webinarDetails} from './../data/data';


import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4"
];

const useStyles = makeStyles((theme) =>
  createStyles({
  root: {
    padding:0,
   
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: '-10px',
    }
  },
  card:{
    maxWidth: 300,
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    marginTop:10,
    marginLeft:40,
    borderRadius:'15px',
    backgroundColor:'rgba(255,255,255,0.3)'
  },
  cardcontent:{
    padding:'5px',
    margin:5,
    marginBottom:0,
    justifyContent:'left',
  },
  name: {
    margin:3,
    fontWeight:520,
    textAlign:'left'
  },
  cover: {
   
  },
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
    mt: '35px',
    px: '15px',
   
    '.carousel-container': {
      width: '100%',
      maxWidth: '100%',
      marginRight:'40px',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1200px)': {
          opacity: 1,
        },
      },
    },
  },
  CHcontent:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
 
    margin:0,
    marginBottom:5,
  },
  button:{
    marginLeft:'40px',
      },
      price:{
      color:'green',
      fontWeight:550,
      },
      avatars:{

      },
      level:{
        background:'rgba(255,160,0,0.3)',

      },
      footer:{
        padding:'5px',
  
      },
      divider:{

      }
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, 
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 4,
    slidesToSlide: 3, 
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 4,
    slidesToSlide: 2, 
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, 
  },
};

const RenderMentorCard:React.FC =()=> {
  const classes = useStyles();
  return (
   
    <Carousel
    additionalTransfrom={0}
    arrows={false}
    centerMode={false}
    containerClass="carousel-container"
    draggable
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    focusOnSelect={false}
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside
    renderDotsOutside={false}
    responsive={responsive}
    showDots={false}
    slidesToSlide={1}
     >
          {webinarDetails.map((card)=> {
              return(
                <Card className={classes.card}> 
              <CardActionArea>
                <CardMedia
                                component="img"
                                className={classes.cover}
                                alt="user Image"
                                image="https://images.unsplash.com/photo-1494599948593-3dafe8338d71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViaW5hcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                title="User Image"
                                /> 
          
                <CardContent className={classes.cardcontent}>
                      <Box className={classes.CHcontent} >
                      <Chip
                        size="small"
                        label={card.level}
                        clickable
                        color="secondary"
                        variant="outlined"
                        
                       
                       />
                          <Typography gutterBottom variant="h6" component="h4" className={classes.price}><span>&#36;</span>{card.price}</Typography>
                    </Box>
                    <Box>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.name} >{card.name}</Typography>
                    </Box>
                </CardContent>  
            </CardActionArea>
          <CardActions className={classes.footer}>
              <Divider className={classes.divider} light />
                <Box className={classes.avatars}>
                    {faces.map(face => (
                        <Avatar className={classes.avatar} key={face} src={face} />
                      ))}
                </Box>
                <Box>
                      <Button size="small" className={classes.button} href="#" >Learn more</Button>
                </Box>
          </CardActions>
          </Card>
        );
      })}

      </Carousel>

  );
}

export default RenderMentorCard;