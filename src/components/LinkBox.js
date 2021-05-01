import React from 'react';
import { makeStyles, Grid, Button, Typography } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  containerItem: {
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
  },
}));
const LinkBox = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} xs={10} className={classes.container}>
      <Grid item xs={8} className={classes.containerItem}>
        <Typography variant="h1" color="secondary">
          <ArrowForwardIosIcon /> Glasa in balkong
        </Typography>
      </Grid>
      <Grid item xs={8} className={classes.containerItem}>
        <Typography variant="h1" color="secondary">
          <ArrowForwardIosIcon /> Glasa in altan
        </Typography>
      </Grid>
      <Grid item xs={8} className={classes.containerItem}>
        <Typography variant="h1" color="secondary">
          <ArrowForwardIosIcon /> Glasa in tak
        </Typography>
      </Grid>
      <Grid item xs={8} className={classes.containerItem}>
        <Typography variant="h1" color="secondary">
          <ArrowForwardIosIcon /> Ställ en fråga till oss
        </Typography>
      </Grid>
    </Grid>
  );
};
export default LinkBox;
