import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import ContactForm from './ContactForm';
import contactImg from '../../assets/media/Kontaktform.jpg';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${contactImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        padding: theme.spacing(4),
    }
}));

const FormContainer = () => {
    const classes = useStyles();
return(
    <Grid container className={classes.container}>
        <Grid item xs={12} s={12} md={6} lg={6}>
            <ContactForm />
        </Grid>
    </Grid>
)
}

export default FormContainer;