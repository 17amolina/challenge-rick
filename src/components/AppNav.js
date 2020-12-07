import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import ButtonsNav from './ButtonsNav';

function AppNav(props){
    return(
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    App Rick and Morty
                </Typography>
                <ButtonsNav />
            </Toolbar>
        </AppBar>
    );
}

export default AppNav;
