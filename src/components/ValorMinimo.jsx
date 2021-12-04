import React from "react";
import styled from "styled-components";

const EstiloValorMinimo = styled.input`
  margin: 2rem;
  padding: 1rem;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid;
  outline: none;
  text-align: center;
`;

export class ValorMinimo extends React.Component {
  onChangeValorMinimo = (event) => {
    this.props.onChangeValorMinimo(event.target.value);
  };

  render() {
    return (
      <div>
        <EstiloValorMinimo
          placeholder="Valor mínimo"
          type="number"
          onChange={this.onChangeValorMinimo}
          value={this.props.valorMinimo}
        />
      </div>
    );
  }
}
