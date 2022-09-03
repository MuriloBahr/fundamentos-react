import React from "react";
import produtos from "../../data/produtos";
import '../basicos/layout/Table.css'
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>{
    function getLinhas(){
        return(produtos.map((produto, i) =>{
            return(
                <tr key={produto.id} className={i % 2 == 0 ? 'PAR' : ''}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{"R$ "}{produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        }) )

    }
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preços</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
 

}