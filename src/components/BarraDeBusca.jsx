import React from "react";
import styled from "styled-components";
import './BarraDeBusca.css'
import IconeLupa from "../images/search_black_24dp.svg";


const EstiloBarraDeBusca = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid;
  background-color: transparent;
  width: 30rem;
  outline: none;
  text-align: center;
`;

export class BarraDeBusca extends React.Component {
  onChangeBuscaProduto = (event) => {
    this.props.onChangeBuscaProduto(event.target.value);
  };

  render() {
    return (
      <div>
        <EstiloBarraDeBusca
          value={this.props.buscaProduto}
          onChange={this.onChangeBuscaProduto}
        />
        <img src={IconeLupa} alt="ícone de lupa da barra de pesquisa" />
      </div>
    );
  }
}
