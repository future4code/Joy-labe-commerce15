import React from "react";
import { Body } from "../components/Body";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export class Home extends React.Component {
  state = {
    carrinho: [],
    listaDeProdutos: [
      {
        id: 1,
        name: "Teste Componente de Produto",
        value: 100.15,
        imageUrl: "https://picsum.photos/200/200",
        quantidade: 1,
      },
      {
        id: 2,
        name: "Teste 2",
        value: 155.15,
        imageUrl: "https://picsum.photos/200/200",
        quantidade: 1,
      },
      {
        id: 3,
        name: "Teste 3",
        value: 95.23,
        imageUrl: "https://picsum.photos/200/200",
        quantidade: 1,
      },
      {
        id: 4,
        name: "Teste 4",
        value: 334.22,
        imageUrl: "https://picsum.photos/200/200",
        quantidade: 1,
      },
      {
        id: 5,
        name: "Teste 5",
        value: 55.08,
        imageUrl: "https://picsum.photos/200/200",
        quantidade: 1,
      },
    ],
    listaFiltrada: [],
    valorMinimo: "",
  };

  adicionarCarrinho = (novoItem) => {
    console.log("novoItem", novoItem);

    // Primeiro, atualiza quantidade com um map
    let carrinhoAtualizado = this.state.carrinho.map((objeto, index) => {
      if (novoItem.id === objeto.id) {
        return { ...objeto, quantidade: objeto.quantidade + 1 };
      } else {
        return objeto;
      }
    });

    // Segundo, coloca o item no carrinho se ele não estiver no carrinho ainda

    let jaEstaNoCarrinho = false;

    for (const objeto of carrinhoAtualizado) {
      if (novoItem.id === objeto.id) {
        jaEstaNoCarrinho = true;
        break;
      }
    }

    if (!jaEstaNoCarrinho) {
      carrinhoAtualizado = [...carrinhoAtualizado, { ...novoItem }];

      this.setState({
        carrinho: [...carrinhoAtualizado],
      });
    } else {
      this.setState({
        carrinho: [...carrinhoAtualizado],
      });
    }
  };

  adicionaQuantidade = (index) => {
    let carrinhoAtualizado = this.state.carrinho;
    carrinhoAtualizado[index].quantidade += 1;

    this.setState({
      carrinho: [...carrinhoAtualizado],
    });
  };

  diminuiQuantidade = (index) => {
    let carrinhoAtualizado = this.state.carrinho;
    carrinhoAtualizado[index].quantidade -= 1;

    carrinhoAtualizado = carrinhoAtualizado.filter((objeto) => {
      if (objeto.quantidade > 0) {
        return true;
      } else {
        return false;
      }
    });

    this.setState({
      carrinho: [...carrinhoAtualizado],
    });
  };

  onChangeValorMinimo = (eventoValorMinimo) => {
    this.setState({
      valorMinimo: eventoValorMinimo,
    });
  };

 

  render() {

    const listaDeProdutosFiltrada = this.state.listaDeProdutos.filter((objeto) => {
        if (
          this.state.valorMinimo === "" ||
          this.state.valorMinimo <= objeto.value
        ) {
          return true;
        } else {
          return false;
        }
      });

      console.log("listaDeProdutosFiltrada",listaDeProdutosFiltrada)


    console.log("this.state.listaDeProdutos", this.state.listaDeProdutos);
    console.log("this.listaDeProdutosFiltrada", this.listaDeProdutosFiltrada);

    return (
      <div>
        <Header
          carrinhoProps={this.state.carrinho}
          adicionaQuantidade={this.adicionaQuantidade}
          diminuiQuantidade={this.diminuiQuantidade}
        />
        <Body
          listaFiltrada={listaDeProdutosFiltrada}
          adicionarCarrinho={this.adicionarCarrinho}
          valorMinimo={this.state.valorMinimo}
          onChangeValorMinimo={this.onChangeValorMinimo}
        />
        <Footer />
      </div>
    );
  }
}
