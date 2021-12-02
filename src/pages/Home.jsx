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
                quantidade: 1
            },
            {
                id: 2,
                name: "Teste 2",
                value: 155.15,
                imageUrl: "https://picsum.photos/200/200",
                quantidade: 1
            },
            {
                id: 3,
                name: "Teste 3",
                value: 95.23,
                imageUrl: "https://picsum.photos/200/200",
                quantidade: 1
            },
            {
                id: 4,
                name: "Teste 4",
                value: 334.22,
                imageUrl: "https://picsum.photos/200/200",
                quantidade: 1
            },
            {
                id: 5,
                name: "Teste 5",
                value: 55.08,
                imageUrl: "https://picsum.photos/200/200",
                quantidade: 1
            }
        ],
    }

    adicionarCarrinho = (novoItem) => {

        // Primeiro, autaliza quantidade com um map
        let carrinhoAtualizado = this.state.carrinho.map((objeto, index) => {
            if (novoItem.id === objeto.id) {
                objeto.quantidade += 1
                return(objeto)
            } else {return(objeto)}
        })

        // Segundo, coloca o item no carrinho se ele não estiver no carrinho ainda

        let jaEstaNoCarrinho = false

        for (const objeto of carrinhoAtualizado) {
            if (novoItem.id === objeto.id) {
                jaEstaNoCarrinho = true
            }
        }

        if (!jaEstaNoCarrinho) {
            carrinhoAtualizado = [...carrinhoAtualizado, novoItem]
            
            this.setState({
                carrinho: [...carrinhoAtualizado],
            })
        } else {
            this.setState({
                carrinho: [...carrinhoAtualizado],
            })
        }
        
    }

    adicionaQuantidade = (index) => {

        let carrinhoAtualizado = this.state.carrinho
        carrinhoAtualizado[index].quantidade += 1

        this.setState ({
            carrinho: [...carrinhoAtualizado]
        })

    }

    diminuiQuantidade = (index) => {

        let carrinhoAtualizado = this.state.carrinho
        carrinhoAtualizado[index].quantidade -= 1

        carrinhoAtualizado = carrinhoAtualizado.filter(objeto => {
            if (objeto.quantidade) {
                return(true)
            } else {return(false)}
        })

        this.setState ({
            carrinho: [...carrinhoAtualizado]
        })

    }

    render(){

    console.log("O carrinho é:", this.state.carrinho)

        return(
            <div>
                <Header carrinhoProps={this.state.carrinho} adicionaQuantidade={this.adicionaQuantidade} diminuiQuantidade={this.diminuiQuantidade}/>
                <Body listaDeProdutos={this.state.listaDeProdutos} adicionarCarrinho={this.adicionarCarrinho}/>
                <Footer />
            </div>
        )
    }
}
