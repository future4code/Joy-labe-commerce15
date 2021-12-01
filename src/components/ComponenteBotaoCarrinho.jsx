import React from "react";
import styled from "styled-components";


const EsconderCarrinho = styled.div`
    display: none;
`


export class ComponenteBotaoCarrinho extends React.Component {
    state ={
        mostrarCarrinho: false,
    }


    clicarCarrinho = () => {
        this.setState({
            mostrarCarrinho: !this.state.mostrarCarrinho
        })
    }

    adicionaQuantidade = (index) => {
        this.props.adicionaQuantidade(index)
    }

    diminuiQuantidade = (index) => {
        this.props.diminuiQuantidade(index)
    }


    render() {

        let totalValorCarrinho = 0

        let carrinhoDeCompras = this.props.carrinhoProps


        if (this.state.mostrarCarrinho) {
            if (carrinhoDeCompras.length) {
                carrinhoDeCompras = carrinhoDeCompras.map((objeto, index) => {
                    return (
                        <div>
                            <img src={objeto.imageUrl}/>
                            <p>{objeto.name}</p>
                            <p>{objeto.value}</p>
                            <button onClick={() => this.diminuiQuantidade(index)}>-</button>
                            <p>{objeto.quantidade}</p>
                            <button onClick={() => this.adicionaQuantidade(index)}>+</button>
                        </div>
                    )
                })

                for (const itemCarrinho of this.props.carrinhoProps) {
                    totalValorCarrinho += itemCarrinho.value * itemCarrinho.quantidade
                }

                totalValorCarrinho = 
                    <div>
                        <p>total</p>
                        <p>{totalValorCarrinho}</p>
                    </div>


            } else {
                carrinhoDeCompras = <div>O Carrinho está vazio </div>
            }


            if (totalValorCarrinho === 0) {
                totalValorCarrinho = <EsconderCarrinho>{totalValorCarrinho}</EsconderCarrinho>
            }
            
        } else {
            carrinhoDeCompras = carrinhoDeCompras.map(objeto => {
                return (
                    <EsconderCarrinho></EsconderCarrinho>
                )
            })
            totalValorCarrinho = <EsconderCarrinho>{totalValorCarrinho}</EsconderCarrinho>
            
        }
        
        // let totalValorCarrinho = 0

        // for (const objeto of this.props.carrinhoProps) {
        //     totalValorCarrinho += objeto.value * objeto.quantidade
        // }


        return(
            <div>
                <button onClick={this.clicarCarrinho}>Botão Carrinho</button>
                {carrinhoDeCompras}
                {totalValorCarrinho}
            </div>
        )
    }
}



// Exemplo de Produto que vai na listaDeProdutos e também no carrinho:

    // {
    //     id: 1,
    //     name: "Foguete da Missão Apollo 11",
    //     value: 10000.0,
    //     imageUrl: "https://picsum.photos/200/200",
    // }