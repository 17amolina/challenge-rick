import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppNav from '../components/AppNav'
import List from '../components/List';

const ListContainer = () => {
    const [ info, setInfo] = useState([]);
    const [ status, setStatus] = useState(false)

    const guardarInfo = e => {
        setInfo(e)
    }
    useEffect( () => {
        const url = 'https://rickandmortyapi.com/api/character/'//'https://restcountries.eu/rest/v2/all' , resultado.data
        axios.get(url)
        .then( resultado => {
            // console.log(resultado) resultado, objeto que devuelve la respuesta completa
            const res = resultado.data.results //accedo a la informacion que me interesa
            guardarInfo(res)//todo un puto día y todo por unos corchetes, NO LLEVA PUTOS CORCHETES, solo la variable y YA
            setStatus(true)
        })
        .catch( error => {setStatus(true)})
    }, [] )
    if(status){
        return(
            // Prueba para mostrar datos como elementos en html
            // <ul>
            //     { info.map( (personaje, index) => <li key = index }>{ personaje.name }</li>
            //     ) }
            // </ul>
            <>
                <AppNav />
                <List datos= {info} />
            </>
        );
    }else{
        return(
                        <h1>cargando...</h1>
        );
    }
}

export default ListContainer;
