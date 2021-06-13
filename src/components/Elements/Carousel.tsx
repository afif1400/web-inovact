import React,{ useState } from 'react';
import{ Box ,Typography,Button} from '@material-ui/core';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Rating from './Rating/Rating';
export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex:number, e:any) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel  activeIndex={index} onSelect={handleSelect} style={{margin:' 50px 30px 20px ',paddingTop:'40px'}}>
        <Carousel.Item className="carousel" >
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="First slide"
            style={{zIndex:0,}}
          />
          <Carousel.Caption className="captions">
           <Box style={{display:"flex",justifyContent:'left',alignItems:'left',flexDirection:'column',textAlign:'left',}}>
           <Typography  variant="h4" style={{marginBottom:'10px',}} >
           The complete guide to react vue development
                </Typography>
              <Typography paragraph >
             Nulla vitae elit libero, a pharetra augue mollis interdum.
              Nulla vitae elit libero, a pharetra augue mollis interdum.
              Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Typography>
              <Box>
                <Rating rating={3} />
              <Button variant="contained" color="secondary" size="large">
            Get Course
          </Button>
              </Box>
             
          </Box>
       
         

          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item className="carousel" >
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="First slide"
            style={{zIndex:0,}}
          />
          <Carousel.Caption className="captions">
           <Box style={{display:"flex",justifyContent:'left',alignItems:'left',flexDirection:'column',textAlign:'left',}}>
           <Typography  variant="h4" style={{marginBottom:'10px',}} >
           The complete guide to react vue development
                </Typography>
              <Typography paragraph >
             Nulla vitae elit libero, a pharetra augue mollis interdum.
              Nulla vitae elit libero, a pharetra augue mollis interdum.
              Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Typography>
              <Box>
                <Rating rating={3} />
              <Button variant="contained" color="secondary" size="large">
            Get Course
          </Button>
              </Box>
             
          </Box>
       
         

          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item className="carousel" >
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="First slide"
            style={{zIndex:0,}}
          />
          <Carousel.Caption className="captions">
           <Box style={{display:"flex",justifyContent:'left',alignItems:'left',flexDirection:'column',textAlign:'left',}}>
           <Typography  variant="h4" style={{marginBottom:'10px',}} >
           The complete guide to react vue development
                </Typography>
              <Typography paragraph >
             Nulla vitae elit libero, a pharetra augue mollis interdum.
              Nulla vitae elit libero, a pharetra augue mollis interdum.
              Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Typography>
              <Box>
                <Rating rating={3} />
              <Button variant="contained" color="secondary" size="large">
            Get Course
          </Button>
              </Box>
             
          </Box>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    );
  }