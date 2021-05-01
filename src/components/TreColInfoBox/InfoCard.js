import React from "react";
import {
  Typography,
  Card,
  Box,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import vector from "../../img/infoboxvector.png";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.7)",
    borderRadius: "3px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginBottom: theme.spacing(5),
    backdropFilter: "blur(4px)",
    color: "#000",
  },
  cardImg: {
    padding: theme.spacing(1.2),
  },
  cardIcon: {
    background: "#585858",
    borderRadius: "50%",
    margin: theme.spacing(2),
  },
  cardContent: {
    fontSize: "12px",
    textAlign: "center",
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
  },
  cardHeading: {
    fontSize: "18px",
  },
}));

function InfoCard({}) {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <Box className={classes.cardIcon}>
        <img src={vector} className={classes.cardImg}></img>
      </Box>

      <Typography className={classes.cardHeading} variant="subtitle1">
        In velit.
      </Typography>

      <Typography className={classes.cardContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur cras
        tellus neque odio volutpat lorem sed.
      </Typography>
    </Card>
  );
}

export default InfoCard;
