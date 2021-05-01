import React, { useState, useEffect, useCallback } from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
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
  );
};
export default Slide;