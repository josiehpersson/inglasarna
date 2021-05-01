import React from 'react';
import { Typography, Box, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    flex: 1,
    marginRight: theme.spacing(4.5),
    marginLeft: theme.spacing(2),
  },
  cardMedia: {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  overlay: {
    height: 'inherit',
    width: 'inherit',
    background:
      'linear-gradient(270deg, rgba(255, 255, 255, 0.31) 0%, #FFFFFF 58.62%), url(.jpg)',
    display: 'flex',
    alignItems: 'center',
  },
  iconWrapper: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    margin: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function InfoCard({ img, text, rubrik, icon, color }) {
  const classes = useStyles();

  return (
    <>
      <CardMedia className={classes.cardMedia} image={img}>
        <Box className={classes.overlay}>
          <Box bgcolor={color} className={classes.iconWrapper}>
            <img src={icon} alt="hammer-icon"></img>
          </Box>
          <Box className={classes.content}>
            <Typography clavariant="subtitle1">{rubrik}</Typography>
            <Typography variant="body2">{text}</Typography>
          </Box>
        </Box>
      </CardMedia>
    </>
  );
}

export default InfoCard;
