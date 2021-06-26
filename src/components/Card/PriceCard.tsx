import React,{useState, useEffect} from 'react';
import { makeStyles ,createStyles} from '@material-ui/core/styles';

import {
    Card,
    Grid,
    Typography,
    Box,
    CardActionArea,
    Divider,

} from '@material-ui/core';
import price from './../../assets/img/rupee.png';
import time from './../../assets/img/time.png';
import date from './../../assets/img/date.png';
import enrolled from './../../assets/img/avatar.png';
import instructor from './../../assets/img/professor.png';
import Payment from './../PaymentRoute';
import {courseDetails} from './../data/data';
import axios from "axios";

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
    
    marginTop:20,
    marginLeft:20,
   borderTop:'2px solid #020652',
    [theme.breakpoints.down('sm')]: {
      marginLeft:'-20px',
      width:'300px',
    },
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
  
    '.carousel-container': {
      width: '100%',
      maxWidth: '100%',
      marginRight:'10px',
     
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
  learn:{
    display:'block',
    color:'#020652',
    padding:'5px',
    width:'100%',
    paddingX:'20px',
      '&:hover':{
        backgroundColor:'#020652',
        color:'#FFA500',
        border:'1px solid transparent',  
        borderRadius:'5px',
      }
    },

      price:{
      color:'green',
      fontWeight:550,
      },
      priceGrid:{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          paddingTop:'20px',
      },
      button:{
        width:'300px',
        display:'block',
       
      }
  
}));



const PriceCard:React.FC =()=> {
  const classes = useStyles();
  
  return (
    <Card className={classes.card} >
      <CardActionArea style={{padding:'30px'}}>
        <Grid container direction="column">
              <Grid item xs>
                <Box className={classes.priceGrid}>
                        <Typography variant="subtitle1"><img src={price} width="20" height="20"/>Price</Typography>
                        <Typography gutterBottom variant="h6" component="h4" className={classes.price}><span>&#8377;</span>{courseDetails.price}</Typography>
                </Box>
              </Grid>
              <Divider style={{paddingLeft:'30px'}}/>

              <Grid item xs>
                <Box className={classes.priceGrid}>
                        <Typography variant="subtitle1"><img src={instructor} width="20" height="20"/>Instructor</Typography>
                        <Typography gutterBottom variant="h6" component="h4" >{courseDetails.instructor}</Typography>
                </Box>
              </Grid>
              <Divider style={{paddingLeft:'30px'}}/>

              <Grid item xs>
                <Box className={classes.priceGrid}>
                        <Typography variant="subtitle1"><img src={enrolled} width="20" height="20"/>Enrolled</Typography>
                        <Typography gutterBottom variant="h6" component="h4" >{courseDetails.enrolled}</Typography>
                </Box>
              </Grid>
              <Divider style={{paddingLeft:'30px'}}/>

              <Grid item xs>
                <Box className={classes.priceGrid}>
                        <Typography variant="subtitle1"><img src={time} width="20" height="20"/>Duration</Typography>
                        <Typography gutterBottom variant="h6" component="h4" >{courseDetails.duration}</Typography>
                </Box>
              </Grid>
              <Divider style={{paddingLeft:'30px'}}/>

              <Grid item xs>
                <Box className={classes.priceGrid}>
                        <Typography variant="subtitle1"><img src={date} width="20" height="20"/>Date</Typography>
                        <Typography gutterBottom variant="h6" component="h4" >{courseDetails.date}</Typography>
                </Box>
              </Grid>
             

              <Grid item xs>
                <Box className={classes.button} style={{alignItems:'center',}}>
                       <Payment />
                </Box>
              </Grid>
              
        </Grid>
        </CardActionArea>
    </Card>
  );
}

export default PriceCard;