import React from "react";
import styled from "styled-components";
import { BotaoAdicionaCarrinho } from "./BotaoAdicionaCarrinho";

const EstiloComponenteProduto = styled.div`
  border: none;
  width: 20rem;
  height: 25rem;
  box-shadow: 0px 5px 10px #7e7e7e;
`;

const EstiloLista = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 4rem;
  padding: 2rem;
`;

const InfosProduto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30%;
  padding: 0rem 1rem;
`;

const ImagemContainer = styled.div`
  height: 70%;
`;

const ImagemProduto = styled.img`
  width: 320px;
  height: 100%;
  object-fit: cover;
`;
const Nome = styled.div`
`;

const Valor = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  margin-top: 1rem;
`;

const TesteSpan = styled.span`
    font-size: 0.8rem;
    font-weight: normal;
`

export class ComponenteProduto extends React.Component {
  render() {
    let listaDeComponentes = this.props.listaFiltrada.map((objeto) => {
      console.log("Lista de Componente exibidos", objeto);

      return (
        <EstiloComponenteProduto>
          <ImagemContainer>
            <ImagemProduto src={objeto.imageUrl} />
          </ImagemContainer>
          <InfosProduto>
            <div>
              <Nome>{objeto.name}</Nome>
              <Valor><TesteSpan>R$</TesteSpan> {objeto.value}</Valor>
            </div>
            <BotaoAdicionaCarrinho
              listaDeProdutos={objeto}
              adicionarCarrinho={this.props.adicionarCarrinho}
            />
          </InfosProduto>
        </EstiloComponenteProduto>
      );
    });

    return <EstiloLista>{listaDeComponentes}</EstiloLista>;
  }
}

// {
//     id: 1,
//     name: "Foguete da Missão Apollo 11",
//     value: 10000.0,
//     imageUrl: "https://picsum.photos/200/200",
// }
