import React from 'react'
import { Container, Typography, Box} from '@material-ui/core'
import  { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f4f4f4',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontFamily: "Spinnaker",
    fontSize: 18,
    marginBottom: "0.6rem"
  },
  text: {
    fontFamily:"Roboto",
    fontSize: 12,
  },
  box1: {
    margin: "1.5rem 0rem",
  },
  box2: {
    marginLeft: "2rem"
  },
})); 

export default function Footer() {
  const classes = useStyles();
  
  return (
    <Container className={classes.container}>

      <Typography className={classes.box1}>
        <Box className={classes.heading}>KONTAKT</Box>
        <Box className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra sodales nulla elementum.</Box>
      </Typography>
      
      <Typography className={classes.Box1, classes.box2}>
        <Box className={classes.heading}>FAQ</Box>
        <Box className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra sodales nulla elementum.</Box>
      </Typography>
    </Container>
  )
}
