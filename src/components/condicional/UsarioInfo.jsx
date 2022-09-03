import React from "react"
import If, { Else } from './If'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    return(
        <div>
            <If test={props.usuario && props.usuario.nome}>
                Seja Bem vindo <strong>{ props.usuario.nome }</strong>!
                <Else>
                    Seja bem vindo <strong>Amigao</strong>!
                </Else>
            </If>
           
        </div>
    )
}