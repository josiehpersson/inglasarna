import React from 'react';
import {Box, Typography} from '@material-ui/core';
import Logo from '../img/logotype.png';

const Slogan = (props) => {
    return(
        <div className={props.rootClass}>
        <Box container className={props.glasClass}>
            <img src={Logo} alt="inglasarnas logotyp" className={props.logoClass}/>
            <Typography variant="body" color="secondary">Vi kan inglasning</Typography>
        </Box>
        </div>
    )
}
export default Slogan;