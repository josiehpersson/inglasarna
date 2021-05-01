import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import SliderWithSlogan from '../components/SliderWithSlogan/SliderWithSlogan';
import InfoBox from '../components/InfoBoxes/InfoBox';
import TreColInfoBox from '../components/TreColInfoBox/TreColInfoBox';
import ContactForm from '../components/ContactForm';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  spacing: {
      marginBottom: theme.spacing(3)
  }
}));

const Start = () => {
  const classes = useStyles();
  return (
    <Grid xs={12} spacing={3} className={classes.container}>
      <Grid item xs={12}>
        <SliderWithSlogan/>
      </Grid>
      <Grid item xs={10}>
        <InfoBox/>
      </Grid>
      <Grid item xs={10}>
        <TreColInfoBox />
      </Grid>
      <Grid item xs={10}>
        <ContactForm />
      </Grid>
    </Grid>
  );
};
export default Start;
