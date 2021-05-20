import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const NavbarContainer = () => {
  const [mobileScreen, setMobileScreen] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 900) {
      setMobileScreen(true);
    }
    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth <= 900) {
          setMobileScreen(true);
        } else {
          setMobileScreen(false);
        }
      });

      return () => {
        window.removeEventListener('resize', window.innerWidth);
      }
  }, []);
  return (
    <Grid container>{mobileScreen ? <MobileNavbar /> : <DesktopNavbar />}</Grid>
  );
};

export default NavbarContainer;
