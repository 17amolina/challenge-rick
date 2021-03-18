import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AppNav from '../components/AppNav';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        border: "solid 1px black"
    },
    divcenter:{
        display: 'flex',
        justifyContent: 'center',
        alignContent: "center",
        marginTop: "10%"
    }
}));

export default function Dev() {
    const classes = useStyles();

    return (
        <>
            <AppNav />
            <div className={classes.divcenter}>
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                <ListItem button>
                    <ListItemText primary="Nombre: Antonio Molina Romero" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="E-mail: ing.amolinar@gmail.com" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Móvil: 55 24944824" />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Web Developer/ front-end" />
                </ListItem>
            </List>
            </div>
        </>
    );
}
