import React from "react";
import styled from "styled-components";
import iconeCarrinho from '../images/shopping_cart_black_24dp.svg'


const BotaoCarrinhoContainer = styled.button`
    background-color: white;
    border: none;
    border-radius: 50%;
    padding: 0.75rem;
    cursor: pointer;

    &:hover {
        background-color: #C9DCFF;
    }
`

const EstiloIconeCarrinho = styled.img`
    height: 25px;
`

const EsconderCarrinho = styled.div`
    display: none;
`

const EstiloCarrinhoCompleto = styled.div`
    position: absolute;
    background-color: #C9DCFF;
    width: 30rem;
    right: 1rem;
    top: 5rem;
    box-shadow: 0rem 0rem 3rem #545353 ;
    border-radius: 1rem;
`

const ProdutoCarrinho = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
`

const ImagemEDescricao = styled.div`
    display: flex;
`

const NomeEPreco = styled.div`
    margin-left:1rem;
`

const ImagemProdutoCarrinho = styled.img`
    height: 5rem;
    border-radius: 50%;
`

const QuantidadeProduto = styled.div`

    display: flex;
    align-items: center;
`

const BotaoQuantidade = styled.button`
    background-color: transparent;
    border: none;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0rem 1rem;
    cursor: pointer;
`

const CarrinhoVazio = styled.div`
    text-align: center;
    padding: 4rem 0rem;
`

const CalculadoraValor = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: flex-end;
    padding: 3rem;
`

const ItemsCalculadoraValor = styled.p`
    font-weight: bold;
    padding-left: 2rem;
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
                        <ProdutoCarrinho>
                            <ImagemEDescricao>
                                <ImagemProdutoCarrinho src={objeto.imageUrl}/>
                                <NomeEPreco>
                                    <p>{objeto.name}</p>
                                    <p>{objeto.value}</p>
                                </NomeEPreco>
                            </ImagemEDescricao>
                            <QuantidadeProduto>
                                <BotaoQuantidade onClick={() => this.diminuiQuantidade(index)}>-</BotaoQuantidade>
                                <p>{objeto.quantidade}</p>
                                <BotaoQuantidade onClick={() => this.adicionaQuantidade(index)}>+</BotaoQuantidade>
                            </QuantidadeProduto>
                        </ProdutoCarrinho>
                    )
                })

                for (const itemCarrinho of this.props.carrinhoProps) {
                    totalValorCarrinho += itemCarrinho.value * itemCarrinho.quantidade
                }

                totalValorCarrinho = 
                    <CalculadoraValor>
                        <ItemsCalculadoraValor>Total</ItemsCalculadoraValor>
                        <ItemsCalculadoraValor>R$ {totalValorCarrinho}</ItemsCalculadoraValor>
                    </CalculadoraValor>


            } else {
                carrinhoDeCompras = <CarrinhoVazio>O Carrinho está vazio :( </CarrinhoVazio>
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
                <BotaoCarrinhoContainer onClick={this.clicarCarrinho}><EstiloIconeCarrinho src={iconeCarrinho}/></BotaoCarrinhoContainer>
                <EstiloCarrinhoCompleto>
                    {carrinhoDeCompras}
                    {totalValorCarrinho}
                </EstiloCarrinhoCompleto>
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