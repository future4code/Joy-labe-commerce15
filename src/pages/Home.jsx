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
        name: "Pelúcia Astronauta Super Fofo ",
        value: 50.99,
        imageUrl: "https://ae01.alicdn.com/kf/H1ec05c1ddd834ea5a98eecabf09c630fQ/1pc-33-60cm-bonito-recheado-macio-astronauta-brinquedos-de-pel-cia-cosmonauta-vida-real-nave-espacial.jpg_640x640.jpg",
        quantidade: 1,
      },
      {
        id: 2,
        name: "Conjunto de Brinquedos Astronauta",
        value: 90.00,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mPpWMa5uEgH3O3hyEZVKKM_BUTFXgsdviA&usqp=CAU",
        quantidade: 1,
      },
      {
        id: 3,
        name: "Roupa Infantil Astronauta",
        value: 160.00,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxVz5APqLosVMM9pWk5kVUZi_3evx--IOLA&usqp=CAU",
        quantidade: 1,
      },
      {
        id: 4,
        name: "Foguete Divertido",
        value: 120.00,
        imageUrl: "https://i.ytimg.com/vi/BaHkNVt_k2Q/maxresdefault.jpg",
        quantidade: 1,
      },
      {
        id: 5,
        name: "Roupa Completa de Astronauta",
        value: 400.00,
        imageUrl: "http://blogdebrinquedo.com.br/wp-content/uploads/2009/05/mochila-astronauta-02.jpg",
        quantidade: 1,
      },
      {
        id: 6,
        name: "Capacete de Astronauta",
        value: 250.00,
        imageUrl: "https://thumbs.dreamstime.com/b/crian%C3%A7a-brincando-com-capacete-astronauta-e-foguete-de-brinquedo-menino-sorridente-feliz-usando-uma-fantasia-nave-espacial-pijama-190657857.jpg",
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
