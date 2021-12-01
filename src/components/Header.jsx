import React from "react";
import styled from "styled-components";
import { BarraDeBusca } from "./BarraDeBusca";
import  BotaoCarrinho  from "../images/shopping_cart_black_24dp.svg";
import Foguete from "../images/rocket.png"

const TesteHeader = styled.div`
    background-color: #82c791;
`
const EstiloFoguete = styled.img`
margin:10px 10px;
text-align:center;
max-width: 50px;`


const BarraPesquisa = styled.div`
width: 400px; 
height: 35px;  
margen: left 300px;
background-position: center;  
background-repeat: no-repeat;
background-color: #fff; 
border: 2px solid #000; 
border-radius: 4px;
padding: left ;
margin-left: 350px;
margin-right: auto;
margin-top: -60px;
width: 25em;`

const Carrinho = styled.img`
padding: right;
margin-left: -250px;
margin-right: ;
width: 25em;
margin:10px 10px;
text-align: 100px;
max-width: 50px;
margin-top: -60px;`


export class Header extends React.Component {


    render() {
        return(
            <TesteHeader>
                <EstiloFoguete src= {Foguete}/> 
                <BarraPesquisa src = {BarraDeBusca} />
                <Carrinho src = {BotaoCarrinho}/>
            </TesteHeader>
        )
    }
}