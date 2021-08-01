import React, { useState } from 'react';
import {
  Grid,
  Menu,
  Fade,
  Typography,
  makeStyles,
  MenuItem,
  List,
  ListItem,
} from '@material-ui/core';
import { withRouter } from 'react-router';
import { AiFillCaretDown } from 'react-icons/ai';
import Logo from '../../assets/media/logotyp.svg';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
    height: '10vh',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    zIndex: 1100,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  logo: {
    height: '9vh',
    marginLeft: 16,
  },
  linkContainer: {
    width: '100%',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 16,
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },
  caret: {
    paddingLeft: 8,
  },
  dropdownMenu: {
    padding: 8,
    marginTop: '5vh',
  },
}));
const DesktopNavbar = (props) => {
  const [productsAnchor, setProductsAnchor] = useState(null);

  const classes = useStyles();

  const handleProductsClick = (e) => {
    setProductsAnchor(e.currentTarget);
  };

  const handleProductsClose = (target) => {
    setProductsAnchor(null);
    props.history.push(target);
  };

  return (
    <Grid container className={classes.container}>
      <Grid item md={2} onClick={() => props.history.push('/')}>
        <img src={Logo} alt='inglasarnas logotyp' className={classes.logo} />
      </Grid>
      <Grid item md={10}>
        <List component='nav' className={classes.linkContainer}>
          <ListItem
            button
            onClick={() => props.history.push('/products')}
          >
            <Typography color='primary' variant='h4' className={classes.text}>
              Varför inglasning?
            </Typography>
          </ListItem>
          <ListItem             
            aria-controls='productsMenu'
            aria-haspopup='true'
            onClick={handleProductsClick}
            button>
            <Typography color='primary' variant='h4' className={classes.text} >
              Produkter <AiFillCaretDown className={classes.caret} />
            </Typography>
          </ListItem>
          <ListItem button onClick={() => props.history.push('/prices')}>
            <Typography color='primary' variant='h4' className={classes.text}>
              Kostnad
            </Typography>
          </ListItem>
          <ListItem button onClick={() => props.history.push('/gallery')}>
            <Typography color='primary' variant='h4' className={classes.text}>
              Galleri
            </Typography>
          </ListItem>
          <ListItem button onClick={() => props.history.push('/contact')}>
            <Typography color='primary' variant='h4' className={classes.text}>
              Kontakt
            </Typography>
          </ListItem>
          <ListItem button onClick={() => props.history.push('/contact')}>
            <Typography color='primary' variant='h4' className={classes.text}>
              Gratis offert
            </Typography>
          </ListItem>
        </List>
      </Grid>
      {/* INFORMATION-MENY */}
      <Menu
        id='productsMenu'
        anchorEl={productsAnchor}
        open={Boolean(productsAnchor)}
        onClose={handleProductsClose}
        TransitionComponent={Fade}
        className={classes.dropdownMenu}
      >
        <MenuItem onClick={() => handleProductsClose('/products')}>
          Balkonger
        </MenuItem>
        <MenuItem onClick={() => handleProductsClose('/products')}>
          Terasser
        </MenuItem>
        <MenuItem onClick={() => handleProductsClose('/products')}>
          Tillbehör
        </MenuItem>
      </Menu>
    </Grid>
  );
};

export default withRouter(DesktopNavbar);
