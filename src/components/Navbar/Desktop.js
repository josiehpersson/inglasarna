import React, { useState } from 'react';
import {
  AppBar,
  Menu,
  Toolbar,
  Fade,
  Typography,
  makeStyles,
  Button,
  MenuItem,
} from '@material-ui/core';
import { AiFillCaretDown } from 'react-icons/ai';
import Logo from '../../img/logotyp.svg';

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: '100vw',
    height: '10vh',
    boxSizing: 'border-box',
    '.MuiAppBar-root' : {
      width: '100vw'
    },
  },
  navlinks: {
    cursor: 'pointer',
    display: 'inline-flex',
    flexFlow: 'row no-wrap',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
    },
  },
  navbarBtn: {
    backgroundColor: theme.secondary,
    color: theme.primary,
    marginLeft: 'auto',
    [theme.breakpoints.down('lg')]: {
      marginRight: theme.spacing(0),
    },
  },
  logo: {
    height: '10vh',
    [theme.breakpoints.down('lg')]: {
      height: '6vh',
    },
  },
  linkContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  caret: {
    paddingLeft: theme.spacing(1),
  },
}));

const Desktop = () => {
  const classes = useStyles();
  const [productsAnchor, setProductsAnchor] = useState(null);
  const [pricesAnchor, setPricesAnchor] = useState(null);

  const handleProductsClick = (e) => {
    setProductsAnchor(e.currentTarget);
  };
  const handlePricesClick = (e) => {
    setPricesAnchor(e.currentTarget);
  };
  const handleProductsClose = () => {
    setProductsAnchor(null);
  };

  const handlePricesClose = () => {
    setPricesAnchor(null);
  };

  return (
    <AppBar className={classes.navbar}>
      <Toolbar>
        <img src={Logo} className={classes.logo} alt="inglasarnas logotyp" />
        <div className={classes.linkContainer}>
          <Typography variant="subtitle1" className={classes.navlinks}>
            Varför inglasning?
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.navlinks}
            aria-controls="menu1"
            aria-haspopup="true"
            onClick={handleProductsClick}
          >
            Produkter
            <AiFillCaretDown className={classes.caret} />
          </Typography>
          <Menu
            id="menu1"
            anchorEl={productsAnchor}
            keepMounted
            open={Boolean(productsAnchor)}
            onClose={handleProductsClose}
            TransitionComponent={Fade}
            className={classes.miniMenu}
          >
            <MenuItem onClick={handleProductsClose}>Balkong</MenuItem>
            <MenuItem onClick={handleProductsClose}>Terass</MenuItem>
            <MenuItem onClick={handleProductsClose}>Skjutdörrar</MenuItem>
            <MenuItem onClick={handleProductsClose}>Tillbehör</MenuItem>
            <MenuItem onClick={handleProductsClose}>Garanti</MenuItem>
          </Menu>
          <Typography variant="subtitle1" className={classes.navlinks}>
            Hur går det till?
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.navlinks}
            aria-controls="menu2"
            aria-haspopup="true"
            onClick={handlePricesClick}
          >
            Kostnad
            <AiFillCaretDown className={classes.caret} />
          </Typography>
          <Menu
            id="menu2"
            anchorEl={pricesAnchor}
            keepMounted
            open={Boolean(pricesAnchor)}
            onClose={handlePricesClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handlePricesClose}>Privatperson</MenuItem>
            <MenuItem onClick={handlePricesClose}>BRF</MenuItem>
            <MenuItem onClick={handlePricesClose}>Företag</MenuItem>
            <MenuItem onClick={handlePricesClose}>Finansiering</MenuItem>
          </Menu>
          <Typography variant="subtitle1" className={classes.navlinks}>
            Galleri
          </Typography>
          <Typography variant="subtitle1" className={classes.navlinks}>
            Kontakt
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            className={classes.navbarBtn}
          >
            <Typography variant="subtitle1">Gratis offert</Typography>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Desktop;
