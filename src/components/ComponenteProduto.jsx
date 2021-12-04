import React from "react";
import styled from "styled-components";
import {BotaoAdicionaCarrinho} from './BotaoAdicionaCarrinho'

const EstiloComponenteProduto = styled.div`
    border: 1px solid;
    width: 20rem;
    height: 25rem;
`

const EstiloLista = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    gap: 2rem;
    padding: 2rem;
`

const InfosProduto = styled.div`
    display: flex;
    align-items: center;
`
const ImagemProduto = styled.img`
background-flex;
width: auto;
height: 100%;
overflow: hidden;
max-height:300px;
max-width:400px;
width: 320px;
height: 320px;  
`
const Nome = styled.div`
text-align;
`
const Valor = styled.div`
text-align;
`




export class ComponenteProduto extends React.Component {



    render(){

        let listaDeComponentes = this.props.listaFiltrada.map((objeto) => {
            console.log("Lista de Componente exibidos",objeto)

            return (
                <EstiloComponenteProduto>
                    <ImagemProduto src={objeto.imageUrl} />
                    <InfosProduto>
                        <div>
                            <Nome>{objeto.name}</Nome>
                            <Valor>{objeto.value}</Valor>
                        </div>
                        <BotaoAdicionaCarrinho listaDeProdutos={objeto} adicionarCarrinho={this.props.adicionarCarrinho}/>           
                    </InfosProduto>
                </EstiloComponenteProduto>
            )
        })


        return(
            <EstiloLista>
                {listaDeComponentes}
            </EstiloLista>
        )
    }
}

    // {
    //     id: 1,
    //     name: "Foguete da Missão Apollo 11",
    //     value: 10000.0,
    //     imageUrl: "https://picsum.photos/200/200",
    // }