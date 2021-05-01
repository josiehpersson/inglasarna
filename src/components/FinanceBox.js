import React from 'react';
import { Button, Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  line: {
    backgroundColor: '#003595',
    height: '1%',
    width: '30%',
    position: 'absolute',
    left: '1%',

    [theme.breakpoints.up('lg')]: {
      width: '20%',
      left: theme.spacing(1),
    },
    [theme.breakpoints.up('xl')]: {
      width: '10%',
      left: theme.spacing(1),
    },
  },
}));

const FinanceBox = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} xs={10}>
      <Grid item xs={10}>
        <Typography variant="h1">Vi hjälper dig med finansiering</Typography>
        <span className={classes.line}></span>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac justo
          commodo, malesuada odio vitae, euismod ante. Mauris quis sem laoreet,
          lacinia neque eget, venenatis ligula. Maecenas pharetra tincidunt
          sapien vel mattis. Fusce in faucibus nunc. Integer et velit pulvinar,
          ultrices odio interdum, mattis tellus. Duis nisl orci, porta vel nisi
          sit amet, sollicitudin consequat est. Aenean fermentum id arcu in
          suscipit.
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Button variant="contained" color="secondary">
          Räkna på finansiering
        </Button>
      </Grid>
    </Grid>
  );
};
export default FinanceBox;
