import React from "react";
import styled from "styled-components";
import ImagemCarrinho from "../images/add_shopping_cart_white.svg";

const BotaoCarrinho = styled.button`
  background-color: #83aefb;
  border: none;
  padding: 0.5rem;
  border-radius: 100%;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    background-color: #9fc1ff;
  }
  &:active {
    background-color: #bfd5fc;
  }
`;

export class BotaoAdicionaCarrinho extends React.Component {
  produtoAdicionadoAoCarrinho = this.props.listaDeProdutos;

  adicionarCarrinho = () => {
    this.props.adicionarCarrinho(this.produtoAdicionadoAoCarrinho);
  };

  render() {
    return (
      <BotaoCarrinho onClick={this.adicionarCarrinho}>
        <img src={ImagemCarrinho} />
      </BotaoCarrinho>
    );
  }
}
