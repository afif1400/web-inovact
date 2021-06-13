import React from 'react';
import { makeStyles ,createStyles} from '@material-ui/core/styles';
import {Card,CardMedia,CardContent,CardActions,Avatar,
  Typography,Box,Button,Container, CardActionArea,Divider,Grid} from '@material-ui/core';
  import {exploreDetails} from './../data/data';

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
    backgroundColor:'rgba(255,255,255,0.3)',
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    marginTop:20,
    marginLeft:20,
    borderRadius:'15px',
  },
  cardcontent:{
    padding:'10px',
    margin:10,
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


const ExploreCourses:React.FC=()=> {
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
        {exploreDetails.map((card)=> {
           return(
            <Card className={classes.card}> 
            <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.cover}
                  alt="user Image"
                  image={card.image}
                  title="User Image"
                  /> 
          
              <CardContent className={classes.cardcontent}>
                  <Box  >
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
</Grid>   

    </Container>
  );
}

export default ExploreCourses;