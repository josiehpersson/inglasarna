import React, {useEffect, useState} from 'react';
import {AppBar, Toolbar, List, ListItem, Typography, makeStyles, Grid, Drawer, IconButton, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {FiX} from 'react-icons/fi';
import ResponsiveLogo from '../img/responsiveLogotype.png';
import Logo from '../img/logotype.png';
import { Autorenew, InsertChartOutlinedTwoTone } from '@material-ui/icons';

const useStyles = makeStyles({
  '*' : {
    fontFamily: 'Spinnaker'
  },
  navbar: {
    backgroundColor: 'white',
    color: '#003595',
  },
  list: {
    width: 250,
    backgroundColor: 'white',
    color: '#003595',
    paddingLeft: 10
  },
  navlinks: {
    paddingRight: 30,
    paddingLeft: 30,
    cursor: 'pointer',
    fontSize: 18,
    fontFamily: 'Spinnaker'
    
  },
  sideBarIcon: {
    padding: 0,
    color: '#003595',
    cursor: 'pointer',
  },
  nestedList: {
    fontSize: 12,
  },
  drawerBtn: {
    backgroundColor: '#003595',
    color: 'white',
    marginLeft: '20%',
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'Spinnaker'
  },
  navbarBtn: {
    backgroundColor: '#003595',
    color: 'white',
    marginRight: 30,
    marginLeft: 100,
    fontFamily: 'Spinnaker'
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
  }
});

const Navbar = () => {
  const [drawerActivate, setDrawerActivate] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const classes=useStyles();

  useEffect(() => {
    if(window.innerWidth <= 900){
      setDrawerActivate(true);
    }

    window.addEventListener('resize', () => {
      if(window.innerWidth <= 900) {
        setDrawerActivate(true);
      } else {
        setDrawerActivate(false);
      }
    });
  },[]);

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
              <ListItem key={1} button divider> Varför inglasning? </ListItem>
              <ListItem key={2} button divider>
                <List>
              <ListItem key={2.0} button>Produkter</ListItem>
                <ListItem key={2.1} className={classes.nestedList} button>Balkong</ListItem>
                <ListItem key={2.2} className={classes.nestedList} button>Terass</ListItem>
                <ListItem key={2.3} className={classes.nestedList} button>Skjutdörrar</ListItem>
                <ListItem key={2.4} className={classes.nestedList} button>Tillbehör</ListItem>
                <ListItem key={2.5} className={classes.nestedList} button>Garanti</ListItem>
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
            <Button className={classes.drawerBtn} variant="contained">Få gratis offert</Button>
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
          <Typography className={classes.navlinks}>Produkter</Typography>
          <Typography className={classes.navlinks}>Hur går det till?</Typography>
          <Typography className={classes.navlinks}>Kostnad</Typography>
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