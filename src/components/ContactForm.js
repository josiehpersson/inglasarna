import React, { useState } from 'react';
import { Grid, TextField, Button, makeStyles, Typography,Box } from '@material-ui/core';
import Background from '../img/lumon-balkonginglasning-701.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: theme.spacing(2),
  },
  formContainer: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(4px)',
    borderRadius: 6,
    padding: theme.spacing(2)
  },
  spacing: {
    marginBottom: theme.spacing(2)
  }
}));

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const classes = useStyles();

  return (
    <Grid container xs={12} className={classes.container}>
      <Grid item xs={12} s={12} md={6} lg={6} className={classes.formContainer}>
        <form>
          <Typography variant="h1" className={classes.spacing}>Kontakta oss</Typography>
          <TextField
            fullWidth
            color="secondary"
            variant="outlined"
            label="Namn"
            className={classes.spacing}
          />
          <TextField
            fullWidth
            color="secondary"
            variant="outlined"
            label="Nummer"
            className={classes.spacing}
          />
          <TextField
            fullWidth
            color="secondary"
            variant="outlined"
            label="E-mail"
            className={classes.spacing}
          />
          <TextField
            fullWidth
            multiline
            rows={6}
            color="secondary"
            variant="outlined"
            label="Skriv ditt meddelande här..."
            className={classes.spacing}
          />
          <Button variant="contained" color="secondary" onClick={() => console.log(name, number, email, message)}>
            SKICKA
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
export default ContactForm;
