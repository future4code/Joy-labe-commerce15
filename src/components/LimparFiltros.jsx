import React from "react";
import styled from "styled-components";

const EstiloLimparFiltros = styled.button`
  margin-top: 3rem;
  border: none;
  background-color: #83AEFB;
  padding: 1rem 2rem;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #9fc1ff;
  }
  &:active {
    background-color: #bfd5fc;
  }
`

export class LimparFiltros extends React.Component {
  onClickLimparFiltros = () => {
    this.props.onClickLimparFiltros();
  };

  render() {
    return (
      <EstiloLimparFiltros onClick={this.onClickLimparFiltros}>
        Limpar Filtros
      </EstiloLimparFiltros>
    );
  }
}
