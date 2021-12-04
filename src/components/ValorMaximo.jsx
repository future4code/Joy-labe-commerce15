import React from "react";
import styled from "styled-components";

const EstiloValorMaximo = styled.input`
  /* margin: 2rem; */
  padding: 1rem;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid;
  outline: none;
  text-align: center;
`;

export class ValorMaximo extends React.Component {
  
  
    onChangeValorMaximo = (event) => {
        this.props.onChangeValorMaximo(event.target.value)
    }

  render() {
    return (
      <EstiloValorMaximo
        placeholder="Valor Máximo"
        value={this.props.valorMaximo}
        onChange={this.onChangeValorMaximo}
        type="number"
      />
    );
  }
}
