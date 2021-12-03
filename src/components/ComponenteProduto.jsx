import React from "react";
import styled from "styled-components";
import {BotaoAdicionaCarrinho} from './BotaoAdicionaCarrinho'

const EstiloComponenteProduto = styled.div`
    border: 1px solid;
    width: 20rem;
    height: 25rem;
`

const EstiloLista = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    gap: 2rem;
    padding: 2rem;
`

const InfosProduto = styled.div`
    display: flex;
    align-items: center;
`

export class ComponenteProduto extends React.Component {



    render(){

        let listaDeComponentes = this.props.listaFiltrada.map((objeto) => {
            console.log("Lista de Componente exibidos",objeto)

            return (
                <EstiloComponenteProduto>
                    <img src={objeto.imageUrl} />
                    <InfosProduto>
                        <div>
                            <p>{objeto.name}</p>
                            <p>{objeto.value}</p>
                        </div>
                        <BotaoAdicionaCarrinho listaDeProdutos={objeto} adicionarCarrinho={this.props.adicionarCarrinho}/>           
                    </InfosProduto>
                </EstiloComponenteProduto>
            )
        })


        return(
            <EstiloLista>
                {listaDeComponentes}
            </EstiloLista>
        )
    }
}

    // {
    //     id: 1,
    //     name: "Foguete da Missão Apollo 11",
    //     value: 10000.0,
    //     imageUrl: "https://picsum.photos/200/200",
    // }