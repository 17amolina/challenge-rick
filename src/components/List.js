import { Grid } from '@material-ui/core';
import React from 'react';
import CardInfo from './CardInfo';


function List( props ) {
    const { datos } = props

    return(
        <>
            <Grid container justify="center">
                { datos.map( (personaje, index) =>{
                return <CardInfo key={ index } name={ personaje.name} image={personaje.image}/>
            })}
            </Grid>
        </>
    );
}

export default List;