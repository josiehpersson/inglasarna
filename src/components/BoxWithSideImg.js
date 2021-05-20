import React from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
      width: '80vw',
      height: 'auto',
  
      [theme.breakpoints.between('xs', 'sm')]: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    image: {
      height: 300,
      width: 300,
      float: 'left',
      margin: theme.spacing(3),
      borderRadius: theme.spacing(4),
  
      [theme.breakpoints.between('xs', 'sm')]: {
        float: 'none',
      },
    },
  }));

const BoxWithSideImg = (props) => {
    const classes = useStyles();
    return(
  <Box className={classes.container}>
    <img
      src={props.img}
      alt={props.imgAlt}
      className={classes.image}
    />
    <Typography variant="h4">{props.title}</Typography>
    <Typography variant="body1">
      {props.text}
    </Typography>
  </Box>
  );
};
export default BoxWithSideImg;