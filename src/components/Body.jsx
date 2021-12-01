import React from "react";
import styled from "styled-components";
import { ComponenteProduto } from "./ComponenteProduto";
import { Ordenar } from "./Ordenar";
import { ValorMaximo } from "./ValorMaximo";
import { ValorMinimo } from "./ValorMinimo";


const TesteBody = styled.div`
    background-color: #e699d0;
`


export class Body extends React.Component {
    render() {
        return(
            <TesteBody>
                teste Body
                <Ordenar />
                <ValorMinimo />
                <ValorMaximo />
                <ComponenteProduto listaDeProdutos={this.props.listaDeProdutos} adicionarCarrinho={this.props.adicionarCarrinho} />

            </TesteBody>
        )
    }
}