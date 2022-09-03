/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Card.css'



export default (props) =>{

    const style = {
        backgroundColor: props.color || '#F00', borderColor: props.color || "#F00"
    }
    return <div className='Card' style={style}>
        <div className="Tittle">{props.titulo}</div>
        <div className="Content">
            {props.children}
        </div>
    </div>
}