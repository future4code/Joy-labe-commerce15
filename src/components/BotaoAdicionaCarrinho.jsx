import React from "react";
import styled from "styled-components";
import ImagemCarrinho from '../images/add_shopping_cart_white.svg'

const BotaoCarrinho = styled.button`
    background-color: #83AEFB;
    border: none;
    padding: 0.5rem;
    border-radius: 100%;
    cursor: pointer;
`

export class BotaoAdicionaCarrinho extends React.Component {

    propsListaDeProdutos = this.props.listaDeProdutos

    adicionarCarrinho = () => {
        console.log("clicou no Adicionar Carrinho")
    }

    render(){
        console.log(this.propsListaDeProdutos)



        return(
            <BotaoCarrinho onClick={() => this.adicionarCarrinho(this.props.adicionarCarrinho)}><img src={ImagemCarrinho} /></BotaoCarrinho>
        )
    }
}