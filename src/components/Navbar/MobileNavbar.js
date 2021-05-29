import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  Typography,
  makeStyles,
  Grid,
  Drawer,
  IconButton,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { FiX } from "react-icons/fi";
import Logo from "../../assets/media/responsiveLogo.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    height: "10vh",
    position: "fixed",
    zIndex: 1100,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  nestedListContainer: {
    display: "flex",
    flexFlow: "column",
    alignItems: "start",
  },
  logo: {
    height: "7vh",
    marginTop: theme.spacing(5),
  },
  menuIcon: {
    fontSize: "5vh",
  },
  btn: {
    marginLeft: "7%",
  },
}));
const MobileNavbar = () => {
  const [drawer, setDrawer] = useState(false);
  const classes = useStyles();
  return (
    <>
      <AppBar color="secondary" className={classes.container}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <img
              src={Logo}
              alt="inglasarnas logotyp"
              className={classes.logo}
            />
            <MenuIcon
              onClick={() => setDrawer(true)}
              className={classes.menuIcon}
            />
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer open={drawer} anchor="right" onClose={() => setDrawer(false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={() => setDrawer(false)}
          onKeyDown={() => setDrawer(false)}
        >
          <IconButton>
            <FiX />
          </IconButton>
          <List>
            <ListItem button divider>
              <Typography variant="h4" color="primary">
                Varför inglasning?
              </Typography>
            </ListItem>
            <ListItem button divider>
              <Typography variant="h4" color="primary">
                Hur går det till?
              </Typography>
            </ListItem>
            <ListItem divider className={classes.nestedListContainer}>
              <Typography variant="h4" color="primary">
                Produkter
              </Typography>
              <List>
                <ListItem button>
                  <Typography variant="body§" color="textPrimary">
                    Balkong
                  </Typography>
                </ListItem>
                <ListItem button>
                  <Typography variant="body1" color="textPrimary">
                    Terass
                  </Typography>
                </ListItem>
                <ListItem button>
                  <Typography variant="body1" color="textPrimary">
                    Skjutdörrar
                  </Typography>
                </ListItem>
                <ListItem button>
                  <Typography variant="body1" color="textPrimary">
                    Tillbehör
                  </Typography>
                </ListItem>
                <ListItem button>
                  <Typography variant="body1" color="textPrimary">
                    Garanti
                  </Typography>
                </ListItem>
              </List>
            </ListItem>
            <ListItem divider className={classes.nestedListContainer}>
              <Typography variant="h4" color="primary">
                Kostnad
              </Typography>
              <List>
                <ListItem button>
                  <Typography variant="body1" color="textPrimary">
                    Privatperson
                  </Typography>
                </ListItem>
                <ListItem button>
                  <Typography variant="body1" color="textPrimary">
                    BRF
                  </Typography>
                </ListItem>
                <ListItem button>
                  <Typography variant="body1" color="textPrimary">
                    Företag
                  </Typography>
                </ListItem>
                <ListItem button>
                  <Typography variant="body1" color="textPrimary">
                    Finansiering
                  </Typography>
                </ListItem>
              </List>
            </ListItem>
            <ListItem button divider>
              <Typography variant="h4" color="primary">
                Galleri
              </Typography>
            </ListItem>
            <ListItem button divider>
              <Typography variant="h4" color="primary">
                Kontakta oss
              </Typography>
            </ListItem>
          </List>
          <Button color="primary" variant="contained" className={classes.btn}>
            Gratis offert
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
