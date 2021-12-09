import React from "react";
import styled from "styled-components";
import { ComponenteProduto } from "./ComponenteProduto";
import { LimparFiltros } from "./LimparFiltros";
import { Ordenar } from "./Ordenar";
import { ValorMaximo } from "./ValorMaximo";
import { ValorMinimo } from "./ValorMinimo";


const BodyContainer = styled.div`
  background-color: white;
  display: flex;
  width: 100vh;
`;

const Filtros = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  border-right: 1px solid;
  align-items: center;
`;

export class Body extends React.Component {
  render() {
    return (
      <BodyContainer>
        <Filtros>
          <Ordenar onChangeOrdem={this.props.onChangeOrdem} />
          <ValorMinimo
            valorMinimo={this.props.valorMinimo}
            onChangeValorMinimo={this.props.onChangeValorMinimo}
          />
          <ValorMaximo
            valorMaximo={this.props.valorMaximo}
            onChangeValorMaximo={this.props.onChangeValorMaximo}
          />
          <LimparFiltros onClickLimparFiltros={this.props.onClickLimparFiltros} />
        </Filtros>
        <ComponenteProduto
          listaFiltrada={this.props.listaFiltrada}
          adicionarCarrinho={this.props.adicionarCarrinho}
        />
      </BodyContainer>
    );
  }
}
