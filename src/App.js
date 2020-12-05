import React, { useState } from 'react'
import Perfil from './componentes/perfil'
import './App.css';

function App() {
  const [ nombre, cambiarNombre ] = useState('Busqueda');

  function eventoCajaTexto(e){
    cambiarNombre(e.target.value)
  }
  return (
    <div className="App">
      <h1>Bienvenido { nombre } a App Rick and Morty</h1>
      <input name = "nombre" type = "text"  value = {nombre} onChange = {eventoCajaTexto} />
      <Perfil />
    </div>
  );
}

export default App;
