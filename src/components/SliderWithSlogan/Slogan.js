import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Logo from '../../img/logotyp.svg';

const Slogan = (props) => {
  return (
    <div className={props.rootClass}>
      <Box sm={6} md={8} lg={10} className={props.glasClass}>
        <img src={Logo} alt="inglasarnas logotyp" className={props.logoClass} />
        <Typography variant="h1" color="secondary">
          Vi kan inglasning
        </Typography>
      </Box>
    </div>
  );
};
export default Slogan;
