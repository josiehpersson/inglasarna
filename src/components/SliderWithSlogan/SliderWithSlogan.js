import React, { useState, useEffect } from 'react';
import { makeStyles, Grid, GridList, GridListTile } from '@material-ui/core';
import Slogan from './Slogan';
import Slide from './Slide';
import { images as items } from '../../assets/assets';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100vw',
    padding: 0,
    position: 'relative',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignSelf: 'center',
    //lägger listan i sitt eget lager i chrome, kostar minne men hjälper med FPS
    transform: 'translateZ(0)',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },
  tile: {
    width: '100vw',
    overflow: 'hidden',
  },
  slogan: {
    zIndex: 2,
    position: 'absolute',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(20),
    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.between('sm', 'md')]: {
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.between('md', 'lg')]: {
      marginTop: theme.spacing(9),
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      marginTop: theme.spacing(18),
    },
  },
  sloganGlas: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 3,
    boxShadow: '0px 4.17391px 4.17391px rgba(0, 0, 0, 0.25)',
    padding: theme.spacing(4),
    width: '60vw',
    height: '60vh',
    backdropFilter: "blur(4px)",
    [theme.breakpoints.between('xs', 'sm')]: {
      height: '10vh',
      width: '50vw',
      padding: theme.spacing(1),
    },
    [theme.breakpoints.between('sm', 'md')]: {
      height: '30vh',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      height: '40vh',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: '50vw',
    },
  },
  sloganLogo: {
    height: '70%',
  },
}));

export default function SliderWithSlogan() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={12} rows={10}>
        <GridListTile className={classes.tile} cols={12} rows={10}>
          <Slide className={classes.tile} items={items} />
        </GridListTile>
      </GridList>
    </div>
  );
}
