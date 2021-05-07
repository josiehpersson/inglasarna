import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import TestSlide from '../components/SliderWithSlogan/TestSlide';
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
    <Box sm={12} className={classes.container}>
      <div className={classes.spacing}>
          <TestSlide />
      </div>
        <Box sm={10}>
          <div className={classes.spacing}>
        <InfoBox/>
          </div>
        <div className={classes.spacing}>
        <TreColInfoBox />
        </div>
        <div className={classes.spacing}>
        <ContactForm />
        </div>
        </Box>
    </Box>
  );
};
export default Start;
