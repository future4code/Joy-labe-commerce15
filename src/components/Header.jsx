import React from "react";
import styled from "styled-components";
import { BarraDeBusca } from "./BarraDeBusca";
import Foguete from "../images/rocket.png";
import { ComponenteBotaoCarrinho } from "../components/ComponenteBotaoCarrinho";

const HeaderContainer = styled.div`
  background-color: #83aefb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0rem 1rem;
`;
const EstiloFoguete = styled.img`
  margin: 10px 10px;
  max-width: 50px;
`;

export class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <EstiloFoguete src={Foguete} />
        <BarraDeBusca
          buscaProduto={this.props.buscaProduto}
          onChangeBuscaProduto={this.props.onChangeBuscaProduto}
        />
        <ComponenteBotaoCarrinho
          carrinhoProps={this.props.carrinhoProps}
          adicionaQuantidade={this.props.adicionaQuantidade}
          diminuiQuantidade={this.props.diminuiQuantidade}
        />
      </HeaderContainer>
    );
  }
}
