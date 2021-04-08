import React, {useEffect, useState} from 'react';
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
    <div>
      {drawerActivate ? createDrawer() : destroyDrawer ()}
    </div>
  )
}

export default Navbar;