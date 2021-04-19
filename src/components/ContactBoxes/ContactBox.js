import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import ContactCard from "./ContactCard";

import bild1 from '../../img/contactbild1.png'
import bild2 from '../../img/contactbild2.png'
import bild3 from '../../img/contactbild3.png'


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5)
  },
  item: {
    margin: theme.spacing(1.5)
  }
}));

const ContactBox = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.item}>
        <ContactCard bild={bild1} bildAlt="Desc på bild" rubrik="Förnamn Efternamn" title="Titel" kontaktUppgifter={['mail@mail.com','073865178']}/>
      </Grid>
      <Grid item className={classes.item}>
        <ContactCard bild={bild2} bildAlt="Desc på bild" rubrik="Förnamn Efternamn" title="Titel" kontaktUppgifter={['mail@mail.com','073865178']}/>
      </Grid>
      <Grid item className={classes.item}>
        <ContactCard bild={bild3} bildAlt="Desc på bild" rubrik="Förnamn Efternamn" title="Titel" kontaktUppgifter={['mail@mail.com','073865178']}/>
      </Grid>
    </Grid>
  );
};

export default ContactBox;
