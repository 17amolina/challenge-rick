import React, { useEffect } from 'react';

function Perfil(props){
    useEffect( () => {
        document.title = props.nombre;
    }, [ props.nombre]
    )

    return(
        <div style = {{background: "yellow"}}>
            componente dentro Perfil: { props.nombre }
        </div>
    );
}

export default Perfil;