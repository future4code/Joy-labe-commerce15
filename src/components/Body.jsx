import React from "react";
import styled from "styled-components";
import { ComponenteProduto } from "./ComponenteProduto";
import { OrdenarPreco } from "./OrdenarPreco";
import { ValorMaximo } from "./ValorMaximo";
import { ValorMinimo } from "./ValorMinimo";

const BodyContainer = styled.div`
  background-color: white;
  display: flex;
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
          <OrdenarPreco
            onChangeOrdemPreco={this.props.onChangeOrdemPreco}
          />
          <ValorMinimo
            valorMinimo={this.props.valorMinimo}
            onChangeValorMinimo={this.props.onChangeValorMinimo}
          />
          <ValorMaximo 
            valorMaximo={this.props.valorMaximo}
            onChangeValorMaximo={this.props.onChangeValorMaximo}
            />
        </Filtros>
        <ComponenteProduto
          listaFiltrada={this.props.listaFiltrada}
          adicionarCarrinho={this.props.adicionarCarrinho}
        />
      </BodyContainer>
    );
  }
}
