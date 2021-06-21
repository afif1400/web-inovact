import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import logo from './../../assets/img/right.png';
import Rating from './../Elements/Rating/Rating';
import PriceCard from './../Card/PriceCard';
import info from './../../assets/img/product.png'
import Payment from './../PaymentRoute';
import Pay from './../Payment';

import {courseDetails,outcomeDetails,curriculumDetails,reviewDetails} from './../data/data';

import {Container,ListItem,ListItemAvatar,IconButton,List,Avatar,ListItemText,
  ListItemIcon,ListItemSecondaryAction,ButtonBase,Button,Card,Grid,Typography,Tab,Tabs,Box,Divider} from '@material-ui/core'
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({

  container:{
    marginTop:'70px',
    padding:'30px',
  },
  image: {
    width: 200,
    height: 200,
  },
  imagePop: {
    width: 100,
    height: 128,
  },
  demo: {
   
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  img: {
    margin: '0px',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  grid:{
    borderRight:'2px solid #DCDCDC',
  },

  price:{
    color:'green',
    fontWeight:550,
    },
    button:{
      '&hover':{
        backgroundColor:'#020652',
        color:'#FFA500',
      }
    },
    grid1:{
      marginTop:'20px',
      display:'block',
      '@media screen and (max-width: 600px)': {
        display:'none'
      }
    },
    mainImg:{
      width:"100%",
       height:"500px",
       '@media screen and (max-width: 600px)': {
        height:"auto",
      }
    },
    tab:{
      
      marginLeft:'-100px',
      backgroundColor:'white',
      boxShadow:'none',
      '@media screen and (max-width: 600px)': {
        width:'300px',
        marginLeft:'40px',
      },
    },
}));


export default function CourseInfo() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const [dense, setDense] = React.useState(false);
  return (
    <div  >
      <Container>
      <Grid container  direction="row" spacing={3} className={classes.container}>
        <Grid item xs={12} md={8}>
            <Box>
                <Typography variant="h4" color="primary">{courseDetails.title}</Typography>
                <Box>
                    <Grid container spacing={2} className={classes.grid1}>
                          <Grid item xs container direction="row" spacing={2}>
                            <Grid item xs className={classes.grid}>
                            <Typography gutterBottom variant="h6">
                            Instructor
                            </Typography>
                            <Typography variant="body2" gutterBottom>{courseDetails.instructor}</Typography>
                           
                        </Grid>
                        <Grid item xs className={classes.grid} style={{paddingLeft:'40px'}}>
                        <Typography gutterBottom variant="h6" >
                           Catergory
                        </Typography>
                        <Typography gutterBottom variant="body2" >{courseDetails.category}</Typography>
                        </Grid>
                        <Grid item xs style={{paddingLeft:'40px'}} >
                        <Typography gutterBottom variant="h6">
                           Price
                        </Typography>
                        <Typography gutterBottom variant="body2" ><span>&#8377;</span>{courseDetails.price}</Typography>
                        </Grid>
                         <Grid item xs>
                     <Pay />
                        </Grid>
                      </Grid>
                </Grid>
                <Box style={{marginTop:'20px'}}>
                  <img src="https://images.unsplash.com/photo-1611095564985-89765398121e?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YnVzaW5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className={classes.mainImg} />
                </Box>
            </Box>
        </Box>
        
     
      <AppBar position="static" color="default" style={{backgroundColor:'white',boxShadow:'none',}}>
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
           className={classes.tab} >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Curriculum" {...a11yProps(1)} />
          <Tab label="Instructor" {...a11yProps(2)} />
          <Tab label="Review" {...a11yProps(3)} />
        </Tabs>
      </AppBar>


      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Box>
              <Typography variant="h6" color="primary">Overview</Typography>
                <Typography paragraph>
                    {courseDetails.description}
                </Typography>
              <Typography variant="h6" color="primary">What will you learn?</Typography>
           
                {outcomeDetails.map((item) => (
                  <ListItem>
                    <ListItemIcon>
                    <img src={logo} width="30" height="30"/>
              </ListItemIcon>
                    <ListItemText primary={item.outcome} />
                  </ListItem>
                ))}
          </Box>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
            <Grid item xs={12} >
              <Typography variant="h6" className={classes.title}>
              Curriculum of the course
              </Typography>
              <div className={classes.demo}>
                <List dense={dense}>
                  {curriculumDetails.map((item)=>
                    (
                  <ListItem>
                      <ListItemAvatar>
                        <img src={info} width="40" height="40" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.lesson}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                             <Button size="small" variant="contained" color="primary">{item.duration}min</Button>
                        </IconButton>
                      </ListItemSecondaryAction>
                  </ListItem>
                    ))}
                </List>
              </div>
            </Grid>
        </TabPanel>


        <TabPanel value={value} index={2} dir={theme.direction}>
        
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            </ButtonBase>
          </Grid>

          <Grid item xs={12} sm container style={{padding:'30px'}}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs style={{paddingTop:'30px'}}>
                <Typography gutterBottom variant="h6">
                  Jane Doe
                </Typography>
                <Typography variant="body2" gutterBottom>
                 Web developer
                </Typography>
                <Typography paragraph color="textSecondary">
                Jone Smit is a celebrated photographer, author, and writer who brings passion to everything he does.
                </Typography>
                <Button>Learn More</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </TabPanel>

        <TabPanel value={value} index={3} dir={theme.direction}>

        

                    {reviewDetails.map((item)=>{
                      return(
                        <Grid container spacing={2}>
                           <Grid item>
                              <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                              </ButtonBase>
                            </Grid>

                            <Grid item xs={12} sm container >
                              <Grid item xs container direction="column" spacing={2} style={{paddingTop:'30px'}}>
                                <Grid item xs>
                                  <Typography gutterBottom variant="subtitle1">
                                    {item.name}
                                  </Typography>
                                    <Rating rating={4}/>
                                  <Typography  variant="body2">
                                  {item.review}
                                  </Typography>
                                </Grid>
                            
                              </Grid>
                             
                            </Grid>
                              </Grid>
                      )
                    })
                  }
          
      
        </TabPanel>
      </SwipeableViews>
      </Grid>

      <Grid item xs={12} md={4} style={{padding:'30px'}}>
        <Grid item container direction="column" spacing={2}>
              <PriceCard />
        </Grid>
        <Grid item container direction="column" spacing={2} style={{padding:'30px',marginTop:'30px'}}>
          <Typography variant="h5" style={{fontWeight:600,}}>Popular Live Courses</Typography>
        <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.imagePop}>
                <img className={classes.img} alt="complex" src="https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              </ButtonBase>
            </Grid>
            
            <Grid item xs={12} sm container style={{paddingTop:'30px'}}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs >
                  <Typography gutterBottom variant="h6" style={{fontSize:'18px'}}>
                  React – The Complete Guide
                  </Typography>
                </Grid>
              </Grid>

              <Grid item>
                <Typography variant="subtitle1"><span>&#8377;</span>19.00</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Divider style={{paddingLeft:'30px'}} />
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.imagePop}>
                <img className={classes.img} alt="complex" src="https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              </ButtonBase>
            </Grid>
            
            <Grid item xs={12} sm container style={{paddingTop:'30px'}}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs >
                  <Typography gutterBottom variant="h6" style={{fontSize:'18px'}}>
                  React – The Complete Guide
                  </Typography>
                </Grid>
              </Grid>

              <Grid item>
                <Typography variant="subtitle1"><span>&#8377;</span>19.00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </Grid>
</Grid>
      </Container>
      
      
</div>
  );
}
