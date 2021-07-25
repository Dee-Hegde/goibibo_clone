import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./Style/Bus.css"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
   
    },
  },
}));



export const DateButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

        <div className="today-btn" style={{position:"absolute",zIndex:"1",marginTop:"-50px",marginLeft:"21%"}}>
   
        <Button variant="contained" className="today-btn" style={{marginLeft:"30px",fontSize:"14px",textTransform:"none",backgroundColor:"#E8F1FC",color:"#2274E0"}}>
       Today,Sun 24july
      </Button>
      <Button variant="contained" className="tomorrow-btn" style={{width:"30%",marginLeft:"10px",backgroundColor:"#E8F1FC",textTransform:"none",color:"#2274E0"}}>
       Tomorrow
      </Button>
    
        </div>
  
    </div>
  );
}
