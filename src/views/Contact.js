import React from 'react';
import ContactBox from '../components/ContactBoxes/ContactBox';
import FormContainer from '../components/Form/FormContainer';
import RetailerInfoBox from '../components/RetailerInfoBox';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    marginTop: '5vh',
  },
  textContainer: {
    textAlign: 'center',
    marginBottom: '5vh',
  },
  marginContainer: {
    marginBottom: '5vh',
  },
  title: {
    marginBottom: '1vh',
  },
}));
const Contact = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={10} className={classes.container}>
      <Grid item xs={12} className={classes.textContainer}>
        <Typography variant='h1' className={classes.title}>
          {' '}
          Kontakta oss
        </Typography>
        <Typography variant='body1'>
          Om ni har några frågor, vill ha ett hembesök eller en offert kontakta
          oss gärna!
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.marginContainer}>
        <ContactBox
          image='https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          name='Förnamn Efternamn'
          number='070 000 00 00'
          email='fornamn@minemail.com'
        />
      </Grid>
      <Grid item xs={12} className={classes.marginContainer}>
        <FormContainer />
      </Grid>
      <Grid item xs={11} md={7} className={classes.textContainer}>
        <Typography variant='h2' className={classes.title}>
          Om oss
        </Typography>
        <Typography variant='body1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          porttitor arcu mollis dignissim phasellus suspendisse risus bibendum
          pulvinar. Justo, mauris ac ut dui. Suspendisse orci vivamus
          suspendisse convallis imperdiet montes, in auctor orci. Tempus eu quam
          consequat, ac tempor. Elit dictumst diam nibh at ut. Elit malesuada
          placerat tempus egestas venenatis diam blandit. Gravida lobortis
          convallis sodales proin interdum. Lectus facilisi in quam metus. Sed
          massa eget tempus purus nunc sit purus. Nec sit pellentesque a lacus
          fringilla. Volutpat pulvinar integer massa tortor purus malesuada
          blandit nibh dignissim. Arcu orci, turpis vulputate nulla tristique ut
          eget sed orci. Massa eget a ac magna ornare lacus enim. Risus egestas
          risus, netus tellus scelerisque. Egestas ut facilisis arcu est
          phasellus. Leo sit id in hendrerit risus, ullamcorper eget duis nulla.
          Sit proin lorem eget dolor tincidunt. Elementum egestas eget mattis
          auctor ac non.
        </Typography>
      </Grid>
      <Grid item xs={12} md={10} className={classes.marginContainer}>
        <RetailerInfoBox />
      </Grid>
    </Grid>
  );
};
export default Contact;
