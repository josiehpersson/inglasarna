import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import BoxWithSideImg from '../components/BoxWithSideImg';
import FinanceBox from '../components/FinanceBox';
import {fadedImgBoxes} from '../assets/assets';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'cemter',
    },
    spacing: {
        padding: '1vh',
    }
}))

const Prices = (props) => {
    const classes = useStyles();
    return(
        <Grid container spacing={10} className={classes.container}> 
        <div className={classes.spacing} />
            {fadedImgBoxes.map((box) => {
                return(
                    <Grid item xs={11}>
                    <BoxWithSideImg 
                    img={box.image}
                    imgAlt={box.title}
                    title={box.title}
                    text={box.text}
                    />
                    </Grid>
                )
            })}
            <Grid item xs={11}>
                <FinanceBox />
            </Grid>
        </Grid>
    )

}

export default Prices;