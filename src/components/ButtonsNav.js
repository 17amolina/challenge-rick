import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function ButtonsNav(){
    return(
        <div className="App">
            <Link to="/">Home</Link>
            <Link to="rick">Personajes</Link>
            <Link to="dev">Información</Link>
        </div>
    );
}

export default ButtonsNav;