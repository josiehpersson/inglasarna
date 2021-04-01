import React from 'react'
import { Button } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Booking_btn: {
   position: 'sticky',
   top: "70%",
   left: "100%",
   width: "231px",
   textTransform: "none",
   fontFamily: 'Spinnaker',
   fontSize: "18px",
   whiteSpace: 'nowrap',
   backgroundColor: '#296BE7',
   color: '#fff',
   borderRadius: '10px 0 0 10px',
   boxShadow: '0px 4px 4px 0 rgba(0,0,0,0.25)',
   textAlign: 'left',
   paddingLeft: '0.5rem',
   zIndex: '2'
 }
}));

export default function BookingBtn() {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:900px)');
  let btn;
  if(matches){
    btn = <Button className={classes.Booking_btn} variant="contained">Boka gratis hembesök</Button>;
  }
  return (
     <>
    {btn}
     </>
  )
}
