import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import ContactForm from './ContactForm';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: "url('https://lumon.com/sites/default/files/styles/large_gallery/public/images/sv/lumon-balkonginglasning-701.jpg?itok=l8oWvTok')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: theme.spacing(2),
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