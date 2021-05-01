import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Parallax } from 'react-parallax';
import BackgroundImage from '../img/lumon-balkonginglasning-25.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    height: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parallax: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  glas: {
    background: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 3,
    boxShadow: '0px 4.17391px 4.17391px rgba(0, 0, 0, 0.25)',
    height: 300,
    padding: theme.spacing(3),
    textAlign: 'center',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
}));
const InfoboxWithImage = () => {
  const classes = useStyles();
  return (
      <Parallax bgImage={BackgroundImage} strength={-200}>
      <Grid container xs={12} className={classes.container}>
        <Grid container spacing={1} xs={7} className={classes.glas}>
          <Grid item xs={7}>
            <Typography variant="h1">RUBRIK</Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
              justo commodo, malesuada odio vitae, euismod ante. Mauris quis sem
              laoreet, lacinia neque eget, venenatis ligula. Maecenas pharetra
              tincidunt sapien vel mattis. Fusce in faucibus nunc. Integer et
              velit pulvinar, ultrices odio interdum, mattis tellus. Duis nisl
              orci, porta vel nisi sit amet, sollicitudin consequat est. Aenean
              fermentum id arcu in suscipit.
            </Typography>
          </Grid>
        </Grid>
    </Grid>
      </Parallax>
  );
};

export default InfoboxWithImage;
