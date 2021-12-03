import React from "react";
import styled from "styled-components";
import { ComponenteProduto } from "./ComponenteProduto";
import { Ordenar } from "./Ordenar";
import { ValorMaximo } from "./ValorMaximo";
import { ValorMinimo } from "./ValorMinimo";


const BodyContainer = styled.div`
    background-color: white;
    display: flex;
`

const Filtros = styled.div`
    display: flex;
    flex-direction: column;
    width: 15rem;
    border-right: 1px solid;
`


export class Body extends React.Component {
    render() {
        return(
            <BodyContainer>
                <Filtros>
                    <Ordenar />
                    <ValorMinimo valorMinimo={this.props.valorMinimo} onChangeValorMinimo={this.props.onChangeValorMinimo}/>
                    <ValorMaximo />
                </Filtros>
                <ComponenteProduto listaFiltrada={this.props.listaFiltrada} adicionarCarrinho={this.props.adicionarCarrinho} />

            </BodyContainer>
        )
    }
}