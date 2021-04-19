import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import InfoCard from "./InfoCard";

import infoBoxImg1 from "../../img/Infoboximg1.png";
import infoBoxImg2 from "../../img/Infoboximg2.png";
import infoBoxImg3 from "../../img/Infoboximg3.png";
import infoBoxVector from "../../img/infoboxvector.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5)
  },
  item: {
    margin: theme.spacing(0.7)
  },
}));

function InfoBox() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.item}>
        <InfoCard
          img={infoBoxImg1}
          color="red"
          icon={infoBoxVector}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra sodales nulla elementum."
          rubrik="Rubrik"
        />
      </Grid>
      <Grid item className={classes.item}>
        <InfoCard
          img={infoBoxImg2}
          color="#333"
          icon={infoBoxVector}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra sodales nulla elementum."
          rubrik="Rubrik"
        />
      </Grid>
      <Grid item className={classes.item}>
        <InfoCard
          img={infoBoxImg3}
          color="green"
          icon={infoBoxVector}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra sodales nulla elementum."
          rubrik="Rubrik"
        />
      </Grid>
    </Grid>
  );
}

export default InfoBox;
