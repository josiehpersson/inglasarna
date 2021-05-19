import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import LumonLogo from '../img/lumonlogo.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  logo: {
    width: '70%',
  },
}));
const LumonBox = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} xs={10} className={classes.container}>
      <Grid item xs={8}>
        <Typography variant="h1">
          Vi arbetar bara med produkter från de bästa företagen på marknaden
        </Typography>
      </Grid>
      <Grid item xs={8}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac justo
        commodo, malesuada odio vitae, euismod ante. Mauris quis sem laoreet,
        lacinia neque eget, venenatis ligula. Maecenas pharetra tincidunt sapien
        vel mattis. Fusce in faucibus nunc. Integer et velit pulvinar, ultrices
        odio interdum, mattis tellus. Duis nisl orci, porta vel nisi sit amet,
        sollicitudin consequat est. Aenean fermentum id arcu in suscipit.
      </Grid>
      <Grid item xs={8}>
        <img src={LumonLogo} alt="Lumon logotyp" className={classes.logo} />
      </Grid>
    </Grid>
  );
};
export default LumonBox;
