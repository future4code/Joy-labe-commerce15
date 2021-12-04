import React from "react";
import styled from "styled-components";
import ImagemCarrinho from '../images/add_shopping_cart_white.svg'

const BotaoCarrinho = styled.button`
    background-color: #83AEFB;
    border: none;
    padding: 0.5rem;
    border-radius: 100%;
    cursor: pointer;
    float: right;
    margin: 50px 10px 10px 10px;
`

export class BotaoAdicionaCarrinho extends React.Component {

    produtoAdicionadoAoCarrinho = this.props.listaDeProdutos

    adicionarCarrinho = () => {
        this.props.adicionarCarrinho(this.produtoAdicionadoAoCarrinho)

    }

    render(){


        return(
            <BotaoCarrinho onClick={this.adicionarCarrinho}><img src={ImagemCarrinho} /></BotaoCarrinho>
        )
    }
}