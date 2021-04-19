import React from "react";
import { Parallax } from "react-parallax";
import { Typography, Card, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InfoCard from "./InfoCard";

import background from "../../img/background3infobox.png";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(1.5),
    maxWidth: "1280px",
    margin: "auto",
  },
  infobox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    padding: theme.spacing(2),
    fontSize: "24px",
  },
  headingContainer: {
    background: "rgba(255, 255, 255, 0.7)",
    borderRadius: "3px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginBottom: theme.spacing(5),
    backdropFilter: "blur(4px)",
  },
  space: {
    padding: theme.spacing(2),
  },
}));

function TreColInfoBox() {
  const classes = useStyles();

  return (
    <Parallax bgImage={background} strength={-200}>
      <Box className={classes.content}>
        <Card className={classes.headingContainer}>
          <Typography className={classes.heading}>RUBRIK</Typography>
        </Card>
        <Box className={classes.infobox}>
          <InfoCard></InfoCard>
          <div className={classes.space}></div>
          <InfoCard></InfoCard>
          <div className={classes.space}></div>
          <InfoCard></InfoCard>
        </Box>
      </Box>
    </Parallax>
  );
}

export default TreColInfoBox;
