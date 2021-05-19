import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography, makeStyles } from '@material-ui/core';
import Logo from '../../img/logotyp.svg';

const useStyles = makeStyles((theme) => ({
  carousel: {
    width: '100vw',
    overflow: 'hidden',
    height: 1200,
    boxSizing: 'border-box',
  },
  image: {
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center bottom',
  },

}));
const Slide = (props) => {
  const classes = useStyles();

  return (
    <Box sm={12}>
      <Box className={classes.sloganContainer}>
        <img src={Logo} alt="inglasarnas logotyp" className={classes.logo}/>
        <Typography variant="h1" color="secondary">Vi kan inglasning</Typography>
      </Box>
    <Carousel
      autoPlay={true}
      stopAutoPlayOnHover={false}
      indicators={false}
      interval={7000}
      className={classes.carousel}
    >
      {props.items.map((item, i) => (
        <img
          key={i}
          src={item.image}
          alt={item.title}
          className={classes.image}
        />
      ))}
    </Carousel>

    </Box>
  );
};
export default Slide;
