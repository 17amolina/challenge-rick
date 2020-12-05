import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Perfil(props){
    const [ personajes, obtenerPersonajes] = useState({});
    const [ status, cambiarStatus] = useState(false)
    useEffect( () => {
        axios.get('https://rickandmortyapi.com/api/character/')
        .then( resultado => {
            obtenerPersonajes(resultado.data.results);
            cambiarStatus(true);
            console.log(resultado.data.results)
        })
        .catch( error => {
            cambiarStatus(true);
        })
    }, [] )

    if(status){
        return(
            <ul>
                { personajes.map( (personaje, indice) =>
                    <li key = { indice }> 
                        { personaje.name }
                    </li>
                )}
            </ul>
        );
    }else{
        return(
            <h1>Esta cargando los valores de la apirest</h1>
        );
    }
    //return(
    //    <div style = {{background: "yellow"}}>
    //        componente dentro Perfil: { props.nombre }
    //    </div>
    //);
}
export default Perfil;