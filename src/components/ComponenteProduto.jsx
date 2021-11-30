import React from "react";
import styled from "styled-components";
import {BotaoAdicionaCarrinho} from './BotaoAdicionaCarrinho'


const EstiloComponenteProduto = styled.div`
    border: 1px solid;
`

export class ComponenteProduto extends React.Component {

    propsListaDeProdutos = this.props.listaDeProdutos


    render(){

        console.log(this.propsListaDeProdutos)

        return(
            <EstiloComponenteProduto>
                <img src={this.propsListaDeProdutos[0].imageUrl} />
                <p>{this.propsListaDeProdutos[0].name}</p>
                <p>R$ {this.propsListaDeProdutos[0].value}</p>
                
                <BotaoAdicionaCarrinho listaDeProdutos={this.propsListaDeProdutos} adicionarCarrinho={this.props.adicionarCarrinho}/>           

            </EstiloComponenteProduto>
        )
    }
}