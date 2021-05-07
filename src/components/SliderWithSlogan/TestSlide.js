import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { images } from '../../assets/assets';
import Logo from '../../img/logotyp.svg';

const useStyles = makeStyles((theme) => ({
  carousel: {
    width: '100vw',
    height: '90vh',
  },
  carouselImage: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logotypeContainer: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 3,
    boxShadow: '0px 4.17391px 4.17391px rgba(0, 0, 0, 0.25)',
    padding: theme.spacing(4),
    backdropFilter: 'blur(4px)',
  },
}));
const TestSlide = () => {
  const classes = useStyles();

  return (
    <Carousel
      autoPlay={true}
      stopAutoPlayOnHover={false}
      indicators={false}
      interval={7000}
      className={classes.carousel}
    >
      {images.map((image, i) => {
        return (
          <Box
            sm={12}
            key={i}
            style={{
              background: `url(${image.image})`,
              backgroundSize: 'inherit',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            className={classes.carouselImage}
          >
            <Box sm={6} className={classes.logotypeContainer}>
              <img src={Logo} alt="Inglasarnas Logotyp" />
              <Typography variant="h1" color="secondary">
                Vi kan inglasning!
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Carousel>
  );
};
export default TestSlide;
