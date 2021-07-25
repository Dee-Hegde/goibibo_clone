import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { StyleLeftTextBox } from "./style/BookingStyle"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop:"15px"

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    height: "45px",
    fontSize: "20px",
    fontWeight: "600",
  },
}));

export const AccordionOfferBox = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Accordion style={{  boxShadow:"none"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>OFFERS/GOCASH+ </Typography>
          </AccordionSummary>

          <AccordionDetails style={{ padding:"0%"}}>
           
              <StyleLeftTextBox style={{marginTop:"-15px"}}>

                <div style={{width:"330px",textAlign:"initial",height:"30px"}}>
                  Total Basefare

                  <spam style={{float:"right"}}>₹6000</spam>
                  </div>
                
                
              </StyleLeftTextBox>
           

          </AccordionDetails>
        </Accordion>

      </div>

    </>
  );
}
