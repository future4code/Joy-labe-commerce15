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
            },
            {
                id: 2,
                name: "Teste 2",
                value: 155.15,
                imageUrl: "https://picsum.photos/200/200",
            }
        ],
    }

    // Exemplo de Produto que vai na listaDeProdutos e também no carrinho:

    // {
    //     id: 1,
    //     name: "Foguete da Missão Apollo 11",
    //     value: 10000.0,
    //     imageUrl: "https://picsum.photos/200/200",
    // }

    adicionarCarrinho = (novoItem) => {
        this.setState({
            carrinho: [...this.state.carrinho, novoItem],
        })
        
    }

    render(){

    console.log("O carrinho é:", this.state.carrinho)

        return(
            <div>
                <Header />
                <Body listaDeProdutos={this.state.listaDeProdutos} adicionarCarrinho={this.adicionarCarrinho}/>
                <Footer />
            </div>
        )
    }
}
