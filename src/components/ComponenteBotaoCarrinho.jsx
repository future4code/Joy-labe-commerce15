import React from "react";
import styled from "styled-components";
import iconeCarrinho from "../images/shopping_cart_black_24dp.svg";

const BotaoCarrinhoContainer = styled.button`
  background-color: white;
  border: none;
  border-radius: 50%;
  padding: 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: #c9dcff;
  }

  &:active {
    background-color: #a6c5ff;
  }
`;

const EstiloIconeCarrinho = styled.img`
  height: 25px;
`;

const EsconderCarrinho = styled.div`
  display: none;
`;

const EstiloCarrinhoCompleto = styled.div`
  position: absolute;
  background-color: #c9dcff;
  width: 30rem;
  right: 1rem;
  top: 5rem;
  box-shadow: 0rem 0rem 3rem #545353;
  border-radius: 1rem;
`;

const ProdutoCarrinho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
`;

const ImagemEDescricao = styled.div`
  display: flex;
`;

const NomeEPreco = styled.div`
  margin-left: 1rem;
`;

const ImagemProdutoCarrinho = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const QuantidadeProduto = styled.div`
  display: flex;
  align-items: center;
`;

const BotaoQuantidade = styled.button`
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0rem 1rem;
  cursor: pointer;
`;

const CarrinhoVazio = styled.div`
  text-align: center;
  padding: 4rem 0rem;
`;

const CalculadoraValor = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-items: flex-end;
  padding: 3rem;
`;

const ItemsCalculadoraValor = styled.p`
  font-weight: bold;
  padding-left: 2rem;
`;

const EstiloSinalTamanhoCarrinho = styled.div`
  position: absolute;
  right: 0.4rem;
  top: 0.3rem;
  background-color: #ff6b6b;
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export class ComponenteBotaoCarrinho extends React.Component {
  state = {
    mostrarCarrinho: false,
  };

  clicarCarrinho = () => {
    if (this.props.carrinhoProps) {
      this.setState({
        mostrarCarrinho: !this.state.mostrarCarrinho,
      });      
    }


  };

  adicionaQuantidade = (index) => {
    this.props.adicionaQuantidade(index);
  };

  diminuiQuantidade = (index) => {
    this.props.diminuiQuantidade(index);
  };

  calculaValorTotal = () => {
    let totalValorCarrinho = 0;

    if (this.props.carrinhoProps){
      const ArrayCarrinhoSoma = this.props.carrinhoProps.map((objeto) => {
        totalValorCarrinho =
          totalValorCarrinho + objeto.value * objeto.quantidade;
        return objeto;
      });
    }
    

    // for (const itemCarrinho of this.props.carrinhoProps) {
    //   totalValorCarrinho += itemCarrinho.value * itemCarrinho.quantidade;
    // }

    return totalValorCarrinho;
  };

  render() {
    let carrinhoDeCompras = this.props.carrinhoProps;

    let totalValorCarrinho = this.calculaValorTotal();

    let componenteTotalValorCarrinho = (
      <CalculadoraValor>
        <ItemsCalculadoraValor>Total</ItemsCalculadoraValor>
        <ItemsCalculadoraValor>
          R$ {totalValorCarrinho.toFixed(2)}
        </ItemsCalculadoraValor>
      </CalculadoraValor>
    );

    if (this.state.mostrarCarrinho) {
      if (carrinhoDeCompras.length) {
        carrinhoDeCompras = carrinhoDeCompras.map((objeto, index) => {
          return (
            <ProdutoCarrinho>
              <ImagemEDescricao>
                <ImagemProdutoCarrinho src={objeto.imageUrl} />
                <NomeEPreco>
                  <p>{objeto.name}</p>
                  <p>{objeto.value}</p>
                </NomeEPreco>
              </ImagemEDescricao>
              <QuantidadeProduto>
                <BotaoQuantidade onClick={() => this.diminuiQuantidade(index)}>
                  -
                </BotaoQuantidade>
                <p>{objeto.quantidade}</p>
                <BotaoQuantidade onClick={() => this.adicionaQuantidade(index)}>
                  +
                </BotaoQuantidade>
              </QuantidadeProduto>
            </ProdutoCarrinho>
          );
        });
      } else {
        carrinhoDeCompras = (
          <CarrinhoVazio>O Carrinho está vazio :( </CarrinhoVazio>
        );
      }
      // quero comentar o que está aqui embaixo
      // if (totalValorCarrinho === 0) {
      //   totalValorCarrinho = null;
      // }
    } else {
      carrinhoDeCompras = [];

      componenteTotalValorCarrinho = (
        <EsconderCarrinho>{componenteTotalValorCarrinho}</EsconderCarrinho>
      );
    }

    let sinalTamanhoCarrinho;

    if (this.props.carrinhoProps) {
      const contadorCarrinho = this.props.carrinhoProps.length;
      if (contadorCarrinho) {
        sinalTamanhoCarrinho = (
          <EstiloSinalTamanhoCarrinho>
            {contadorCarrinho}
          </EstiloSinalTamanhoCarrinho>
        );
      } else {
        sinalTamanhoCarrinho = null;
      }
    }
    

    // const sinalTamanhoCarrinho = <EstiloSinalTamanhoCarrinho>{contadorCarrinho}</EstiloSinalTamanhoCarrinho>

    return (
      <div>
        <BotaoCarrinhoContainer onClick={this.clicarCarrinho}>
          <EstiloIconeCarrinho src={iconeCarrinho} />
          {sinalTamanhoCarrinho}
        </BotaoCarrinhoContainer>
        <EstiloCarrinhoCompleto>
          {carrinhoDeCompras}
          {componenteTotalValorCarrinho}
        </EstiloCarrinhoCompleto>
      </div>
    );
  }
}
