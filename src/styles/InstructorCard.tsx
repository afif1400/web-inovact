import { makeStyles, createStyles } from "@material-ui/core/styles"
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

export default useStyles;