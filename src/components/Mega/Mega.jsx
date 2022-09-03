import React, { useState } from "react";
import './Mega.css'
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>{
    function gerarNumerosNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max - min)) + min
        return array.includes(aleatorio) ? gerarNumerosNaoContido(min, max, array) : aleatorio
    }

    function gerarNumeros(qtd){
        const numeros = Array(qtd).fill(0).reduce((nums) => {
            const novoNumero = gerarNumerosNaoContido(1, 61, nums)
            return [...nums, novoNumero]
        }, [])
        .sort((n1,n2) => n1 - n2)

        return numeros
    }
    const [qtd, setQtd] = useState(props.qtd || 6)
    const [numeros, setNumeros] = useState(Array(qtd).fill(0))
    
    return(
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label htmlFor="">Quantidade De Numeros: </label>
                <input min={6} max={20} type="number" value={qtd} onChange={e => setQtd(+e.target.value)}/>
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtd))}>Gerar Numeros</button>
        </div>
    )
}
