import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btn: {
    position: "sticky",
    top: "80%",
    left: "100%",
    borderRadius: "10px 0 0 10px",
    boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
    textAlign: "left",
    paddingLeft: "0.5rem",
    zIndex: "2",
  },
}));

const BookingBtn = () => {
  const classes = useStyles();
  return (
    <Button className={classes.btn} variant="contained" color="primary">
      Boka gratis hembesök
    </Button>
  );
};
export default BookingBtn;
