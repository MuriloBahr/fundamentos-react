import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    const min = props.min
    const max = props.max

    const aleatorio = parseInt(Math.random() * (max - min)) + min 
    return( 
        <div>
            <h2>Valor Aleatorio</h2>
            <p>Valor minimo {min}</p>
            <p>Valor maximo {max}</p>
            <p>Valor Escolhido {aleatorio}</p>
        </div>
    )
}

    
    