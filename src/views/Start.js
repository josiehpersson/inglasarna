import React from "react";
import { makeStyles, Box, Grid } from "@material-ui/core";
import SloganCarousel from "../components/SloganCarousel";
import InfoBox from "../components/InfoBoxes/InfoBox";
import TreColInfoBox from "../components/TreColInfoBox/TreColInfoBox";
import ContactForm from "../components/ContactForm";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(6),
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    padding: 0,
  },
}));

const Start = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item md={12}>
        <SloganCarousel />
      </Grid>
      <Grid item md={10}>
        <InfoBox />
      </Grid>
      <Grid item md={10}>
        <TreColInfoBox />
      </Grid>
      <Grid item md={10}>
        <ContactForm />
      </Grid>
    </Grid>
  );
};
export default Start;
