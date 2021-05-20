import React from 'react';
import {makeStyles, Grid, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        background: 'white',
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingtop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    imageContainer: {
        backgroundImage: props => `url(${props.image})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        height: 100,
        width: 100,
        borderRadius: 50,
    }
}))
const ContactBox = (props) => {
    const classes = useStyles(props);
    return(
        <Grid container spacing={3} className={classes.container}>
            <Grid item xs={4}>
                <div className={classes.imageContainer}/>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h6">{props.name}</Typography>
                <Typography variant="body1">{props.info}</Typography>
            </Grid>
        </Grid>
    )
}

export default ContactBox;