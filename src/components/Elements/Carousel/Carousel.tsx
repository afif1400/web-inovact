import React,{ useState } from 'react';
import{ Box ,Typography,Button} from '@material-ui/core';

import Rating from '../Rating/Rating';
import {carouselDetails} from '../../data/data';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex:number, e:any) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel  activeIndex={index} onSelect={handleSelect} className="carousel-stuff">
       
       {carouselDetails.map((data)=>{
         return(
          <Carousel.Item className="carousel" >

<img
                  className="d-block w-100 img-responsive "
                  src={data.url}
                  alt="First slide"
                  style={{zIndex:0,}}
                />
                <Carousel.Caption className="captions">
                <Box className="overlay">
                    <Box className="content">
                        <Typography className="title" variant="h4"  >{data.title}</Typography>
                        <Typography paragraph className="description d-none d-md-block" >{data.description}</Typography>
                        <Box>
                            <Rating rating={3} />
                            <Button className="buttonlarge" variant="contained" color="secondary" size="large">Get Course</Button>
                            <Button className="button" variant="contained" color="secondary" size="small">Get Course</Button>
                        </Box>
                    </Box>
                  </Box>
                </Carousel.Caption>

               
        </Carousel.Item>
         );
       })}
      </Carousel>

    );
  }