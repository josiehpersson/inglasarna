import React from 'react';
import {Box} from '@material-ui/core';
import Logo from '../img/logotype.png';

const Slogan = (props) => {
    return(
        <div className={props.rootClass}>
        <Box m={4} className={props.glasClass}>
            <img src={Logo} alt="inglasarnas logotyp" className={props.logoClass}/>
            <p className={props.textClass}>Vi kan inglasning</p>
        </Box>
        </div>
    )
}
export default Slogan;