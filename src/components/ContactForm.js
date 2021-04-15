import React, {useState} from 'react';
import {Button, TextField, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexFlow: 'column',
        textAlign: 'center'

    },
    formContainer : {
        height: 500,
        background: 'url("https://lumon.com/sites/default/files/styles/large_gallery/public/images/sv/lumon-balkonginglasning-701.jpg?itok=l8oWvTok")',
        backgroundSize: '100%',
        backgroundPosition: 'center center',
        boxShadow: '0px 4.17391px 4.17391px rgba(0, 0, 0, 0.25)',
    },
    form : {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.7)',
        width: '50%',
        height: '100%',
    },
    formfields : {
        display: 'flex',
        flexFlow: 'column',
        padding: theme.spacing(4)
    }
}))
const ContactForm = () => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    
    const handleClick = () => {
        console.log(name, email, phone, message);
    }
    return(
        <div className={classes.container}>
        <Typography variant="h1">Kontakta oss!</Typography>
        <div className={classes.formContainer}>
            <form className={classes.form} noValidate autoComplete="off">
                <TextField label="Namn" type="text" variant="outlined" value={name} color="secondary" onChange={(e)=> setName(e.target.value)}/>
                <TextField label="E-mail" type="text" variant="outlined" value={email} color="secondary" onChange={(e)=> setEmail(e.target.value)}/>
                <TextField label="Telefonnummer" type="text" variant="outlined" value={phone} color="secondary" onChange={(e)=> setPhone(e.target.value)}/>
                <TextField label="Meddelande" type="text" variant="outlined" multiline rows={6} value={message} color="secondary" onChange={(e)=> setMessage(e.target.value)}/>
            <Button type="button" variant="contained" color="secondary" onClick={handleClick}>Skicka</Button>
            </form>
        </div>
        </div>
    )
}
export default ContactForm;