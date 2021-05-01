import React, { useState } from 'react';
import { Button, TextField, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column',
    textAlign: 'center',
  },
  formContainer: {
    height: 500,
    background:
      'url("https://lumon.com/sites/default/files/styles/large_gallery/public/images/sv/lumon-balkonginglasning-701.jpg?itok=l8oWvTok")',
    backgroundSize: '100%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0px 4.17391px 4.17391px rgba(0, 0, 0, 0.25)',
    [theme.breakpoints.between('xs', 'sm')]: {
        backgroundSize: '250%',
      },
  },
  form: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.7)',
    width: '40%',
    height: '100%',
    [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
      },
  },
  formfields: {
    display: 'flex',
    flexFlow: 'column',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  spacing: {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1)
  }
}));
const ContactForm = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    console.log(name, email, phone, message);
  };
  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <form className={classes.form} noValidate autoComplete="off">
          <Typography variant="h1" className={classes.spacing}>Kontakta oss!</Typography>
          <TextField
            label="Namn"
            type="text"
            variant="outlined"
            value={name}
            color="secondary"
            className={classes.spacing}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="E-mail"
            type="text"
            variant="outlined"
            value={email}
            color="secondary"
            className={classes.spacing}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Telefonnummer"
            type="text"
            variant="outlined"
            value={phone}
            color="secondary"
            className={classes.spacing}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            label="Meddelande"
            type="text"
            variant="outlined"
            multiline
            rows={6}
            value={message}
            color="secondary"
            className={classes.spacing}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleClick}
            className={classes.spacing}
          >
            Skicka
          </Button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
