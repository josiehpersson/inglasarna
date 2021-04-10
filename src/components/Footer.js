import React from 'react'
import { Container, Typography, Box} from '@material-ui/core'
import  { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f4f4f4',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 0,
    padding: theme.spacing(4)
  },
  heading: {
    marginBottom: "0.6rem"
  }
})); 

export default function Footer() {
  const classes = useStyles();
  
  return (
    <Box className={classes.container} md={12}>

    <Box className={classes.box1}>
      <Typography variant="subtitle1" className={classes.heading}>KONTAKT</Typography>
      <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra sodales nulla elementum.</Typography>
    </Box>
    
    <Box className={classes.box2}>
      <Typography variant="subtitle1" className={classes.heading}>FAQ</Typography>
      <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra sodales nulla elementum.</Typography>
    </Box>
    </Box>
  )
}
