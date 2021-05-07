import React, {useState} from 'react';
import {AppBar, Toolbar, List, ListItem, Typography, makeStyles, Grid, Drawer, IconButton, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {FiX} from 'react-icons/fi';
import ResponsiveLogo from '../../img/responsiveLogo.svg';

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
      paddingLeft: theme.spacing(4),
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
    responsiveLogo: {
      height: '5vh',
    },
  }));

  const Mobile = () => {
      const [drawer, setDrawer] = useState(false);
      const classes = useStyles();

      return(
<>
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
              <ListItem key={1} button divider className={classes.navlinks}> 
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
                <ListItem key={3} button divider className={classes.navlinks}>
                    <Typography variant="subtitle1" color="textPrimary">
                    Hur går det till?
                    </Typography>
                    </ListItem>
                <ListItem key={4} button divider>
                <List>
                <ListItem key={4.0} button>
                    <Typography variant="subtitle1" color="textPrimary">
                    Kostnad
                    </Typography>
                    </ListItem>
                <ListItem key={4.1} className={classes.nestedList} button>Privatperson</ListItem>
                <ListItem key={4.2} className={classes.nestedList} button>BRF</ListItem>
                <ListItem key={4.3} className={classes.nestedList} button>Företag</ListItem>
                <ListItem key={4.4} className={classes.nestedList} button>Finansiering</ListItem>
                  </List>
                  </ListItem>
                  <ListItem key={5} button divider className={classes.navlinks}>
                      <Typography variant="subtitle1" color="textPrimary">
                          Galleri
                          </Typography>
                      </ListItem>
                  <ListItem key={6} button divider className={classes.navlinks}>
                      <Typography variant="subtitle1" color="textPrimary">
                      Kontakt
                      </Typography>
                      </ListItem>
            </List>
            <Button color="secondary" className={classes.drawerBtn} variant="contained">Få gratis offert</Button>
          </div>
        </Drawer>
      </>

      )
  }
  export default Mobile;