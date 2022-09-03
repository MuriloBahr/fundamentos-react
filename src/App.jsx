import React from "react";
import './App.css'

import Input from "./components/formulario/Input";
import DiretaPai from "./components/comunicação/DiretaPai";
import UsarioInfo from "./components/condicional/UsarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/Componente'
import Fragmento from './components/basicos/fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/basicos/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAluno from "./components/repeticao/ListaAluno";
import DadosProdutos from "./components/repeticao/DadosProdutos";
import IndiretaPai from "./components/comunicação/IndiretaPai";
import Contador from "./components/contador/Contador";
import Mega from "./components/Mega/Mega";
// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{ 
    return(
        <div className="App">
            <h1>Fundamentos React</h1>
            

            <div className="Cards">
                <Card titulo='#13 - MegaSena' color='#F2A71B'>
                    <Mega></Mega>
                </Card>
                <Card titulo='#12 - Contador' color='#2F3840'>
                    <Contador numeroInicial={10}></Contador>
                </Card>

                <Card titulo='#11 - Componente Controlado (Input)' color='#592C34'>
                    <Input></Input>
                </Card>

                <Card titulo="#10 - Comunicação indireta" color='#034159'>
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="#09 - Comunicação direta" color='#0CF25D'>
                    <DiretaPai></DiretaPai>
                </Card>
                


                <Card titulo='#08 - Renderização Condicional' color='#0720F2'>
                    <ParOuImpar numero="2"></ParOuImpar>
                    <UsarioInfo usuario={{ nome: 'Fernando'}}></UsarioInfo>
                    <UsarioInfo usuario={{ }}></UsarioInfo>
                </Card>

                <Card titulo='#07 - Tabela De Produtos' color='#014040'>
                    <DadosProdutos></DadosProdutos>
                </Card>

                <Card titulo='#06 - Repetição' color='#F27405'>
                    <ListaAluno></ListaAluno>
                </Card>

                <Card titulo='#05 - Componente com filho' color='#03A678'>
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome='Pedro'/>
                        <FamiliaMembro nome='Ana'/>
                        <FamiliaMembro nome='Jorge'/>
                    </Familia>
                </Card>

                <Card titulo='#04 - Desafio Aleatorio' color='#36BFB1'>
                    <Aleatorio min={1} max={60}/>
                </Card>
                <Card titulo='#03 - Fragmento' color='#38184C'>
                    <Fragmento></Fragmento>
                </Card>
                <Card titulo='#02 - Com Parametro' color='#6967CE'>
                <ComParametro 
                    titulo="Situação do Aluno" 
                    aluno='Pedro' 
                    nota='7'/>
                </Card>
                <Card titulo="#01 - Primeiro" color='#FD636B'>
                <Primeiro></Primeiro>
                </Card>
            </div>

            


            
             
            
            
        </div>
    )
}