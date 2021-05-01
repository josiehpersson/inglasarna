import React from 'react';
import {makeStyles, Grid, Button, Typography} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    }
}))
const LinkBox = () => {
    const classes = useStyles();
    return(
        <Grid container spacing={2} xs={10} className={classes.container}>
            <Grid item xs={8}>
                <Typography variant="h1" color="secondary">
                    <ArrowForwardIosIcon/> Glasa in balkong
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h1" color="secondary">
                    <ArrowForwardIosIcon/> Glasa in altan
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h1" color="secondary">
                    <ArrowForwardIosIcon/> Glasa in tak
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h1" color="secondary">
                    <ArrowForwardIosIcon/> Ställ en fråga till oss
                </Typography>
            </Grid>
        </Grid>
    )
}
export default LinkBox;