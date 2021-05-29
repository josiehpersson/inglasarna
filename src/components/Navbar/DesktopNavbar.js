import React, { useState } from "react";
import {
  Grid,
  Menu,
  Fade,
  Typography,
  makeStyles,
  MenuItem,
  List,
  ListItem,
} from "@material-ui/core";
import { AiFillCaretDown } from "react-icons/ai";
import Logo from "../../assets/media/logotyp.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    height: "10vh",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    zIndex: 1100,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  logo: {
    height: "9vh",
    marginLeft: 16,
  },
  linkContainer: {
    width: "100%",
    display: "flex",
    marginLeft: "auto",
    marginRight: 16,
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
  },
  caret: {
    paddingLeft: 8,
  },
  dropdownMenu: {
    padding: 8,
    marginTop: "5vh",
  },
}));
const DesktopNavbar = () => {
  const [productsAnchor, setProductsAnchor] = useState(null);
  const [pricesAnchor, setPricesAnchor] = useState(null);
  const [informationAnchor, setInformationAnchor] = useState(null);

  const classes = useStyles();

  const handleProductsClick = (e) => {
    setProductsAnchor(e.currentTarget);
  };
  const handlePricesClick = (e) => {
    setPricesAnchor(e.currentTarget);
  };
  const handleInformationClick = (e) => {
    setInformationAnchor(e.currentTarget);
  };

  const handleProductsClose = () => {
    setProductsAnchor(null);
  };
  const handlePricesClose = () => {
    setPricesAnchor(null);
  };

  const handleInformationClose = () => {
    setInformationAnchor(null);
  };

  return (
    <Grid container className={classes.container}>
      <Grid item md={2}>
        <img src={Logo} alt="inglasarnas logotyp" className={classes.logo} />
      </Grid>
      <Grid item md={10}>
        <List component="nav" className={classes.linkContainer}>
          <ListItem
            button
            aria-controls="infoMenu"
            aria-haspopup="true"
            onClick={handleInformationClick}
          >
            <Typography
              color="primary"
              variant="h4"
              className={classes.text}
            >
              Information <AiFillCaretDown className={classes.caret} />
            </Typography>
          </ListItem>
          <ListItem
            button
            aria-controls="productMenu"
            aria-haspopup="true"
            onClick={handleProductsClick}
          >
            <Typography
              color="primary"
              variant="h4"
              className={classes.text}
            >
              Produkter <AiFillCaretDown className={classes.caret} />
            </Typography>
          </ListItem>
          <ListItem
            button
            aria-controls="priceMenu"
            aria-haspopup="true"
            onClick={handlePricesClick}
          >
            <Typography
              color="primary"
              variant="h4"
              className={classes.text}
            >
              Kostnad <AiFillCaretDown className={classes.caret} />{" "}
            </Typography>
          </ListItem>
          <ListItem button>
            <Typography
              color="primary"
              variant="h4"
              className={classes.text}
            >
              Galleri
            </Typography>
          </ListItem>
          <ListItem button>
            <Typography
              color="primary"
              variant="h4"
              className={classes.text}
            >
              Kontakt
            </Typography>
          </ListItem>
          <ListItem button>
            <Typography
              color="primary"
              variant="h4"
              className={classes.text}
            >
              Gratis offert
            </Typography>
          </ListItem>
        </List>
      </Grid>
      {/* INFORMATION-MENY */}
      <Menu
        id="infoMenu"
        anchorEl={informationAnchor}
        open={Boolean(informationAnchor)}
        onClose={handleInformationClose}
        TransitionComponent={Fade}
        className={classes.dropdownMenu}
      >
        <MenuItem onClick={handleInformationClose}>Varför inglasning?</MenuItem>
        <MenuItem onClick={handleInformationClose}>Hur går det till?</MenuItem>
        <MenuItem onClick={handleInformationClose}>Vad kostar det?</MenuItem>
      </Menu>
      {/* PRODUCT-MENY */}
      <Menu
        id="productMenu"
        anchorEl={productsAnchor}
        open={Boolean(productsAnchor)}
        onClose={handleProductsClose}
        TransitionComponent={Fade}
        className={classes.dropdownMenu}
      >
        <MenuItem onClick={handleProductsClose}>Balkong</MenuItem>
        <MenuItem onClick={handleProductsClose}>Terass</MenuItem>
        <MenuItem onClick={handleProductsClose}>Skjutdörrar</MenuItem>
        <MenuItem onClick={handleProductsClose}>Tillbehör</MenuItem>
        <MenuItem onClick={handleProductsClose}>Garanti</MenuItem>
      </Menu>
      {/* PRICES-MENY */}
      <Menu
        id="priceMenu"
        anchorEl={pricesAnchor}
        open={Boolean(pricesAnchor)}
        onClose={handlePricesClose}
        TransitionComponent={Fade}
        className={classes.dropdownMenu}
      >
        <MenuItem onClick={handlePricesClose}>Privatperson</MenuItem>
        <MenuItem onClick={handlePricesClose}>BRF</MenuItem>
        <MenuItem onClick={handlePricesClose}>Företag</MenuItem>
        <MenuItem onClick={handlePricesClose}>Finansiering</MenuItem>
      </Menu>
    </Grid>
  );
};

export default DesktopNavbar;
