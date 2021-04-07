import React, {useState, useEffect} from 'react';
import {useSpring, animated, useTransition, config} from 'react-spring';
import {makeStyles, GridList, GridListTile} from '@material-ui/core';
import Slogan from './Slogan';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100vw',
        padding: 0,
        position: 'relative'
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignSelf: 'center',
        //lägger listan i sitt eget lager i chrome, kostar minne men hjälper med FPS
        transform: 'translateZ(0)',
        height: 450,
        position: 'relative'
    },
    tile: {
        height: '100vh'
    },
    slogan: {
        zIndex: 2,
        position: 'absolute',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
        padding: '2em',
        [theme.breakpoints.down("sm")]: {
            height: '40vh',
        }
    },
    sloganText:{
        color: '#003595',
        fontFamily: 'Spinnaker',
        fontSize: 18,
        [theme.breakpoints.down("sm")]: {
            fontSize: 12
        }
    },
    sloganLogo: {
        height: '70%'
    }
}))

export default function ThreePhotoGrid() {
    const classes = useStyles();

 return(
 <div className={classes.root}>
     <Slogan  
     rootClass={classes.slogan}
     glasClass={classes.sloganGlas}
     logoClass={classes.sloganLogo}
     textClass={classes.sloganText}
     />
     <GridList className={classes.gridList} cols={3} rows={10}>
         <GridListTile className={classes.tile} rows={10} cols={1}>
             <img src="https://images.unsplash.com/photo-1587502536263-5dda37cd33f0?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="nature" />
         </GridListTile>
         <GridListTile className={classes.tile} rows={10} cols={1}>
         <img src="https://images.unsplash.com/photo-1587502536263-5dda37cd33f0?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="nature" />
         </GridListTile>
         <GridListTile className={classes.tile} rows={10} cols={1}>
         <img src="https://images.unsplash.com/photo-1587502536263-5dda37cd33f0?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="nature" />
         </GridListTile>
     </GridList>
    </div>
 )
}