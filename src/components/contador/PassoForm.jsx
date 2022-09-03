import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>{
    return(
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input className="passoInput" type="text" value={props.passo} onChange={e => props.setPasso(+e.target.value)}/>
        </div>
    )
}