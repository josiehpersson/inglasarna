import React from 'react'
import { Button } from '@material-ui/core'

import useStyles from "./styles";

export default function Booking_btn() {
  const classes = useStyles();

  return (
    <Button className={classes.Booking_btn} variant="contained">Boka gratis hembesök</Button>
  )
}
