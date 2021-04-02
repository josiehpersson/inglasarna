import React from 'react';
import {Box, makeStyles} from '@material-ui/core';
import Logo from '../img/logotype.png';

const useStyles = makeStyles({
root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
},
glas: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 3,
    boxShadow: '0px 4.17391px 4.17391px rgba(0, 0, 0, 0.25)',
    padding: '2em'
},
text:{
    color: '#003595',
    fontFamily: 'Spinnaker',
    fontSize: 18
}
})
const Slogan = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <Box m={4} className={classes.glas}>
            <img src={Logo} alt="inglasarnas logotyp"/>
            <p className={classes.text}>Vi kan inglasning</p>
        </Box>
        </div>
    )
}
export default Slogan;