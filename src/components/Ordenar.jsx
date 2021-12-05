import React from "react";
import styled from "styled-components";

const EstiloOrdenar = styled.select`
  margin: 2rem;
  padding: 1rem;
  border-radius: 10px;
  border: none;
  outline: none;
  text-align: center;
`;

export class Ordenar extends React.Component {
  onChangeOrdem = (event) => {
    this.props.onChangeOrdem(event.target.value);
  };

  render() {
    return (
      <EstiloOrdenar onChange={this.onChangeOrdem}>
        <option value="Ordenação">Ordenação</option>
        <option value="crescentePreco">Preço Crescente</option>
        <option value="decrescentePreco">Preço Decrescente</option>
        <option value="crescenteAlfabetico">Alfebético A-Z</option>
        <option value="decrescenteAlfabetico">Alfebético Z-A</option>
      </EstiloOrdenar>
    );
  }
}
