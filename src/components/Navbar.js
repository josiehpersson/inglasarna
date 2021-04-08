import React, {useEffect, useState} from 'react';
import {AppBar, Menu, Toolbar, List, Fade, ListItem, Typography, makeStyles, Grid, Drawer, IconButton, Button, MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {FiX} from 'react-icons/fi';
import {AiFillCaretDown} from 'react-icons/ai';
import ResponsiveLogo from '../img/responsiveLogotype.png';
import Logo from '../img/logotype.png';

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: theme.primary,
    color: theme.secondary,
  },
  list: {
    width: 250,
    backgroundColor: theme.primary,
    color: theme.secondary,
    paddingLeft: theme.spacing(1)
  },
  navlinks: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    cursor: 'pointer',
  },
  sideBarIcon: {
    padding: 0,
    color: theme.secondary,
    cursor: 'pointer',
  },
  drawerBtn: {
    backgroundColor: theme.secondary,
    color: theme.primary,
    marginLeft: '20%',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  navbarBtn: {
    backgroundColor: '#003595',
    color: 'white',
    marginRight: 5,
    marginLeft: 'auto',
    fontFamily: 'Spinnaker',
    fontSize: 18,
    [theme.breakpoints.down('lg')]: {
      fontSize: 12,
    }
  },
  responsiveLogo: {
    height: '5vh',
  },
  logo: {
    height: '10vh',
    margin: 10
  },
  linkContainer : {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 'auto'
  },
  caret: {
    paddingLeft: 10
  },
}));

const Navbar = () => {
  const [drawerActivate, setDrawerActivate] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [productsAnchor, setProductsAnchor] = useState(null);
  const [pricesAnchor, setPricesAnchor] = useState(null)
  const classes=useStyles();

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

  const handleProductsClick = (e,) => {
    setProductsAnchor(e.currentTarget);
  }
  const handlePricesClick = (e,) => {
    setPricesAnchor(e.currentTarget);
  }
  const handleProductsClose = () => {
    setProductsAnchor(null);
  }

  const handlePricesClose = () => {
    setPricesAnchor(null);
  }

  const createDrawer = () => {
    return(
      <div>
        <AppBar className={classes.navbar}>
          <Toolbar>
            <Grid container direction='row-reverse' justify="space-between" alignItems="center">
              <MenuIcon 
              className={classes.sideBarIcon}
              onClick={() => setDrawer(true)}
              />
              <img src={ResponsiveLogo} className={classes.responsiveLogo} alt="inglasarnas logotyp" />
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
        open={drawer}
        anchor='right'
        onClose={() => setDrawer(false)}
        onOpen={() => setDrawer(true)}
        >
          <div
          tabIndex={0}
          role='button'
          onClick={() => setDrawer(false)}
          onKeyDown={() => setDrawer(false)}
          >
            <IconButton><FiX /></IconButton>
            <List className={classes.list}>
              <ListItem key={1} button divider> 
              <Typography variant="subtitle1" color="textPrimary">
                Varför inglasning? 
                </Typography>
                </ListItem>
              <ListItem key={2} button divider>
                <List>
              <ListItem key={2.0} button>
                <Typography variant="subtitle1" color="textPrimary">
                Produkter
                </Typography>
                </ListItem>
                <Typography variant="body" color="textPrimary">
                <ListItem key={2.1} className={classes.nestedList} button>Balkong</ListItem>
                <ListItem key={2.2} className={classes.nestedList} button>Terass</ListItem>
                <ListItem key={2.3} className={classes.nestedList} button>Skjutdörrar</ListItem>
                <ListItem key={2.4} className={classes.nestedList} button>Tillbehör</ListItem>
                <ListItem key={2.5} className={classes.nestedList} button>Garanti</ListItem>
                </Typography>
                </List>
              </ListItem>
                <ListItem key={3} button divider>Hur går det till?</ListItem>
                <ListItem key={4} button divider>
                <List>
                <ListItem key={4.0} button>Kostnad</ListItem>
                <ListItem key={4.1} className={classes.nestedList} button>Privatperson</ListItem>
                <ListItem key={4.2} className={classes.nestedList} button>BRF</ListItem>
                <ListItem key={4.3} className={classes.nestedList} button>Företag</ListItem>
                <ListItem key={4.4} className={classes.nestedList} button>Finansiering</ListItem>
                  </List>
                  </ListItem>
                  <ListItem key={5} button divider>Galleri</ListItem>
                  <ListItem key={6} button divider>Kontakt</ListItem>
            </List>
            <Button color="secondary" className={classes.drawerBtn} variant="contained">Få gratis offert</Button>
          </div>
        </Drawer>
      </div>
    );
  }

  const destroyDrawer = () => {
    return(
      <AppBar className={classes.navbar}>
        <Toolbar>
          <img src={Logo} className={classes.logo} alt="inglasarnas logotyp" />
          <div className={classes.linkContainer}>
          <Typography className={classes.navlinks}>Varför inglasning?</Typography>
          <Typography
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
          <Typography className={classes.navlinks}>Hur går det till?</Typography>
          <Typography
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
          <Typography className={classes.navlinks}>Galleri</Typography>
          <Typography className={classes.navlinks}>Kontakt</Typography>
          <Button color="primary" variant="contained" className={classes.navbarBtn}>Få gratis offert</Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }

  return(
    <div>
      {drawerActivate ? createDrawer() : destroyDrawer ()}
    </div>
  )
}

export default Navbar;