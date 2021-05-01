import React from 'react';
import {makeStyles, Grid, Typography} from '@material-ui/core';
import BackgroundImage from '../img/lumon-balkonginglasning-681.jpg';

const useStyles = makeStyles((theme) => ({
    container: {
        background: `linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 61.47%), url(${BackgroundImage})`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: theme.spacing(5)
    }
}))

const BoxFadedImg = (props) => {
    const classes = useStyles();
    return(
        <Grid container spacing={2} xs={10} className={classes.container}>
            <Grid item xs={6}>
                <Typography variant="h1">Title</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac justo
        commodo, malesuada odio vitae, euismod ante. Mauris quis sem laoreet,
        lacinia neque eget, venenatis ligula. Maecenas pharetra tincidunt sapien
        vel mattis. Fusce in faucibus nunc. Integer et velit pulvinar, ultrices
        odio interdum, mattis tellus. Duis nisl orci, porta vel nisi sit amet,
        sollicitudin consequat est. Aenean fermentum id arcu in suscipit.
                </Typography>
            </Grid>
        </Grid>
    )
}
export default BoxFadedImg;