import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {List, ListItem, ListItemText, Divider, IconButton, Drawer} from '@material-ui/core';
import {FiX} from 'react-icons/fi';
const useStyles = makeStyles({
    list: {
        width: 250,
    },
});

const menuList = ['Varför inglasning?', 'Produkter', 'Hur går det till?', 'Kostnad', 'Galleri', 'Kontakt'];
const productsList = ['Balkong', 'Terass', 'Skjutdörrar', 'Tillbehör', 'Garanti'];
const pricesList = ['Privatperson', 'BRF', 'Företag', 'Finansiering'];

export default function NavbarDrawer({isOpen, toggleDrawer}) {
    const classes = useStyles();
    const anchor = 'right';

    const fillMenu = () => {
        menuList.map((text) => {
            if(text === 'Produkter') (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                        <List>
                            {productsList.map((text) => (
                                <ListItem button key={text}>
                                    <ListItemText secondary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </ListItem>

            )
            else if(text === 'Kostnad') (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                    <List>
                        {pricesList.map((text) => (
                            <ListItem button key={text}>
                                <ListItemText secondary={text} />
                            </ListItem>
                        ))}
                    </List>
                </ListItem>
            )
            else (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
            )
        })
    }

    const list = () => {
        <div 
        className={classes.list} 
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
        >
            <div>
                <IconButton onClick={toggleDrawer} onKeyDown={toggleDrawer}>
                    <FiX />
                </IconButton>
            </div>
            <List>
            {fillMenu()}
            </List>
        </div>
    }

    return(
        <Drawer anchor={anchor} open={isOpen}>
            {list}
        </Drawer>
    )
}