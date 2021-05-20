import React, {useEffect, useState} from 'react';
import {Grid} from '@material-ui/core';
import Mobile from './Mobile';
import Desktop from './Desktop';


const Navbar = () => {
  const [drawerActivate, setDrawerActivate] = useState(false);

  useEffect(() => {
    if(window.innerWidth <= 1000){
      setDrawerActivate(true);
    }

    window.addEventListener('resize', () => {
      if(window.innerWidth <= 1000) {
        setDrawerActivate(true);
      } else {
        setDrawerActivate(false);
      }
    });
  },[]);


  const createDrawer = () => {
    return(
      <Mobile />
    );
  }

  const destroyDrawer = () => {
    return(
      <Desktop />
    );
  }

  return(
    <Grid container>
      {drawerActivate ? createDrawer() : destroyDrawer ()}
    </Grid>
  )
}

export default Navbar;