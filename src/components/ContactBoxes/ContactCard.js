import React from "react";
import {
  makeStyles,
  Card,
  CardMedia,
  Typography,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignitems: "center",
    maxWidth: '360px',
    borderRadius: 0,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  },
  overlay: {
    width: '100%',
    height: '100%',
    background:
      "linear-gradient(270deg, #FFFFFF 2.66%, rgba(255, 255, 255, 0) 100%), url(.png)",
    position: "absolute",
    zIndex: "3",
  },
  bild: {
    width: '100%',
    height: '100%',
    position: "absolute",
    zIndex: "1",
  },
  imgWrapper: {
    position: "relative",
    minWidth: "96px",
    minHeight: "102px"
    
  },
  rubrik: {
    fontSize: "18px",
  },
  title: {
    fontSize: "12px",
    paddingBottom: theme.spacing(1)
  },
  kontakt: {
    fontSize: "12px",
  },
  textBox: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    textAlign: "center",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
}));

const ContactCard = ({ bild, rubrik, title, bildAlt, kontaktUppgifter }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.container}>
        <div className={classes.imgWrapper}>
          <div className={classes.overlay}></div>
          <img className={classes.bild} src={bild} title={bildAlt} />
        </div>
        <Box className={classes.textBox}>
          <Typography className={classes.rubrik}>{rubrik}</Typography>
          <Typography className={classes.title}>{title}</Typography>
          {kontaktUppgifter.map((upg, index) => (
            <Typography className={classes.kontakt} key={index}>
              {upg}
            </Typography>
          ))}
        </Box>
      </Card>
    </>
  );
};

export default ContactCard;
