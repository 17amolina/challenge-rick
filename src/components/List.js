import { Grid } from '@material-ui/core';
import React from 'react';
import AppNav from './AppNav';
import CardInfo from './CardInfo';


function List( props ) {
    console.log('soy props',props)
    const { datos } = props
    console.log('soy datos', datos)

    return(
        <>
            <AppNav />
            <Grid container justify="center">
                { datos.map( (personaje, index) =>{
                return <CardInfo key={ index } name={ personaje.name} image={personaje.image}/>                 
            })}
            </Grid>           
        </>
    );
}

export default List;