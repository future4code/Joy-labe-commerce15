import React from "react";
import styled from "styled-components";
import { BarraDeBusca } from "./BarraDeBusca";
import { BotaoCarrinho } from "./BotaoCarrinho";

const TesteHeader = styled.div`
    background-color: #82c791;
`


export class Header extends React.Component {


    render() {
        return(
            <TesteHeader>
                Logo
                <BarraDeBusca />
                <BotaoCarrinho />
            </TesteHeader>
        )
    }
}