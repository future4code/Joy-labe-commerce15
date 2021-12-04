import React from "react";
import styled from "styled-components";

const EstiloOrdenarPreco = styled.select`
    margin: 2rem;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    outline: none;
`


export class OrdenarPreco extends React.Component {

    onChangeOrdemPreco = (event) => {
        this.props.onChangeOrdemPreco(event.target.value)
    }

    render(){
        return(
            <EstiloOrdenarPreco onChange={this.onChangeOrdemPreco}>
                <option value="Ordenar por Preço">Ordenar por Preço</option>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
            </EstiloOrdenarPreco>
        )
    }
}