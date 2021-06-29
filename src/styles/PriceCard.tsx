import { makeStyles, createStyles } from "@material-ui/core/styles"

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
export default useStyles;