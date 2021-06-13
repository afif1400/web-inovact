import React from 'react';
import { makeStyles ,createStyles} from '@material-ui/core/styles';
import {Card,Container,CardContent,
  Typography,Box,Button, CardActionArea,Grid} from '@material-ui/core';

import {instructorDetails} from './../data/data';



const useStyles = makeStyles((theme) =>
  createStyles({
    card:{
      maxWidth: 200,
      marginLeft:50,
      marginTop:30,
      borderRadius:'15px',
      marginBottom:'20px',
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.9)",
      "&:first-of-type": {
        marginLeft: "-40px",
       
      }

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
    right: '20%',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderColor:' white',
    borderWidth: '5px',
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


const RenderMentorCard:React.FC =()=> {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
    <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        >
            {instructorDetails.map((card)=> {
              return(
                <Card className={classes.card}> 
                <CardActionArea>
              <div className={classes.circle}>
                <img alt="person" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className={classes.cover} />
              </div>
                    <CardContent className={classes.cardcontent}>
                     <Box  className={classes.CHcontent} >
                          <Typography className={classes.name}>{card.name}</Typography>
                          <Typography className={classes.name} color="textSecondary">{card.mentored} Mentored</Typography>
                          <Button variant="outlined" size="small" color="secondary" className={classes.button}>Go to Profile</Button> 
                     </Box>
                   </CardContent>  
                </CardActionArea>
              </Card>
      );
    })}

</Grid>
    </Container>
  
  );
}

export default RenderMentorCard;