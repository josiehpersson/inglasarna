import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { ViewColumn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  container: {
    background: 'white',
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingtop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    width: '85vw',
    '@media (max-width: 600px)': {
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  },
  imageContainer: {
    backgroundImage: (props) => `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 300,
    width: 300,
    borderRadius: 150,
    '@media (max-width: 900px)': {
      height: 200,
      width: 200,
      borderRadius: 100,
    },
    '@media (max-width: 600px)': {
      height: 100,
      width: 100,
      borderRadius: 50,
    },
  },
  textContainer: {
    height: '50%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-evenly',
  },
}));
const ContactBox = (props) => {
  const classes = useStyles(props);
  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12} md={4}>
        <div className={classes.imageContainer} />
      </Grid>
      <Grid item xs={12} md={6} className={classes.textContainer}>
        <Typography variant='h1'>Kontaktperson</Typography>
        <Typography variant='h3'>{props.name}</Typography>
        <Typography variant='body1'>{props.number}</Typography>
        <Typography variant='body1'>{props.email}</Typography>
      </Grid>
    </Grid>
  );
};

export default ContactBox;
