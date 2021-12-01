import React from "react";
import styled from "styled-components";
import {BotaoAdicionaCarrinho} from './BotaoAdicionaCarrinho'

const EstiloComponenteProduto = styled.div`
    border: 1px solid;
`

export class ComponenteProduto extends React.Component {

    propsListaDeProdutos = this.props.listaDeProdutos


    render(){

        let listaDeComponentes = this.propsListaDeProdutos.map((value) => {
            return (
                <EstiloComponenteProduto>
                    <img src={value.imageUrl} />
                    <p>{value.name}</p>
                    <p>{value.value}</p>
                    <BotaoAdicionaCarrinho listaDeProdutos={value} adicionarCarrinho={this.props.adicionarCarrinho}/>           
                </EstiloComponenteProduto>
            )
        })

        return(
            <div>{listaDeComponentes}</div>
        )
    }
}

    // {
    //     id: 1,
    //     name: "Foguete da Missão Apollo 11",
    //     value: 10000.0,
    //     imageUrl: "https://picsum.photos/200/200",
    // }