import React from "react";
import { Body } from "../components/Body";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export class Home extends React.Component {
  state = {
    carrinho: new Array(),
    listaDeProdutos: [
      {
        id: 19,
        name: "Quebra Cabeça Intantil Números no Espaço",
        value: 78.57,
        imageUrl:
          "https://imagogroup.com/us/wp-content/uploads/2020/05/SpaceNUmbers.jpg",
        quantidade: 1,
      },
      {
        id: 7,
        name: "Alien Toy Story - Pacote com 3",
        value: 280.0,
        imageUrl:
          "https://cea.vtexassets.com/arquivos/ids/26416294-800-auto?v=637474434575070000&width=800&height=auto&aspect=true",
        quantidade: 1,
      },
      {
        id: 8,
        name: "Estátua de Guerreiro Espacial",
        value: 310.0,
        imageUrl:
          "https://cdnb.artstation.com/p/assets/images/images/027/428/431/4k/andrew-morris-3.jpg?1591523492",
        quantidade: 1,
      },
      {
        id: 9,
        name: "Playmobil Space 60 peças",
        value: 478.0,
        imageUrl:
          "https://a-static.mlcdn.com.br/1500x1500/playmobil-space-box-missao-para-marte-astronautas-sunny-2528-sunny-brinquedos/toysteam/7899573625283/d34915c5beb8f94473ed8a32e931870f.jpg",
        quantidade: 1,
      },
      {
        id: 10,
        name: "Lego City Espacial",
        value: 339.97,
        imageUrl:
          "https://www.lego.com/cdn/cs/set/assets/blta59928b8f8206631/60228_alt1.jpg?fit=bounds&format=jpg&quality=80&width=528&height=528&dpr=1",
        quantidade: 1,
      },
      {
        id: 20,
        name: "Nós amamos espaço Quebra Cabeça",
        value: 239.77,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0035/0715/9129/products/WeLoveSpace-150PiecesBox-89407_800x800.jpg?v=1631521303",
        quantidade: 1,
      },
      {
        id: 1,
        name: "Pelúcia Astronauta Super Fofo ",
        value: 50.99,
        imageUrl:
          "https://ae01.alicdn.com/kf/H1ec05c1ddd834ea5a98eecabf09c630fQ/1pc-33-60cm-bonito-recheado-macio-astronauta-brinquedos-de-pel-cia-cosmonauta-vida-real-nave-espacial.jpg_640x640.jpg",
        quantidade: 1,
      },
      {
        id: 2,
        name: "Conjunto de Brinquedos Astronauta",
        value: 90.0,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mPpWMa5uEgH3O3hyEZVKKM_BUTFXgsdviA&usqp=CAU",
        quantidade: 1,
      },
      {
        id: 3,
        name: "Roupa Infantil Astronauta",
        value: 160.0,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxVz5APqLosVMM9pWk5kVUZi_3evx--IOLA&usqp=CAU",
        quantidade: 1,
      },
      {
        id: 4,
        name: "Foguete Divertido",
        value: 120.0,
        imageUrl: "https://i.ytimg.com/vi/BaHkNVt_k2Q/maxresdefault.jpg",
        quantidade: 1,
      },
      {
        id: 5,
        name: "Roupa Completa de Astronauta",
        value: 400.0,
        imageUrl:
          "http://blogdebrinquedo.com.br/wp-content/uploads/2009/05/mochila-astronauta-02.jpg",
        quantidade: 1,
      },
      {
        id: 6,
        name: "Capacete de Astronauta",
        value: 250.0,
        imageUrl:
          "https://thumbs.dreamstime.com/b/crian%C3%A7a-brincando-com-capacete-astronauta-e-foguete-de-brinquedo-menino-sorridente-feliz-usando-uma-fantasia-nave-espacial-pijama-190657857.jpg",
        quantidade: 1,
      },
      {
        id: 11,
        name: "Buzzlightyear Golpe de Karatê",
        value: 239.78,
        imageUrl:
          "https://cea.vtexassets.com/arquivos/ids/15076184/image-961ecae4be9a4ba4a962884e52b1de65.jpg?v=637313178241270000",
        quantidade: 1,
      },
      {
        id: 12,
        name: "R2-D2 - Star Wars ",
        value: 112.39,
        imageUrl:
          "https://pyxis.nymag.com/v1/imgs/952/02f/5d281d5d92118626c07d903852f5f97fce-14---.2x.rhorizontal.w600.jpg",
        quantidade: 1,
      },
      {
        id: 13,
        name: "Yoda, a Criança - Star Wars ",
        value: 115.67,
        imageUrl:
          "https://rihappy.vtexassets.com/arquivos/ids/1490484-500-auto?v=637607701238200000&width=500&height=auto&aspect=true",
        quantidade: 1,
      },
      {
        id: 14,
        name: "Telescópio Ecoopro - Azul",
        value: 739.90,
        imageUrl:
          "https://m.media-amazon.com/images/I/717shvT1giL._AC_SL1500_.jpg",
        quantidade: 1,
      },
      {
        id: 15,
        name: "Sabres de Luz - Pacote com 3 - Star Wars ",
        value: 415.60,
        imageUrl:
          "http://geekytrendz.com/wp-content/uploads/2015/12/84cm-Star-Wars-no-light-sword-Weapons-Action-Figures-PVC-brinquedos-Collection-Figures-toys-for-christmas.jpg",
        quantidade: 1,
      },
      {
        id: 16,
        name: "Massinha de Modelar 'Mars Dirt'",
        value: 68.99,
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8e1sVKx7VOW6TZpFNblz2tdbrBsfSVEP6qw&usqp=CAU",
        quantidade: 1,
      },
      {
        id: 17,
        name: "ET Boneco de Pelúcia",
        value: 189.97,
        imageUrl:
          "https://m.media-amazon.com/images/I/71FvtBSdDFL._AC_SL1500_.jpg",
        quantidade: 1,
      },
      {
        id: 18,
        name: "Sistema Solar Miniatura",
        value: 114.22,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/2281/5369/products/solar-system-792801.jpg?v=1581262769",
        quantidade: 1,
      },
    ],

    listaFiltrada: [],
    valorMinimo: "",
    valorMaximo: "",
    ordenacao: "",
    buscaProduto: "",
  };

  adicionarCarrinho = (novoItem) => {
    console.log("novoItem", novoItem);
    console.log("carrinho typeof", typeof this.state.carrinho)
    console.log("carrinho", this.state.carrinho)

    // Primeiro, atualiza quantidade com um map
    let carrinhoAtualizado = [...this.state.carrinho.map((objeto, index) => {
      if (novoItem.id === objeto.id) {
        return { ...objeto, quantidade: objeto.quantidade + 1 };
      } else {
        return objeto;
      }
    })];

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
    let carrinhoAtualizado = [...this.state.carrinho];
    carrinhoAtualizado[index].quantidade += 1;

    this.setState({
      carrinho: [...carrinhoAtualizado],
    });
  };

  diminuiQuantidade = (index) => {
    let carrinhoAtualizado = [...this.state.carrinho];
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

  onChangeValorMaximo = (eventoValorMaximo) => {
    this.setState({
      valorMaximo: eventoValorMaximo,
    });
  };

  onChangeOrdem = (eventoChangeOrdem) => {
    this.setState({
      ordenacao: eventoChangeOrdem,
    });
  };

  onChangeBuscaProduto = (eventoBuscaProduto) => {
    this.setState({
      buscaProduto: eventoBuscaProduto,
    });
  };

  onClickLimparFiltros = () => {
    this.setState({
      valorMinimo: "",
      valorMaximo: "",
      ordenacao: "",
      buscaProduto: "",
    })
  }

  componentDidMount() {
    const carrinhoLocalStorage = JSON.parse(localStorage.getItem("carrinho"))

    this.setState({
      carrinho: carrinhoLocalStorage
    })
  }

  componentDidUpdate() {
    localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho))
  }

  render() {
    const listaDeProdutosFiltrada = this.state.listaDeProdutos
      .filter((objeto) => {
        if (
          this.state.valorMinimo === "" ||
          this.state.valorMinimo <= objeto.value
        ) {
          return true;
        } else {
          return false;
        }
      })
      .filter((objeto) => {
        if (
          this.state.valorMaximo === "" ||
          this.state.valorMaximo >= objeto.value
        ) {
          return true;
        } else {
          return false;
        }
      })
      .sort((a, b) => {
        if (this.state.ordenacao === "crescentePreco") {
          return a.value - b.value;
        } else if (this.state.ordenacao === "decrescentePreco") {
          return b.value - a.value;
        }
      })
      .filter((object) => {
        const comparacaoBusca = object.name
          .toLowerCase()
          .includes(this.state.buscaProduto.toLowerCase());

        if (comparacaoBusca || this.state.buscaProduto === "") {
          return true;
        } else {
          return false;
        }
      })
      .sort((a, b) => {
        if (this.state.ordenacao === "crescenteAlfabetico") {
          return a.name.localeCompare(b.name);
        } else if (this.state.ordenacao === "decrescenteAlfabetico") {
          return a.name.localeCompare(b.name) * -1;
        }
      });


    return (
      <div>
        <Header
          carrinhoProps={this.state.carrinho}
          adicionaQuantidade={this.adicionaQuantidade}
          diminuiQuantidade={this.diminuiQuantidade}
          buscaProduto={this.state.buscaProduto}
          onChangeBuscaProduto={this.onChangeBuscaProduto}
        />
        <Body
          listaFiltrada={listaDeProdutosFiltrada}
          adicionarCarrinho={this.adicionarCarrinho}
          valorMinimo={this.state.valorMinimo}
          onChangeValorMinimo={this.onChangeValorMinimo}
          valorMaximo={this.state.valorMaximo}
          onChangeValorMaximo={this.onChangeValorMaximo}
          onChangeOrdem={this.onChangeOrdem}
          onClickLimparFiltros={this.onClickLimparFiltros}
        />
        <Footer />
      </div>
    );
  }
}
